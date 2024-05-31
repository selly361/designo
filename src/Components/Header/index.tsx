import Image from 'next/image'
import Link from 'next/link'
import logoImage from '@/Assets/Images/shared/logo-dark.png'
import styles from './header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<Link className={styles.header__logoLink} aria-label='Home' href='/'>
					<Image
						src={logoImage}
						alt='Designo Logo'
						width={202}
						height={27}
						className={styles.header__logo}
					/>
				</Link>
				<nav className={styles.header__nav} aria-label='Main navigation'>
					<ul className={styles.header__navList}>
						<li className={styles.header__navItem}>
							<Link className={styles.header__navLink} href='/about'>
								OUR COMPANY
							</Link>
						</li>
						<li className={styles.header__navItem}>
							<Link className={styles.header__navLink} href='/locations'>
								LOCATIONS
							</Link>
						</li>
						<li className={styles.header__navItem}>
							<Link className={styles.header__navLink} href='/contact'>
								CONTACT
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
