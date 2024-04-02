import React from 'react'

import Face from '../../components/Face'
import Raschet from '../../components/Reschet'

import Main from '../../img/Vklad/Main5.png'

export const UniversalPage = () => {
	return (
		<>
			<Face main='Вклад “Универсальный”'
				body='Процент 12'
				body2='С выводом средств'
				body3='Срок от 1 до 20 месяцев'
				body4=' '
				recklama='mt-[10px] text-[20px] text-Jerry'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] mt-[120px] mb-[50px]" /> {/* Разделяющая линия */}
			<Raschet maintext='Рассчитайте ваш вклад'
				inputtext1='Сумма вклада'
				inputtext2='Срок вклада'
				inputminitext1='от 0 до 500 тысяч рублей'
				inputminitext2='от 1 до 20 месяцев'
				Chislotext1='550 999 ₽'
				Chislotext2='12 %'
				Chislotext3='50 999 ₽'
				Chislominitext1='Сумма в конце вклада'
				Chislominitext2='Ставка'
				Chislominitext3='Доход'
			/>

			<div className="text-Melody text-[20px] mt-[100px]">
				<span className="text-[32px]">Как открыть вклад</span>
				<div className="bg-Tom w-[1180px] h-[99px] rounded-[40px] pl-[20px] mt-[50px] flex items-center ">Созвонитесь с нашим менеджером +7 978 504-65-69</div>
			</div>

		</>
	)
}
