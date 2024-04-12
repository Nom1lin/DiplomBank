import React from 'react'

import Face from '../../components/Face'
import Gaid from '../../components/Gaid'
import Ramki from '../../components/Ramki'

import Main from '../../img/2Cart/Main.png'
import Image1 from '../../img/2Cart/Image1.png'
import Image2 from '../../img/2Cart/Image2.png'

export const DebetovCartPage = () => {
	return (
		<>
			<Face main='Дебетовая карта с кешбэком до 5%'
				body='Бесплатное'
				body2='Бесконтактная'
				body3='оформление'
				body4='оплата в 1 клик'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] mt-[120px]" /> {/* Разделяющая линия */}
			<div className="mt-[-50px]">
				<Gaid maintext='Как получить карту'
					text01='Взять паспорт'
					text02='Прийти в любой офис банка'
					text03='Прийти в любой офис банка'
				/> {/* Раздел Как получить кредит */}

			</div>

			<div className="mt-[100px] flex justify-between"> {/* Раздел преимущества */}
				<Ramki text='Бесплатное оформление и обслуживание' img={Image1} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<Ramki text='Снятие наличных без комиссии' img={Image2} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
			</div>
		</>
	)
}
