import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

export function Footer() {
	return (
		<div className='text-center text-lg mx-auto font-normal text-neutral-600 dark:text-neutral-400 pt-20 pb-5'>
			Made with ♥️ by{' '}
			<Link href='https://yngdev.com' target='_blank' className='text-blue-200'>
				yngdev
			</Link>
			<p className='text-xs'>
				🇪🇺 EU Tolls v0.1 | © 2024 | This is an open source project, available on
				<Link
					href='https://github.com/yngyngyng/eutolls'
					target='_blank'
					className='text-blue-200'
				>
					{' '}
					<FaGithub className='inline align-text-top' /> GitHub
				</Link>
			</p>
		</div>
	)
}
