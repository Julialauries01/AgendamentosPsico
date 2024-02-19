/** @type {import('next').NextConfig} */

const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: "media.istockphoto.com"
      },
   ],
   },
};

export default nextConfig;
