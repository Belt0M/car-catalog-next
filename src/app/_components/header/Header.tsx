'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss'

const Header = () => {
	const pathname = usePathname()

	return (
		<header className={styles.header}>
			<Link href='/' className={pathname === '/' ? styles.active : ''}>
				Home
			</Link>
			<Link
				href='/about'
				className={pathname === '/about' ? styles.active : ''}
			>
				About
			</Link>
		</header>
	)
}

export default Header
