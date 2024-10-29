import Link from 'next/link'
import React from 'react'

export function Footer() {
	return (
		<div className='text-center text-lg mx-auto font-normal text-neutral-600 dark:text-neutral-400 pt-20 pb-5'>
			Made with ♥️ by <Link href='https://yngdev.com'>yngdev</Link>
			<p className='text-xs'>🇪🇺 EU Tolls v0.1 | © 2024</p>
		</div>
	)
}
