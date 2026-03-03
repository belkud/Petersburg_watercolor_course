// @ts-ignore
import viteHTMLIncludes from '@kingkongdevs/vite-plugin-html-includes';

export default {
    base: '/Petersburg_watercolor_course/',
    plugins: [
        viteHTMLIncludes({
            componentsDir: '/components/',
        }),
    ]
}