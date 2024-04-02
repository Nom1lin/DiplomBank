import React from 'react'

import Face from '../../components/Face'
import Gaid from '../../components/Gaid'
import Ramki from '../../components/Ramki'

import Main from '../../img/4Cart/Main.png'
import Image1 from '../../img/4Cart/Image1.png'
import Image2 from '../../img/4Cart/Image2.png'
import Image3 from '../../img/4Cart/Image3.png'
import Image4 from '../../img/4Cart/Image4.png'

export const VirtualitiCartPage = () => {
	return (
		<>
			<Face main='Виртуальная карта с кешбэком до 5%'
				body='Безопасно'
				body2='5 %'
				body3='оформление'
				body4='кэшбек'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] mt-[120px]" /> {/* Разделяющая линия */}
			<div className="mt-[-50px]">
				<Gaid maintext='Как получить карту'
					text01='Позвоните нашему менеджеру +7 978 504-65-69'
					text02='Дождитесь звонок подтверждение от банка'
					text03='Пользуйтесь картой'
				/> {/* Раздел Как получить кредит */}

			</div>

			<div className="mt-[100px] flex justify-between"> {/* Раздел преимущества */}
				<Ramki text='Дистанционное оформление' img={Image1} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<Ramki text='Безопасное оформление' img={Image2} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
			</div>
			<div className="mt-[20px] flex justify-between"> {/* Раздел преимущества */}
				<Ramki text='Полное использование карты' img={Image3} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<Ramki text='Бесплатное оформление и обслуживание' img={Image4} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
			</div>
		</>
	)
}
