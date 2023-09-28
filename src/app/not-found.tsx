import { Metadata, NextPage } from 'next'
import Image from 'next/image'
import Layout from './_layouts/Layout'
import { getMeta } from './_utils/seo/get-meta'

export const metadata: Metadata = getMeta({
	title: 'Not Found',
	author: { name: 'BeltoM' },
})

const NotFound: NextPage = () => {
	return (
		<Layout>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Image src='/404.png' alt='Not Found' width={600} height={500} />
			</div>
		</Layout>
	)
}
export default NotFound
