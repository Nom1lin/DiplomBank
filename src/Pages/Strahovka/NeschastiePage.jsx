import React from 'react'

import Face from '../../components/Face'
import Gaid from '../../components/Gaid'
import ZaiavkiTwo from '../../components/VidiZaiavok/ZaiavkiTwo'

import Main from '../../img/1Credit/Main.png'

export const NeschastiePage = () => {
	return (
		<>
			<Face main='Страхование от несчастных случаев'
				body='до 450 тыс. ₽ '
				body2='1 год'
				body3='страховая выплата'
				body4='срок действия'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] 2xl:mt-[260px] sm:mt-[420px] mb-[50px]" /> {/* Разделяющая линия */}

			<div className="mt-[50px] text-Melody 2xl:flex 2xl:justify-between sm:block 2xl:text-[20px] sm:text-[16px]"> {/* Раздел правил */}
				<ul>
					<li className='2xl:text-[36px] sm:text-[32px] 2xl:mb-[60px] sm:mb-[40px]'>Условия программы</li>
					<li className='mb-[30px]'>Покупатель - физ. лицо, достигший совершенолетия</li>
					<li className='2xl:mb-[35px] sm:mb-[60px]'>Возраст застрахователя - от 18 до 80 лет</li>
				</ul>
				<ul>
					<li className='2xl:text-[36px] sm:text-[32px] 2xl:mb-[60px] sm:mb-[40px]'>Случаи дейсвия страховки</li>
					<li className='mb-[30px]'>Смерть и инвалидность 1, 2 и 3 группы в результате несчастного случая</li>
					<li className='mb-[30px]'>Телесные повреждения в результате несчастного случая</li>
					<li className='mb-[30px]'>Переломы и ожоги в результате несчастного случая</li>
				</ul>
			</div>

			<div className="2xl:mt-[100px] sm:mt-[80px] flex justify-center text-Melody"> {/* Раздел тарифов */}
				<div className='bg-Tom w-[1179px] h-[540px] rounded-[40px] shadow-xxA 2xl:p-[40px] sm:p-[20px]'>
					<h1 className='2xl:text-[40px] sm:text-[32px] mb-[56px]'>Размер страховой выплаты по рискам (вред здоровью)</h1>
					<div className="flex justify-between">
						<ul>
							<li className="mb-[72px]"> </li>
							<li className="2xl:text-[34px] sm:text-[26px] 2xl:mb-[63px] sm:mb-[73px] ">Тариф 1</li>
							<li className="2xl:text-[34px] sm:text-[26px] 2xl:mb-[63px] sm:mb-[74px]">Тариф 2</li>
							<li className="2xl:text-[34px] sm:text-[26px]">Тариф 3</li>
						</ul>
						<ul>
							<li className="mb-[56px]">Размер страховой выплаты</li>
							<li className="mb-[90px] font-bold pl-[60px]">160 000 ₽</li>
							<li className="mb-[90px] font-bold pl-[60px]">250 000 ₽</li>
							<li className="font-bold pl-[60px]">450 000 ₽</li>
						</ul>
						<div className="bg-Melody p-[1px]" /> {/* Разделяющая линия */}
						<ul className="pr-[65px]">
							<li className="mb-[56px]">Стоимость для клиента</li>
							<li className="mb-[90px] font-bold pl-[60px]">1 100 ₽</li>
							<li className="mb-[90px] font-bold pl-[60px]">2 600 ₽</li>
							<li className="font-bold pl-[60px]">4 100 ₽</li>
						</ul>
					</div>
				</div>
			</div>

			<Gaid maintext='Как получить страхование'
				text01='Оформите онлайн-заявку'
				text02='Дождитесь звонок подтверждение от банка'
				text03='Получите смс, подтверждающее страховку'
			/> {/* Раздел Как получить кредит */}

			<ZaiavkiTwo maintext='Онлайн заявка на страхование'
				input11='Тариф страхования' input21='ФИО страхуемого'
				input12='ФИО' input22='Паспортные данные'
				input13='Дата рождения' input23='СНИЛС И ИНН'
				input14='Мобильный телефон' input24='Электронная почта'
				input15='Номер военного билета' input25='Стаж'
				input16='Название работы' 

			/>
		</>
	)
}
