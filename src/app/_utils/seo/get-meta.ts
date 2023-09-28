import { Metadata } from 'next'
import { IGetMeta } from './get-meta.interface'

export const getMeta = ({ title, author, description }: IGetMeta): Metadata => {
	let metadata: Metadata = {
		title: title + ' | Cars Catalog Website',
		description: description ? description : '',
	}

	if (author) {
		metadata.authors = { name: author.name, url: author.url ? author.url : '' }
	}
	if (!description) {
		metadata.robots = { index: false, follow: false }
	}
	return metadata
}
