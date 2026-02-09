// @ts-ignore
import viteHTMLIncludes from '@kingkongdevs/vite-plugin-html-includes';

export default {
    base: '/School_of_drawing/',
    plugins: [
        viteHTMLIncludes({
            componentsDir: '/components/',
        }),
    ]
}