import Layout from '@/app/_layouts/Layout'
import { CarService } from '@/app/_services/car.service'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface CarPageProps {
	params: { id: string }
}

const CarPage: FC<CarPageProps> = async ({ params }) => {
	const car = await CarService.getById(params.id)

	return (
		<Layout>
			<div className='item'>
				<Image src={car.image_url} alt={car.name} width={300} height={300} />
				<h3>{car.name}</h3>
				<small>{car.price}</small>
				<Link href={`/car/${car.id}`}>Read more...</Link>
			</div>
		</Layout>
	)
}

export default CarPage
