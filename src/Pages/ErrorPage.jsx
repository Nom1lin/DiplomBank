import React from 'react'

import Error from '../img/ErrorImage.png'

export const ErrorPage = () => {
	return (
		<>
			<div className="flex justify-center">
				<img className='w-[1100px] h-[] ' src={Error} alt="" />

			</div>
			<h1 className="flex justify-center text-[40px] text-Jerry mt-[50px]">Этой страницы не существует, вернитесь на прошлую страницу</h1>
		</>
	)
}
