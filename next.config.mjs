/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/waiting-list',
                permanent: true,
            },
        ];
    }
};

export default nextConfig;
