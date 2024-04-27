import React from 'react'
import { NavLink } from 'react-router-dom'

import Face from '../../components/Face'
import Gaid from '../../components/Gaid'
import Raschet from '../../components/Raschet/Reschet'
import Ramki from '../../components/Ramki'

import Main from '../../img/3Credit/Main.png'
import Image1 from '../../img/3Credit/Image1.png'
import Image2 from '../../img/3Credit/Image2.png'

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
			<div className="bg-Melody p-[1px] 2xl:mt-[260px] sm:mt-[380px] mb-[50px]" />{/* Разделяющая линия */}

			<Raschet maintext='Рассчитайте кредит на образование'
				inputtext1='Желаемая сумма'
				inputtext2='Срок кредита'
				inputmin1='30000' inputmin2='6'
				inputmax1='4000000' inputmax2='12'
				Chislotext2='10 %'
				Chislominitext1='Ежемесячный платеж'
				Chislominitext2='Ставка по кредиту'
				Chislominitext3='Общая сумма выплат' stavka='0.10'
			/>

			<div className="mt-[100px] 2xl:flex 2xl:justify-between"> {/* Раздел преимущества */}
				<Ramki text='Возможность получить кредит не приходя в офис' img={Image1} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<div className='2xl:mt-0 sm:mt-[30px]'>
					<Ramki text='Без справок о доходах и поручителей' img={Image2} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				</div>
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
