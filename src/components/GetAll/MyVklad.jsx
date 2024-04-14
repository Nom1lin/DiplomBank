import React from 'react'

const MyVklad = ({ vklad }) => {
	if (!vklad) {
		return (
			<div className='text-xl text-center text-white py-10'>
				У вас нет вкладов
			</div>
		)
	}

	return (
		<div className='mb-[30px]'>
			<h1 className='text-[16px] text-Melody/80 font-medium pb-[15px] '>Вид {vklad.vid}</h1>
			<div className='flex justify-between text-Melody/80 text-[13px] '>
				<div className='flex justify-between w-[250px]'>
					<ul>
						<li className='pb-[10px]'>Первоначальный взнос: </li>
						<li className='pb-[5px]'>Срок взноса: </li>
					</ul>
					<ul>
						<li className='pb-[10px]'>{vklad.summa} рублей</li>
						<li className='pb-[5px]'>{vklad.srock} месяцев</li> 
					</ul>
				</div>
				<div className='flex justify-between w-[300px]'>
					<ul>
						<li className='pb-[10px]'>Сумма в конце дохода:</li>
						<li className='pb-[5px]'>Дата начала вклада: </li>
					</ul>
					<ul>
						<li className='pb-[10px]'>{vklad.finalsumma} Р</li>
						<li className='pb-[5px]'>{vklad.DateTime}</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default MyVklad