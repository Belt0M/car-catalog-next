import Layout from '@/app/_layouts/Layout'
import { CarService } from '@/app/_services/car.service'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './CarPage.module.scss'

interface CarPageProps {
	params: { id: string }
}

const CarPage: NextPage<CarPageProps> = async ({ params }) => {
	const car = await CarService.getById(params.id)

	return (
		<Layout>
			<div className={styles.item}>
				<Image src={car.image_url} alt={car.name} width={300} height={300} />
				<h3>{car.name}</h3>
				<p>{car.price}</p>
				<Link href={`/car/${car.id}`}>Read more</Link>
			</div>
		</Layout>
	)
}

export default CarPage
