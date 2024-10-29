'use client'
import { ContentContainer } from '@/containers/content'
import { Footer } from '@/containers/footer'
import { Header } from '@/containers/header'
import { Intro } from '@/containers/intro'

export default function Home() {
	return (
		<div>
			<Header />
			<Intro />
			<ContentContainer />
			<Footer />
		</div>
	)
}
