import { Metadata, NextPage } from 'next'
import Image from 'next/image'
import Layout from './_layouts/Layout'

export const metadata: Metadata = {
	title: 'Not Found',
}

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
