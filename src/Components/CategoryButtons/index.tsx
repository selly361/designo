"use client"

import { IconRightArrow } from '@/Assets/Icons'
import { categoryRoutes } from '@/Constants'
import Link from 'next/link'
import styles from './CategoryButtons.module.scss'
import { usePathname } from 'next/navigation'

function CategoryButtons() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const currentRoute = pathname.slice(1)

  return (
    <div className={`${styles.categoryButtons} ${isHomePage ? styles['categoryButtons--home'] : styles['categoryButtons--other']}`}>
      {categoryRoutes
        .filter((categoryRoute) => isHomePage || categoryRoute.route !== currentRoute)
        .map((categoryRoute) => (
          <Link
            key={categoryRoute.route}
            className={`${styles.categoryButtons__categoryButton} ${styles[`categoryButtons__categoryButton--${categoryRoute.route}`]}`}
            href={`/${categoryRoute.route}`}
          >
            <div className={styles.categoryButtons__content}>
              <h2>{categoryRoute.name}</h2>
              <div className={styles.categoryButtons__viewProjects}>
                <p>VIEW PROJECTS</p>
                <IconRightArrow />
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default CategoryButtons
