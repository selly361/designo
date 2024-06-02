import React from 'react'
import styles from './Footer.module.scss'
import Image from 'next/image'
import logoImage from '@/Assets/Images/shared/logo-light.png'
import Link from 'next/link'
import {
	IconFacebook,
	IconYouTube,
	IconTwitter,
	IconPinterest,
	IconInstagram
} from '@/Assets/Icons'

function Footer() {
	return (
		<div className={styles['footer-container']}>
			<div className={styles['footer-container__call-to-action']}>
				<div className={styles['footer-container__call-to-action__container']}>
					<h4
						className={
							styles['footer-container__call-to-action__container__title']
						}
					>
						Let’s talk about your project
					</h4>
					<p
						className={
							styles['footer-container__call-to-action__container__description']
						}
					>
						Ready to take it to the next level? Contact us today and find out
						how our expertise can help your business grow.
					</p>
				</div>
				<button>GET IN TOUCH</button>
			</div>

			<footer className={styles['footer-container__footer']}>
				<nav
					className={styles['footer-container__footer__nav']}
					aria-label='Secondary navigation'
				>
					<Link aria-label='Home' href='/'>
						<Image src={logoImage} alt='Designo Logo' width={202} height={27} />
					</Link>
					<ul>
						<li>
							<Link href='/about'>OUR COMPANY</Link>
						</li>
						<li>
							<Link href='/locations'>LOCATIONS</Link>
						</li>
						<li>
							<Link href='/contact'>CONTACT</Link>
						</li>
					</ul>
				</nav>
				<div className={styles['footer-container__footer__info']}>
					<div className={styles['footer-container__footer__info__address']}>
						<p>Designo Central Office</p>
						<p>3886 Wellington Street</p>
						<p>Toronto, Ontario M9C 3J5</p>
					</div>
					<div className={styles['footer-container__footer__info__contact']}>
						<p>Contact Us (Central Office)</p>
						<p>P : +1 253-863-8967</p>
						<p>M : contact@designo.co</p>
					</div>
					<div className={styles['footer-container__footer__info__social']}>
						<Link href='https://facebook.com' aria-label='Facebook'>
							<IconFacebook />
						</Link>
						<Link href='https://youtube.com' aria-label='YouTube'>
							<IconYouTube />
						</Link>
						<Link href='https://twitter.com' aria-label='Twitter'>
							<IconTwitter />
						</Link>
						<Link href='https://pinterest.com' aria-label='Pinterest'>
							<IconPinterest />
						</Link>
						<Link href='https://instagram.com' aria-label='Instagram'>
							<IconInstagram />
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
