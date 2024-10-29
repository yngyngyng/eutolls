import type { Metadata } from 'next'
import './globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import GoogleAnalytics from '@/lib/ga'
import { CookieConsentComponent } from '@/components/ui/cookie-consent'

export const metadata: Metadata = {
	title: '🇪🇺 EU Tolls',
	description: 'Official vignette selling points.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='dark'>
			<GoogleAnalytics />
			<CookieConsentComponent />
			<body className='w-full dark:bg-black/[0.98] bg-white dark:bg-grid-stone-50/[0.02] bg-grid-black/[0.2] relative flex items-center justify-center'>
				{children}
			</body>
		</html>
	)
}
