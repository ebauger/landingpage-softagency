// i18n rule: every page must be available in en and fr through Paraglide.
// This script enforces the message-file half of that rule:
//  - messages/en.json and messages/fr.json declare exactly the same keys
//  - every value is a plain string (arrays/objects/numbers crash the paraglide compiler)
//  - {placeholder} sets match between locales for each key
// Usage: node scripts/check-i18n.mjs [enFile frFile]
import { readFileSync } from 'node:fs';

const [enFile = 'messages/en.json', frFile = 'messages/fr.json'] = process.argv.slice(2);
const locales = {
	en: JSON.parse(readFileSync(enFile, 'utf8')),
	fr: JSON.parse(readFileSync(frFile, 'utf8'))
};

const errors = [];

for (const [locale, messages] of Object.entries(locales)) {
	for (const [key, value] of Object.entries(messages)) {
		if (key === '$schema') continue;
		if (typeof value !== 'string') {
			errors.push(
				`${locale}: "${key}" is ${Array.isArray(value) ? 'an array' : typeof value} — messages must be plain strings`
			);
		}
	}
}

const keys = {
	en: new Set(Object.keys(locales.en).filter((k) => k !== '$schema')),
	fr: new Set(Object.keys(locales.fr).filter((k) => k !== '$schema'))
};
for (const key of keys.en) {
	if (!keys.fr.has(key)) errors.push(`fr: missing key "${key}" (present in en)`);
}
for (const key of keys.fr) {
	if (!keys.en.has(key)) errors.push(`en: missing key "${key}" (present in fr)`);
}

const placeholders = (value) =>
	typeof value === 'string'
		? new Set([...value.matchAll(/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g)].map((m) => m[1]))
		: new Set();
for (const key of keys.en) {
	if (!keys.fr.has(key)) continue;
	const en = placeholders(locales.en[key]);
	const fr = placeholders(locales.fr[key]);
	if (en.size !== fr.size || [...en].some((p) => !fr.has(p))) {
		errors.push(`"${key}": placeholders differ — en {${[...en]}} vs fr {${[...fr]}}`);
	}
}

if (errors.length) {
	console.error(`i18n check failed (${errors.length} problem${errors.length > 1 ? 's' : ''}):`);
	for (const e of errors) console.error(`  - ${e}`);
	process.exit(1);
}
console.log(`i18n check passed: ${keys.en.size} keys, en/fr symmetric.`);
