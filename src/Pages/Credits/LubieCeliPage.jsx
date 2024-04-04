import React, { useState } from 'react';

import Face from '../../components/Face'
import Raschet from '../../components/Reschet'
import Gaid from '../../components/Gaid'
import Zaiavki from '../../components/Zaiavki'
import Chernivik from '../../components/Chernivik'

import Main from '../../img/1Credit/Main.png'
import Image1 from '../../img/1Credit/Image1.png'
import Image2 from '../../img/1Credit/Image2.png'

import Ramki from '../../components/Ramki'

export const LubieCeliPage = () => {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);

	const handleInputChange = (e, setValue) => {
		setValue(Number(e.target.value));
	}

	return (
		<>
			<Face main='Оформите кредит наличными или безналичными на любые цели'
				body='До 6 млн ₽'
				body2='от 5 минут'
				body3='сумма'
				body4='решение по кредиту'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] mt-[120px] mb-[50px]" /> {/* Разделяющая линия */}
			<Raschet maintext='Рассчитайте кредит наличными и получите деньги сегодня'
				inputtext1='Желаемая сумма'
				inputtext2='Срок кредита'
				inputmin1='30000'      inputmin2='2'
				inputmax1='6000000'   inputmax2='33'
				Chislotext2='15.6 %'
				Chislominitext1='Ежемесячный платеж'
				Chislominitext2='Ставка по кредиту'
				Chislominitext3='Общая сумма выплат' stavka='0.156'
			/>

			<div className="mt-[100px] flex justify-between"> {/* Раздел преимущества */}
				<Ramki text='Возможность получить кредит не приходя в офис' img={Image1} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<Ramki text='Без справок о доходах и поручителей' img={Image2} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
			</div>

			<Gaid maintext='Как получить кредит'
				text01='Оформите онлайн-заявку не выходя из дома'
				text02='Дождитесь звонок подтверждение от банка'
				text03='Получите деньги на счет'
			/> {/* Раздел Как получить кредит */}

			<Zaiavki maintext='Онлайн заявка на кредит'
				t11='text-[13px]' t21='text-[13px]'
				t12='text-[0px]' t22='text-[0px]'
				mb11='mb-[35px]' mb21='mb-[35px]'
				mb12='mb-[56px]' mb22='mb-[56px]'
				inputopacity=' mb-[-300px] opacity-0' inputopacityPlan2=' mb-[130px] opacity-1'
				input11='Сумма кредита' input21='Срок кредита'
				input12='Цели кредита' input22='ФИО'
				input13='Паспортные данные' input23='Дата рождения'
				input14='СНИЛС И ИНН' input24='Трудовая книжка'
				input15='Мобильный телефон' input25='Электронная почта'

				miniPravila11='от 30 000 до 6 000 000 рублей' miniPravila21='от 2 до 73 месяцев'
				miniPravila12='Заглушка' miniPravila22='Заглушка'
			/>

		</>
	)
}
