/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // set 'fs' to an empty module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false,
                tls: false,
                net: false,
                path: false,
                zlib: false,
                child_process: false,
            }
        }

        return config;
    }
}

module.exports = nextConfig
