import React from 'react'

import Face from '../../components/Face'
import Raschet from '../../components/Raschet/Reschet'
import Gaid from '../../components/Gaid'
import Zaiavki from '../../components/VidiZaiavok/Zaiavki'

import Main from '../../img/2Credit/Main.png'
import Image1 from '../../img/2Credit/Image1.png'
import Image2 from '../../img/2Credit/Image2.png'

import Ramki from '../../components/Ramki'

export const AvtoCreditPage = () => {
	return (
		<>
			<Face main='У нас один из самых выгодный автокредитов'
				body='100 тысяч'
				body2='120 тысяч'
				body3='довольных клиентов'
				body4='купленых автомобилей'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] 2xl:mt-[260px] sm:mt-[380px] mb-[50px]" /> {/* Разделяющая линия */}

			<Raschet maintext='Рассчитайте свой автокредит'
				inputtext1='Желаемая сумма'
				inputtext2='Срок кредита'
				inputmin1='140000' inputmin2='12'
				inputmax1='7000000' inputmax2='73'
				Chislotext2='15.6 %'
				Chislominitext1='Ежемесячный платеж'
				Chislominitext2='Ставка по кредиту'
				Chislominitext3='Общая сумма выплат' stavka='0.156'
			/>

			<div className="mt-[100px] 2xl:flex 2xl:justify-between"> {/* Раздел преимущества */}
				<Ramki text='Возможность получить кредит не приходя в офис' img={Image1} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<div className='2xl:mt-0 sm:mt-[30px]'>
					<Ramki text='Без справок о доходах и поручителей' img={Image2} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				</div>
			</div>

			<Gaid maintext='Как получить кредит'
				text01='Оформите онлайн-заявку не выходя из дома'
				text02='Дождитесь звонок подтверждение от банка'
				text03='Получите деньги на счет'
			/> {/* Раздел Как получить кредит */}

			<Zaiavki maintext='Онлайн заявка на автокредит'
				input11='Сумма кредита' input21='Срок кредита'
				input12='Желаемый автокредит' input22='ФИО'
				input13='Паспортные данные' input23='Дата рождения'
				input14='Мобильный телефон' input24='Электронная почта'
				input15='СНИЛС И ИНН ' input25='Номер военного билета'
				input16='Стаж работы на последнем месте' input26='Название вашей работы'

				vid='Автокредит' stavka='0.156'
				inputmin1='140000' inputmin2='12'
				inputmax1='7000000' inputmax2='73'
			/>


		</>
	)
}
