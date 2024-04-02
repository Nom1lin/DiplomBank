import React from 'react'

const Reschet = (props) => {
	return (
		<div className="text-Melody">
			<ul className='w-[600px] h-[235px] bg-Tom shadow-xxA rounded-[40px] p-[40px]'>
				<li className='flex justify-between'>
					<ul>
						<li className='text-[40px]'>{props.Chislotext1}</li>
						<li className='text-[13px] text-Melody/70 mt-[-8px]'>{props.Chislominitext1}</li>
					</ul>
					<ul>
						<li className='text-[40px]'>{props.Chislotext2}</li>
						<li className='text-[13px] text-Melody/70 mt-[-8px]'>{props.Chislominitext2}</li>
					</ul>
				</li>

				<li className='flex justify-between'>
					<ul>
						<li className='text-[40px] mt-[8px]'>{props.Chislotext3}</li>
						<li className='text-[13px] text-Melody/70 mt-[-8px]'>{props.Chislominitext3}</li>
					</ul>
					<ul>
						<li className='text-[40px] mt-[8px]'>{props.Chislotext4}</li>
						<li className='text-[13px] text-Melody/70 mt-[-8px] w-[141px]'>{props.Chislominitext4}</li>
					</ul>
				</li>
			</ul>
			<h1 className='text-[13px] mt-[25px] text-Melody/70 w-[600px]'>Расчет калькулятора предварительный и не является публичной офертой. Точные условия по кредиту будут предоставленн после оформления заявок</h1>
		</div>
	)
}

export default Reschet


{/* 
import RaschetTwo from '../../components/ReschetTwo'

			<RaschetTwo
				Chislotext1='99 999 ₽'
				Chislotext2='15.6 %'
				Chislotext3='1 099 999 ₽'
				Chislotext4='16 999 ₽'
				Chislominitext1='Ежемесячный платеж'
				Chislominitext2='Ставка по кредиту'
				Chislominitext3='Общая сумма выплат'
				Chislominitext4='Разовая оплата после обучения'
			/>
*/}