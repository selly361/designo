import { CategoryButtons } from '@/Components'
import { categoriesData } from '@/Constants'
import React, { Fragment } from 'react'
import styles from './design-category.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	params: { category: 'web-design' | 'app-design' | 'graphic-design' }
}

function DesignCategoryPage({ params }: Props) {
	const { name, desc, projects } = categoriesData[params.category]

	return (
		<Fragment>
			<section
				className={`${styles['intro-section']} ${
					styles[`intro-section--${params.category}`]
				}`}
			>
				<h1 className={styles['intro-section__title']}>{name}</h1>
				<p className={styles['intro-section__desc']}>{desc}</p>
			</section>

			<section className={styles.projects}>
				{projects.map((project) => (
					<div  className={styles.projects__project}>
						<Image
							width={350}
							height={320}
							quality={100}
							priority
							src={project.image}
							alt={project.alt}
						/>
						<article className={styles.projects__project__content}>
							<h2>{project.name}</h2>
							<p>{project.desc}</p>
						</article>
					</div>
				))}
			</section>
			<CategoryButtons />
		</Fragment>
	)
}

export default DesignCategoryPage
