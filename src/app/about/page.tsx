import { NextPage } from 'next'
import Layout from '../_layouts/Layout'
import styles from './About.module.scss'

const About: NextPage = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<h1>About</h1>
			</div>
		</Layout>
	)
}

export default About
