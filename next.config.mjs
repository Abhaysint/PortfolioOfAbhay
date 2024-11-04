/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    typescript:{
        ignoreBuildErrors:true,
    },
    eslint:{
        ignoreBuildErrors:true,
        ignoreDuringBuilds:true,
    }
};

export default nextConfig;
