import { NextPage } from 'next'
import CarItem from './_components/car-item/CarItem'
import Layout from './_layouts/Layout'
import { CarService } from './_services/car.service'

const Home: NextPage = async () => {
	const cars = await CarService.getAll()

	return (
		<Layout>
			<h1>Home</h1>
			{cars.length ? (
				cars.map(car => <CarItem car={car} key={car.id} />)
			) : (
				<div>There's no cars</div>
			)}
		</Layout>
	)
}

export default Home
