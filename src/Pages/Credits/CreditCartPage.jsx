import React from 'react'

import Face from '../../components/Face'
import Raschet from '../../components/Reschet'
import Gaid from '../../components/Gaid'
import Zaiavki from '../../components/Zaiavki'
import Ramki from '../../components/Ramki'

import Main from '../../img/4Credit/Main.png'
import Image1 from '../../img/4Credit/Image1.png'
import Image2 from '../../img/4Credit/Image2.png'
import Image3 from '../../img/4Credit/Image3.png'
import Image4 from '../../img/4Credit/Image4.png'


export const CreditCartPage = () => {
	return (
		<>
			<Face main='Оформи кредитнуб карту дома'
				body='до 4 месяцев'
				body2='5 %'
				body3='без процентов '
				body4='кэшбек'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] mt-[120px]" /> {/* Разделяющая линия */}
			<div className="mt-[-50px]">
				<Gaid maintext='Как получить кредит'
					text01='Оформите онлайн-заявку не выходя из дома'
					text02='Дождитесь звонок подтверждение от банка'
					text03='Заберите карту в ближашем отделении банка'
				/> {/* Раздел Как получить кредит */}

			</div>

			<div className="mt-[100px] flex justify-between"> {/* Раздел преимущества */}
				<Ramki text='Льготный период 3 месяца на покупки, переводы и снятие наличных' img={Image1} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<Ramki text='Бесплатное оформление и обслуживание карты' img={Image2} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
			</div>
			<div className="mt-[25px] flex justify-between"> {/* Раздел преимущества */}
				<Ramki text='Безконтактная оплата телефоном с использованием Mir Pay' img={Image3} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<Ramki text='До 1 млн рублей по паспорту' img={Image4} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
			</div>

			<Zaiavki maintext='Онлайн заявка на кредит'
				t11='text-[13px]' t21='text-[0px]'
				t12='text-[0px]' t22='text-[0px]'
				mb11='mb-[35px]' mb21='mb-[56px]'
				mb12='mb-[56px]' mb22='mb-[56px]'
				inputopacity=' mb-[-120px] opacity-0' inputopacityPlan2=' mb-[0] opacity-0'
				input11='Сумма кредита ' input21='ФИО'
				input12='Паспортные данные' input22='Дата рождения'
				input13='СНИЛС И ИНН' input23='Трудовая книжка'
				input14='Мобильный телефон' input24='Электронная почта'
				miniPravila11='от 30 000 до 6 000 000 рублей' miniPravila21='Заглушка'
				miniPravila12='Заглушка' miniPravila22='Заглушка'
			/>
		</>
	)
}
