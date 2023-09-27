import type { Metadata } from 'next'
import { Teko } from 'next/font/google'
import './globals.scss'

const teko = Teko({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Car Catalog',
	description: 'Car Catalog App using Next.js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={teko.className}>{children}</body>
		</html>
	)
}
