import React from 'react'

import Face from '../../components/Face'
import Gaid from '../../components/Gaid'
import ZaiavkiTwo from '../../components/VidiZaiavok/ZaiavkiTwo'

import Main from '../../img/1Credit/Main.png'

export const ImushestvaPage = () => {
	return (
		<>
			<Face main='Страхование имущества '
				body='ваше имущество в наших руках'
				body2=''
				body3=' '
				body4=' '
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] 2xl:mt-[260px] sm:mt-[430px] mb-[50px]" /> {/* Разделяющая линия */}

			<div className="mt-[50px] text-Melody 2xl:text-[20px] sm:text-[16px]"> {/* Раздел правил */}
				<h1 className='2xl:text-[36px] sm:text-[32px] mb-[40px]'>Защита распространяется на такие события как:</h1>
				<h1 className='mb-[30px]'>Пожар, удар молнии, взрыв</h1>
				<h1 className='mb-[30px]'>Внешние воздействие</h1>
				<h1 className='mb-[30px]'>Залив, стихийные действия</h1>
				<h1 className='2xl:mb-[100px] sm:mb-[60px]'>Противоправные действия третьих лиц</h1>

				<h1 className='2xl:text-[36px] sm:text-[32px] mb-[40px] '>Страхуется:</h1>
				<h1 className='mb-[30px]'>Внутренняя отделка, инженерные сети и оборудование (покрытия поверхностей стен, пола, потолка, перекрытий; двери; оконные блоки)</h1>
				<h1 className='mb-[30px]'>Движимое имущество</h1>
				<h1 className='mb-[30px]'>Гражданская ответственность перед третьими лицами</h1>
			</div>

			<div className="mt-[100px] flex justify-center text-Melody"> {/* Раздел тарифов */}
				<div className='bg-Tom w-[1179px] h-[540px] rounded-[40px] shadow-xxA p-[40px]'>
					<h1 className='2xl:text-[40px] sm:text-[32px] mb-[56px]'>Размер страховой выплаты</h1>
					<div className="flex justify-between">
						<ul>
							<li className="mb-[68px]"> </li>
							<li className="text-[34px] mb-[63px]">Тариф 1</li>
							<li className="text-[34px] mb-[63px]">Тариф 2</li>
							<li className="text-[34px] ">Тариф 3</li>
						</ul>
						<ul>
							<li className="mb-[56px]">Размер страховой выплаты</li>
							<li className="mb-[90px] font-bold pl-[60px]">300 000 ₽</li>
							<li className="mb-[90px] font-bold pl-[60px]">500 000 ₽</li>
							<li className="font-bold pl-[60px]">800 000 ₽</li>
						</ul>
						<div className="bg-Melody p-[1px]" /> {/* Разделяющая линия */}
						<ul className="pr-[65px]">
							<li className="mb-[56px]">Стоимость для клиента</li>
							<li className="mb-[90px] font-bold pl-[60px]">2 200 ₽</li>
							<li className="mb-[90px] font-bold pl-[60px]">3 100 ₽</li>
							<li className="font-bold pl-[60px]">5 000 ₽</li>
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
				input11='Тариф страхования' input21='Название страхуемого'
				input12='ФИО' input22='Паспортные данные'
				input13='Дата рождения' input23='СНИЛС И ИНН'
				input14='Мобильный телефон' input24='Электронная почта'
				input15='Номер военного билета' input25='Стаж'
				input16='Название работы' 

			/>
		</>
	)
}
