import React from 'react'

import Face from '../../components/Face'
import Gaid from '../../components/Gaid'
import Ramki from '../../components/Ramki'

import Main from '../../img/3Cart/Main.png'
import Image1 from '../../img/3Cart/Image1.png'
import Image2 from '../../img/3Cart/Image2.png'

export const DebetovZolotoCartPage = () => {
	return (
		<>
			<Face main='Дебетовая карта “Золото” с кешбэком до 10%'
				body='Двой кэшбек'
				body2='0 ₽/мес'
				body3='на одной карте'
				body4='ежемесячное обслуживание'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] 2xl:mt-[260px] sm:mt-[430px] mb-[50px]" /> {/* Разделяющая линия */}
			<div className="mt-[-50px]">
				<Gaid maintext='Как получить карту'
					text01='Взять паспорт'
					text02='Прийти в любой офис банка'
					text03='Получить карту'
				/> {/* Раздел Как получить кредит */}

			</div>

			<div className="mt-[100px] 2xl:flex 2xl:justify-between"> {/* Раздел преимущества */}
				<Ramki text='Бесплатное оформление' img={Image1} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				<div className='sm:mt-[30px]'>
					<Ramki text='Двойной кэшбек' img={Image2} w='w-[690px]' h='h-[652px]' wi='w-[556px]' hi='h-[477px]' px='px-[70px] p-[75px]' pt='pt-[40px]' />
				</div>
			</div>

			<div className="mt-[100px] text-Melody">
				<h1 className="2xl:text-[36px] sm:text-[32px]">Бесплатное</h1>
				<div className="2xl:flex 2xl:justify-between">
					<ul>
						<div className="bg-Tom 2xl:w-[700px] sm:w-[100%] 2xl:h-[116px] sm:h-[80px] rounded-[40px] shadow-xxB mt-[38px] mb-[20px] mr-[20px]  p-[20px]">Ежемясячное снятие наличных в банкоматах до 200 000 рублей</div>
						<div className="bg-Tom 2xl:w-[700px] sm:w-[100%] 2xl:h-[116px] sm:h-[80px] rounded-[40px] shadow-xxB mt-[38px] mr-[20px]  p-[20px]">Ежемясячные переводы до 130 000 рублей</div>
					</ul>
					<ul>
						<div className="bg-Tom 2xl:w-[700px] sm:w-[100%] 2xl:h-[116px] sm:h-[80px] rounded-[40px] shadow-xxB mt-[38px] mb-[20px]  p-[20px]">Пополнение карты без комиссии</div>
						<div className="bg-Tom 2xl:w-[700px] sm:w-[100%] 2xl:h-[116px] sm:h-[80px] rounded-[40px] shadow-xxB mt-[38px]  p-[20px]">SMS-информирование по всем операциям</div>
					</ul>
				</div>
			</div>
		</>
	)
}
