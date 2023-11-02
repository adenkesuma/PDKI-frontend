const withNextIntl = require("next-intl/plugin")(
    "./i18n.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'https://api.pdkindonesia.com/',
            'www.woncaaprc2022.org',
            'www.globalfamilydoctor.com',
            'pdkijateng.org',
            'infeksiemerging.kemkes.go.id',
            'www.woncaeurope.org',
            'www.woncaaprc2022.org',
            'rma.acrrm.org.au',
            'woncaeurope2020.org',
            'i.ytimg.com',
            'localhost',
            'https://images.unsplash.com',
            'https://unsplash.com',
            'api.pdkiserver.site',
            'https://www.youtube.com',
        ],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "api.pdkindonesia.com",
              port: "",
              pathname: "/**",
            },
        ],
    },
    env: {
        BASE_URL: process.env.BASE_URL,
        JWT_SIGNIN_PRIVATE_KEY: process.env.JWT_SIGNIN_PRIVATE_KEY,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
    }
}

module.exports = withNextIntl(nextConfig)
