/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: process.env.API_URL,
	},
	images: {
		domains: ['scene7.toyota.eu', 'www.honda.pl'],
	},
}

module.exports = nextConfig
