// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const infinite_cache = { key: "Cache-Control", value: "public, max-age=9999999999, must-revalidate", };
const headers = async () => {
    return [
        {
            source: '/:all*.(svg|jpg|jpeg|png|webp)',
            locale: false,
            headers: [ infinite_cache, ],
        },
        {
            source: '/_next/image(.*)',
            locale: false,
            headers: [ infinite_cache, ],
        },
    ];
};

// eslint-disable-next-line max-lines-per-function, no-undef
module.exports = (phase, { defaultConfig }) => {
    // const enviroment = process.env.NODE_ENV || "development";

    const baseConfig = {
        ...defaultConfig,
        poweredByHeader: false,
        reactStrictMode: true, // Good Practice apparently
        basePath: '/nextjs-template',
        headers: headers,
    };

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
        /* development only config options here */
            ...baseConfig
        }
    }

    return {
        /* config options for all phases except development here */
        ...baseConfig
    }
}