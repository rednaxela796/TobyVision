/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/static/font/Parisienne-Regular.woff2"
            as="font"
            type="font/css"
            crossOrigin="anonymous"
            key="parisienneFont"
        />,
        <link
            rel="preload"
            href="@fontsource/montserrat/900.css"
            as="font"
            type="font/css"
            crossOrigin="anonymous"
            key="mont900Font"
        />,
        <link
            rel="preload"
            href="@fontsource/noto-serif/400.css"
            as="font"
            type="font/css"
            crossOrigin="anonymous"
            key="noto400Font"
        />,
        <link
            rel="preload"
            href="@fontsource/montserrat/600.css"
            as="font"
            type="font/css"
            crossOrigin="anonymous"
            key="mont600Font"
        />,
        <link
            rel="preload"
            href="@fontsource/montserrat/500.css"
            as="font"
            type="font/css"
            crossOrigin="anonymous"
            key="mont500Font"
        />,
        <link
            rel="preload"
            href="@fontsource/montserrat/400.css"
            as="font"
            type="font/css"
            crossOrigin="anonymous"
            key="mont400Font"
        />,


    ])
}


// You can delete this file if you're not using it
