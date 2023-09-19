import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const { lang } = params;
    const modules = import.meta.glob('./*.ts');

    if (!modules[`./${lang}.ts`]) {
        // Handle unsupported languages or provide a default
        return { status: 404, error: new Error('Language not supported') };
    }

    const { content, DataType } = await modules[`./${lang}.ts`]();
    return { content, DataType }
};