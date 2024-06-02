"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

interface IProps {
	children: React.ReactNode
}

const routeClassNames: { [key: string]: string } = {
	'/': 'home',
	'/about': 'about',
	'/contact': 'contact',
	'/locations': 'locations'
}

function Main({ children }: IProps) {
	const pathname: string | null = usePathname()

	const getClassName = (pathname: string | null): string => {
		if (pathname && routeClassNames[pathname]) {
			return `main--${routeClassNames[pathname]}-page`
		}
		
        else {
            return 'main--design-page'
        }
	}

	return <main className={getClassName(pathname)}>{children}</main>
}

export default Main
