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
			<div className="bg-Melody p-[1px] mt-[120px] mb-[50px]" /> {/* Разделяющая линия */}

			<div className="mt-[50px] text-Melody flex justify-between text-[20px]"> {/* Раздел правил */}
				<ul>
					<li className='text-[40px] mb-[60px]'>Условия программы</li>
					<li className='mb-[35px]'>Покупатель - физ. лицо, достигший совершенолетия</li>
					<li className='mb-[35px]'>Возраст застрахователя - от 18 до 80 лет</li>
				</ul>
				<ul>
					<li className='text-[40px] mb-[60px]'>Случаи дейсвия страховки</li>
					<li className='mb-[35px]'>Смерть и инвалидность 1, 2 и 3 группы в результате несчастного случая</li>
					<li className='mb-[35px]'>Телесные повреждения в результате несчастного случая</li>
					<li className='mb-[35px]'>Переломы и ожоги в результате несчастного случая</li>
				</ul>
			</div>

			<div className="mt-[100px] flex justify-center text-Melody"> {/* Раздел тарифов */}
				<div className='bg-Tom w-[1179px] h-[540px] rounded-[40px] shadow-xxA p-[40px]'>
					<h1 className='text-[40px] mb-[56px]'>Размер страховой выплаты по рискам (вред здоровью)</h1>
					<div className="flex justify-between">
						<ul>
							<li className="mb-[68px]"> </li>
							<li className="text-[34px] mb-[63px]">Тариф 1</li>
							<li className="text-[34px] mb-[63px]">Тариф 2</li>
							<li className="text-[34px] ">Тариф 3</li>
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
				miniPravila11='от 30 000 до 6 000 000 рублей' miniPravila21='Заглушка'
			/>
		</>
	)
}
