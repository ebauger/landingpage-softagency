import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const { lang } = params;

    // Validate supported languages
    const supportedLangs = ['en', 'fr'];
    if (!supportedLangs.includes(lang)) {
        throw new Error(`Unsupported language: ${lang}`);
    }

    return {
        // Pass the language parameter to the component
        lang,
        isParaglideTest: true,
        title: 'Paraglide JS Translation Test'
    };
};