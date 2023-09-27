import { FC } from 'react'

interface CarPageProps {
	params: { id: string }
}

const CarPage: FC<CarPageProps> = ({ params }) => {
	return <div>Car {params.id}</div>
}

export default CarPage
