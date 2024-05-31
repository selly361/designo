import Head from 'next/head'
import { Jost } from 'next/font/google'
import '@/Styles/globals.scss'

const jost = Jost({ subsets: ['latin'] })

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico?v=2' />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			</Head>
			<body className={jost.className}>
				<main>{children}</main>
			</body>
		</html>
	)
}
