import { NextPage } from 'next'
import CarItem from './_components/car-item/CarItem'
import Layout from './_layouts/Layout'
import { CarService } from './_services/car.service'
import styles from './page.module.scss'

const Home: NextPage = async () => {
	const cars = await CarService.getAll()

	return (
		<Layout>
			<div className={styles.wrapper}>
				<h1>Home</h1>
				<div className={styles.container}>
					{cars.length ? (
						cars.map(car => <CarItem car={car} key={car.id} />)
					) : (
						<div>There's no cars</div>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Home
