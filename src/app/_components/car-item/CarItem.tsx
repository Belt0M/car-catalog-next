import { ICarSingleData } from '@/app/_interfaces/car.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './CarItem.module.scss'

const CarItem: FC<ICarSingleData> = ({ car }) => {
	return (
		<div className={styles.item}>
			<Image src={car.image_url} alt={car.name} width={300} height={300} />
			<h3>{car.name}</h3>
			<p>{car.price}</p>
			<Link href={`/car/${car.id}`}>Read more</Link>
		</div>
	)
}

export default CarItem
