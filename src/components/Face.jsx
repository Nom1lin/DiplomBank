import React from 'react'

import ButtonOne from './Button/ButtonOne'
import ButtonTwo from './Button/ButtonTwo'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const Face = (props) => {
	const isAuth = useSelector(checkIsAuth) // Подриси профиля профиля 
	const dispatch = useDispatch()

	return (
		<>
			<div className="2xl:flex 2xl:justify-between sm:block text-Jerry">
				<ul className=''>
					<li className='2xl:text-[36px] sm:text-[28px] mt-[140px] font-semibold flex justify-center ' >{props.main}</li>
					<li className='mt-[12px] flex justify-around'>
						<ul className=''>
							<li className='2xl:text-[20px] sm:text-[16px]'>{props.body}</li>
							<li className={props.recklama}>{props.body3}</li>
						</ul>
						<ul>
							<li className='2xl:text-[20px] sm:text-[16px]'>{props.body2}</li>
							<li className='text-Jerry/80 text-[13px]'>{props.body4}</li>
						</ul>
					</li>
				</ul>
				<img src={props.img} alt="картинки нет" className='2xl:w-[680px] 2xl:mt-[32px] 2xl:flex sm:hidden' />
			</div>
			{isAuth || (
				<div className="flex items-center justify-between 2xl:mt-[0px] sm:mt-[100px]">
					<ButtonOne text={props.button} opacity1={props.opacity1} color='bg-Kuromi' mr='mr-[50px]' silki='/login' />
					<ButtonTwo text='Зарегистрироваться' opacity={props.opacity} color='bg-Melody' colortxt='text-Jerry' silki='/register' />
				</div>)}
		</>
	)
}

Face.defaultProps = { recklama: 'text-Jerry/80 text-[13px]' }

export default Face;
