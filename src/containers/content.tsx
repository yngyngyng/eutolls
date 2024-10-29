'use client'
import React from 'react'
import { PinContainer } from '@/components/ui/3d-pin'
import { CountriesData } from '@/data/countriesData'

export function ContentContainer() {
	return (
		<div className='w-full flex items-center justify-center inline-grid'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2'>
				{CountriesData.map((country, index) => (
					<PinContainer key={index} title={country.title} href={country.link}>
						<div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[16rem]'>
							<h3 className='max-w-xs !pb-1 !m-0 font-bold text-base text-slate-100'>
								{country.title}
							</h3>
							<div className='text-base !m-0 pb-3 font-normal'>
								<span className='text-slate-400'>{country.description}</span>
							</div>
							<img src={country.image} className='rounded-md aspect-video' />
						</div>
					</PinContainer>
				))}
			</div>
		</div>
	)
}
