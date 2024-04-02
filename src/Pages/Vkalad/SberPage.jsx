import React from 'react'

import Face from '../../components/Face'
import Raschet from '../../components/Reschet'

import Main from '../../img/Vklad/Main4.png'

export const SberPage = () => {
	return (
		<>
			<Face main='Вклад “Сберегательный”'
				body='Процент 14.4'
				body2='Без вывода средств'
				body3='Срок от 5 до 25 месяцев'
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
				inputminitext1='от 10 до 500 тысяч рублей'
				inputminitext2='от 5 до 25 месяцев'
				Chislotext1='561 999 ₽'
				Chislotext2='14.4 %'
				Chislotext3='61 999 ₽'
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
