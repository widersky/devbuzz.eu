const path = require("path");
const withPlugins = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config');

module.exports = (phase, { defaultConfig }) => {
    const nextPlugins = [
        require('@next/mdx')({
            extension: /\.mdx?$/,
        })
    ];

    /**
     * @type {import("next").NextConfig}
     */
    const nextConfig = {
        i18n,
        swcMinify: true,
        reactStrictMode: true,
        productionBrowserSourceMaps: true,
        experimental: {
            runtime: "nodejs",
            serverComponents: true,
        },
        webpack: (config, { isServer }) => {
            if (!isServer) {
                config.resolve.fallback = {
                    fs: false,
                    process: false
                }
            }

            // Fix for this issues:
            // https://github.com/hashicorp/next-mdx-remote/pull/250
            // https://github.com/hashicorp/next-mdx-remote/issues/254
            config.resolve.alias = {
                ...config.resolve.alias,
                'react/jsx-runtime.js': path.resolve('node_modules/react/jsx-runtime'),
            };

            return config;
        }
    };

    return withPlugins(nextPlugins, nextConfig)(phase, { defaultConfig });
};
