import React from 'react'

import Face from '../../components/Face'
import RaschetTwo from '../../components/ReschetTwo'
import Gaid from '../../components/Gaid'

import { Link, NavLink } from 'react-router-dom'

import Main from '../../img/3Credit/Main.png'
import Image1 from '../../img/3Credit/Image1.png'
import Image2 from '../../img/3Credit/Image2.png'

import Ramki from '../../components/Ramki'

export const NaObrazovaniePage = () => {
	return (
		<>
			<Face main='Кредит на образование. На высшие или среднее профессиональное обучение'
				body='До 4 млн ₽'
				body2='до 10 лет'
				body3='сумма'
				body4='срок кредита'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] mt-[120px] mb-[50px] " /> {/* Разделяющая линия */}
			<h1 className='text-[32px] mb-[60px] text-Melody'>Рассчитайте кредит на образование </h1>
			<div className="flex text-Melody">
				<ul className='w-580px'> {/* Раздел инпута */}
					<div className='mb-[51px] mr-[120px]'> {/* Инпут 1*/}
						<li className='text-[20px] mb-[13px]'>Учебное заведение принимает оплату</li>
						<li><input className='w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
					</div>
					<div className='mb-[33px] mr-[120px]'> {/* Инпут 2*/}
						<li className='text-[20px] mb-[13px]'>Стоимость обучения за выбранный период  </li>
						<li><input className='w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
						<li className='text-[13px] mt-[5px] text-Melody/70'>от 0 до 4 миллионов</li>
					</div>
					<div className='mr-[120px]'> {/* Инпут 3*/}
						<li className='text-[20px] mb-[13px]'>Срок обучения в кредит</li>
						<li><input className='w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
						<li className='text-[13px] mt-[5px] text-Melody/70'>от 2 до 73 месяцев</li>
					</div>
				</ul>
				<RaschetTwo Chislotext1='99 999 ₽'
					Chislotext2='15.6 %'
					Chislotext3='1 099 999 ₽'
					Chislotext4='16 999 ₽'
					Chislominitext1='Ежемесячный платеж'
					Chislominitext2='Ставка по кредиту'
					Chislominitext3='Общая сумма выплат'
					Chislominitext4='Разовая оплата после обучения'
				/>
			</div>

			<div className="mt-[100px] flex justify-between"> {/* Раздел преимущества */}
				<Ramki text='Возможность получить кредит не приходя в офис' img={Image1} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<Ramki text='Без справок о доходах и поручителей' img={Image2} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
			</div>

			<Gaid maintext='Как получить кредит'
				text01='Заключите договор с учебным заведением'
				text02='Обратитесь с паспортом и договором в офис банка'
				text03='Дождитесь одобрения банка в сообщении на почту или в СМС'
			/> {/* Раздел Как получить кредит */}
			<div className="flex atems-center text-Melody mt-[14px]">
				<h1 className='text-[40px] mr-[50px] font-semibold '>04</h1>
				<h1 className='py-[14px] text-[20px]'>Получите кредит. Банк перечислит деньги за обучение на счет заведения</h1>
			</div>
			<div className="mt-[20px]">
				<NavLink to={'/karta'} className='text-[#79BADE] '>Найдите наш ближаший офис у себя в городе</NavLink>
			</div>



		</>
	)
}
