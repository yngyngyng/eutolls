import React from 'react'
import { FlipWords } from '@/components/ui/flip-words'
import Link from 'next/link'

export function Header() {
	const words = ['scammed', 'betrayed', 'sad', 'frustrated']

	return (
		<div className='flex justify-center items-center px-4 py-40'>
			<div className='text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400'>
				Never feel
				<FlipWords words={words} /> <br />
				by European tolls again!
				<p className='text-sm text-neutral-400 py-4'>
					Inspired by{' '}
					<Link
						href='https://www.youtube.com/watch?v=89lO0zzS9K8'
						target='blank'
						className='text-blue-200'
					>
						📺 YouTube video from Honest Guide
					</Link>
				</p>
			</div>
		</div>
	)
}
