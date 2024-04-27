import React from 'react'

import Face from '../../components/Face'
import RaschetTwo from '../../components/Raschet/ReschetTwo'


import Main from '../../img/Vklad/Main3.png'

export const MinPage = () => {
	return (
		<>
			<Face main='Вклад “Минимальный”'
				body='Процент 8.8'
				body2='С выводом средств'
				body3='Срок от 1 до 13 месяцев'
				body4=' '
				recklama='mt-[10px] text-[20px] text-Jerry'
				opacity='opacity-0'
				img={Main}
				button='Войти'
			/>
			<div className="bg-Melody p-[1px] 2xl:mt-[260px] sm:mt-[430px] mb-[50px]" /> {/* Разделяющая линия */}

			<RaschetTwo maintext='Рассчитайте ваш вклад'
				inputtext1='Сумма вклада'
				inputtext2='Срок вклада'
				inputmin1='10000' inputmin2='1'
				inputmax1='300000' inputmax2='13'
				Chislotext2='8.8 %'
				Chislominitext1='Сумма в конце вклада'
				Chislominitext2='Ставка'
				Chislominitext3='Доход' stavka='8.80'
			/>

			<div className="text-Melody text-[20px] mt-[100px]">
				<span className="2xl:text-[36px] sm:text-[32px]">Как открыть вклад</span>
				<div className="bg-Tom 2xl:w-[1180px] sm:w-[100%] h-[99px] rounded-[40px] pl-[20px] mt-[30px] flex items-center ">Созвонитесь с нашим менеджером +7 978 504-65-69</div>
			</div>

		</>
	)
}
