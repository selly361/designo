import Head from 'next/head'
import { Jost } from 'next/font/google'
import '@/Styles/globals.scss'
import { Footer, Header, Main } from '@/Components'
import { PropsWithChildren } from 'react'

const jost = Jost({ subsets: ['latin'] })


export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico?v=2' />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			</Head>
			<body className={jost.className}>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</body>
		</html>
	)
}
