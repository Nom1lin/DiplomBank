import React from 'react'

import Face from '../../components/Face'
import Gaid from '../../components/Gaid'
import Ramki from '../../components/Ramki'

import Main from '../../img/6Credit/Main.png'
import Image1 from '../../img/6Credit/Image1.png'
import Image2 from '../../img/6Credit/Image2.png'
import Image3 from '../../img/6Credit/Image3.png'
import Image4 from '../../img/6Credit/Image4.png'

export const CreditBusinessPage = () => {
	return (
		<>
			<Face main='Начинай бизнес вместе с нами'
				body='до 10 млн ₽'
				body2='от 15.5 % годовых'
				body3='лимит'
				body4='ставка'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] mt-[120px]" /> {/* Разделяющая линия */}
			<div className="mt-[-50px]">
				<Gaid maintext='Как получить кредит'
					text01='Зарегистрируйте бизнес'
					text02='Обратитесь с ИНН компании и паспортом в любой офис банка '
					text03='Получите кредит на свою карту или на счет'
				/> {/* Раздел Как получить кредит */}

			</div>

			<div className="mt-[100px] flex justify-between"> {/* Раздел преимущества */}
				<Ramki text='Одобрение - от 3 часов, выдача - до 1 дня' img={Image1} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<Ramki text='Без скрытых комиссий' img={Image2} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
			</div>
			<div className="mt-[25px] flex justify-between"> {/* Раздел преимущества */}
				<Ramki text='Простое оформление с минимальным количеством документов' img={Image3} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<Ramki text='До 10 млн рублей по паспорту' img={Image4} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
			</div>

		</>
	)
}
