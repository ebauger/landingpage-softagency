import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {

    /*     const data = await cvDB.get(params.icu);
        console.log(data);
        if (typeof data === 'undefined') {
            return error(404, 'Not found');
        } else {
            return { ...data };
        } */
    console.log(params.lang);

    const { content, DataType } = await import(/* @vite-ignore */ `/src/lib/lang/${params.lang}.ts`);
    console.log(content.benefits.partnerForSuccess);


    return { content, DataType };
}