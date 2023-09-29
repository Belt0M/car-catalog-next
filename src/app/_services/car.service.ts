import axios from 'axios'
import { ICar } from '../_interfaces/car.interface'

const API_URL = 'http://localhost:4000'
axios.defaults.baseURL = API_URL

export const CarService = {
	async getAll() {
		const { data } = await axios.get<ICar[]>('/cars')
		return data
	},
	async getById(id: string) {
		const { data } = await axios.get<ICar[]>('/cars', { params: id })
		return data[0]
	},
}
