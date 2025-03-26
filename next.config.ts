import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
                pathname: '/media/**',

                // protocol: 'https',
                // hostname: 'nxt-fitout.com',
                // port: '',
                // pathname: '/media/**',
            },
        ],
    },
    env: {
        API_URL: "http://127.0.0.1:8000",
        // HostName: "https://nxt-fitout.com",
        // API_URL: "https://nxt-fitout.com",
    },
};

export default nextConfig;