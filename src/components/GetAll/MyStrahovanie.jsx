import React from 'react'

const MyStrahovanie = ({ strahovanie }) => {
	if (!strahovanie) {
		return (
			<div className='text-xl text-center text-white py-10'>
				У вас нет страхований
			</div>
		)
	}
	return (
		<div className=''>
			<h1 className='text-[20px] text-Melody/80 font-medium pb-[20px] '>Страхование: {strahovanie.tarif}</h1>
			<h1 className='text-[13px] text-Melody/80 pb-[10px] '>На что(кого) страхование: {strahovanie.name}</h1>
			<h1 className='text-[13px] text-Melody/80 pb-[10px] '>Дата начала страховки: {strahovanie.DateTime}</h1>

		</div>
	)
}

export default MyStrahovanie