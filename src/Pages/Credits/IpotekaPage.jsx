import React from 'react'

import Face from '../../components/Face'
import Raschet from '../../components/Raschet/Reschet'
import Gaid from '../../components/Gaid'
import Zaiavki from '../../components/VidiZaiavok/Zaiavki'

import Main from '../../img/5Credit/Main.png'

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
			<div className="bg-Melody p-[1px] 2xl:mt-[260px] sm:mt-[380px] mb-[50px]" /> {/* Разделяющая линия */}

			<Raschet maintext='Рассчитайте ипотеку'
				inputtext1='Желаемая сумма'
				inputtext2='Срок кредита'
				inputmin1='600000' inputmin2='12'
				inputmax1='7000000' inputmax2='146'
				Chislotext2='12 %'
				Chislominitext1='Ежемесячный платеж'
				Chislominitext2='Ставка по кредиту'
				Chislominitext3='Общая сумма выплат' stavka='0.12'
			/>


			<Gaid maintext='Как получить ипотеку'
				text01='Рассчитайте ипотечный кредит и оформите онлайн-заявку не выходя из дома'
				text02='Дождитесь звонок подтверждение от банка'
				text03='Оформите сделку и готовьтесь к новоселью'
			/> {/* Раздел Как получить кредит */}

			<Zaiavki maintext='Онлайн заявка на ипотеку'
				input11=' Стоимость недвижимости' input21='Срок кредита'
				input12='Регион покупки недвижимости' input22='ФИО'
				input13='Паспортные данные' input23='Дата рождения'
				input14='Мобильный телефон' input24='Электронная почта'
				input15='СНИЛС И ИНН ' input25='Номер военного билета'
				input16='Стаж работы на последнем месте' input26='Название вашей работы'

				vid='Ипотека'  stavka='0.12'
				inputmin1='600000' inputmin2='12'
				inputmax1='7000000' inputmax2='146'
			/>

		</>
	)
}
