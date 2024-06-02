import { Fragment } from 'react'
import styles from './home.module.scss'
import phoneImage from '@/Assets/Images/home/image-hero-phone.png'
import Image from 'next/image'
import { CategoryButtons } from '@/Components'
import { IconFriendly, IconPassionate, IconResourceful } from '@/Assets/Icons'

export const metadata = {
	title: 'Designo',
	description: 'Award-winning custom designs and digital branding solutions'
}

function Home() {
	return (
		<Fragment>
			<section className={styles.home__hero}>
				<article className={styles.home__hero__article}>
					<h1 className={styles.home__hero__article__title}>
						Award-winning custom designs and digital branding solutions
					</h1>
					<p className={styles.home__hero__article__description}>
						With over 10 years in the industry, we are experienced in creating
						fully responsive websites, app design, and engaging brand
						experiences. Find out more about our services.
					</p>
					<button className={styles.home__hero__article__button}>
						LEARN MORE
					</button>
				</article>
				<Image
					quality={100}
					priority
					className={styles.home__hero__image}
					src={phoneImage}
					alt='Image of a phone'
				/>
			</section>
			<CategoryButtons />
			<section className={styles['home__cards-section']}>
				<article className={styles['home__cards-section__card']}>
					<div className={styles['home__cards-section__card__icon']}>
						<IconPassionate />
					</div>
					<h3 className={styles['home__cards-section__card__title']}>PASSIONATE</h3>
					<p className={styles['home__cards-section__card__description']}>
						Each project starts with an in-depth brand research to ensure we
						only create products that serve a purpose. We merge art, design, and
						technology into exciting new solutions.
					</p>
				</article>

				<article className={styles['home__cards-section__card']}>
					<div className={styles['home__cards-section__card__icon']}>
						<IconResourceful />
					</div>
					<h3 className={styles['home__cards-section__card__title']}>RESOURCEFUL</h3>
					<p className={styles['home__cards-section__card__description']}>
						Everything that we do has a strategic purpose. We use an agile
						approach in all of our projects and value customer collaboration. It
						guarantees superior results that fulfill our clients’ needs.
					</p>
				</article>

				<article className={styles['home__cards-section__card']}>
					<div className={styles['home__cards-section__card__icon']}>
						<IconFriendly />
					</div>
					<h3 className={styles['home__cards-section__card__title']}>FRIENDLY</h3>
					<p className={styles['home__cards-section__card__description']}>
						We are a group of enthusiastic folks who know how to put people
						first. Our success depends on our customers, and we strive to give
						them the best experience a company can provide.
					</p>
				</article>
			</section>
		</Fragment>
	)
}

export default Home
