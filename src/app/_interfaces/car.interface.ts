export interface ICar {
	id: string
	name: string
	price: number
	image_url: string
}

export interface ICarData {
	cars: ICar[]
}

export interface ICarSingleData {
	car: ICar
}
