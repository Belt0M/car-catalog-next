import { ICarSingleData } from '@/app/_interfaces/car.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const CarItem: FC<ICarSingleData> = ({ car }) => {
	return (
		<div className='item'>
			<Image src={car.image_url} alt={car.name} width={300} height={300} />
			<h3>{car.name}</h3>
			<small>{car.price}</small>
			<Link href={`/car/${car.id}`}>Read more...</Link>
		</div>
	)
}

export default CarItem
