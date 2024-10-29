import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.prague-guide.co.uk'
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org'
			},
			{
				protocol: 'https',
				hostname: 'vignetteaustria.com'
			},
			{
				protocol: 'https',
				hostname: 'files.structurae.net'
			},
			{
				protocol: 'https',
				hostname: 'www.swissinfo.ch'
			},
			{
				protocol: 'https',
				hostname: 'www.lrt.lt'
			},
			{
				protocol: 'https',
				hostname: 'www.itsinternational.com'
			},
			{
				protocol: 'https',
				hostname: 'img.freepik.com'
			},
			{
				protocol: 'https',
				hostname: 'cdn.aiidatapro.net'
			},
			{
				protocol: 'https',
				hostname: 'moldovainvest.eu'
			}
		]
	}
}

export default nextConfig
