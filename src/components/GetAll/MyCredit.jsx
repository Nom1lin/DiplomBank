import React from 'react'

const MyCredit = ({ credit }) => {

	if (!credit) {
		return (
			<div className='text-xl text-center text-white py-10'>
				У вас нет кредитов
			</div>
		)
	}

	return (
		<div className='mb-[30px]'>
			<h1 className='text-[16px] text-Melody/80 font-medium pb-[15px] '>{credit.vid}</h1>
			<div className='flex justify-between text-Melody/80 text-[13px] '>
				<div className='flex justify-between w-[250px]'>
					<ul>
						<li className='pb-[10px]'>Сумма кредита: </li>
						<li className='pb-[5px]'>Срок кредитa: </li>
					</ul>
					<ul>
						<li className='pb-[10px]'>{credit.value11} рублей</li>
						<li className='pb-[5px]'>{credit.value21} месяцев</li>
					</ul>
				</div>
				<div className='flex justify-between w-[300px]'>
					<ul>
						<li className='pb-[10px]'>Ежемесячный взнос: </li>
						<li className='pb-[5px]'>Дата взятия кредита: </li>
					</ul>
					<ul>
						<li className='pb-[10px]'>{credit.Mesiac}</li>
						<li className='pb-[5px]'>{credit.DateTime}</li>
					</ul>
				</div>
			</div>

		</div>
	)
}

export default MyCredit