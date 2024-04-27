import React from 'react'

import Error from '../img/ErrorImage.png'

export const ErrorPage = () => {
	return (
		<>
			<div className="flex justify-center">
				<img className='2xl:w-[1100px] sm:w-[500px] ' src={Error} alt="" />

			</div>
			<h1 className="flex justify-center 2xl:text-[36px] sm:text-[28px] text-Jerry mt-[50px]">Этой страницы не существует, вернитесь на прошлую страницу</h1>
		</>
	)
}
