import React from 'react'

import Face from '../../components/Face'
import RaschetTwo from '../../components/ReschetTwo'
import Gaid from '../../components/Gaid'
import Zaiavki from '../../components/Zaiavki'


import Main from '../../img/5Credit/Main.png'

import Ramki from '../../components/Ramki'

export const IpotekaPage = () => {
	return (
		<>
			<Face main='С нами вы можете прямо сейчас собирать вещи'
				body='Любая локация'
				body2='до 12 лет' 
				body3='недвижимости'
				body4='срок ипотеки'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] mt-[120px] mb-[50px] " /> {/* Разделяющая линия */}
			<h1 className='text-[32px] mb-[60px] text-Melody'>Рассчитайте свою ипотеку</h1>
			<div className="flex text-Melody">
				<ul className='w-580px'> {/* Раздел инпута */}
					<div className='mb-[51px] mr-[120px]'> {/* Инпут 1*/}
						<li className='text-[20px] mb-[13px]'>Регион покупки недвижимости</li>
						<li><input className='w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
					</div>
					<div className='mb-[33px] mr-[120px]'> {/* Инпут 2*/}
						<li className='text-[20px] mb-[13px]'>Стоимость недвижимости</li>
						<li><input className='w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
						<li className='text-[13px] mt-[5px] text-Melody/70'>от 600 000 до 100 000 000 рублей</li>
					</div>
					<div className='mb-[33px] mr-[120px]'> {/* Инпут 3*/}
						<li className='text-[20px] mb-[13px]'>Первоначальный взнос</li>
						<li><input className='w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
						<li className='text-[13px] mt-[5px] text-Melody/70'>от 500 000 до 25 000 000  рублей </li>
					</div>
					<div className='mr-[120px]'> {/* Инпут 4*/}
						<li className='text-[20px] mb-[13px]'>Срок кредита</li>
						<li><input className='w-[580px] h-[87px] bg-Tom shadow-xxA rounded-[40px] pl-[30px] text-[24px]' type="text" /></li>
						<li className='text-[13px] mt-[5px] text-Melody/70'>от 1 до 12 лет</li>
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


			<Gaid maintext='Как получить ипотеку'
				text01='Рассчитайте ипотечный кредит и оформите онлайн-заявку не выходя из дома'
				text02='Дождитесь звонок подтверждение от банка'
				text03='Оформите сделку и готовьтесь к новоселью'
			/> {/* Раздел Как получить кредит */}

			<Zaiavki maintext='Онлайн заявка на ипотеку'
				t11='text-[0px]' t21='text-[13px]'
				t12='text-[13px]' t22='text-[13px]'
				mb11='mb-[56px]' mb21='mb-[35px]'
				mb12='mb-[35px]' mb22='mb-[35px]'
				inputopacity=' mb-[130px] opacity-1' inputopacityPlan2=' mb-[130px] opacity-1'
				input11='Регион покупки недвижимости ' input21='Стоимость недвижимости'
				input12='Первоначальный взнос' input22='Срок кредита'
				input13='ФИО' input23='Паспортные данные'
				input14='Дата рождения' input24='СНИЛС И ИНН'
				input15='Трудовая книжка' input25='Мобильный телефон'
				input16='Электронная почта'
				miniPravila11='Заглушка' miniPravila21='от 600 000 до 100 000 000 рублей'
				miniPravila12='от 30 000 до 6 000 000 рублей' miniPravila22='от 2 до 73 месяцев'
			/>

		</>
	)
}
