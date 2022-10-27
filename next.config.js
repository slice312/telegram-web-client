/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: false,
//     swcMinify: true,
//     // webpack: (config) => {
//     //   config.resolve.fallback = { fs: false};
//     //   return config;
//     // }
// };
//
// module.exports = nextConfig;




const path = require("path");


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: true
    },
    // sassOptions: {
    //     includePaths: [path.resolve(__dirname, 'src/styles')],
    // },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
};

module.exports = nextConfig;