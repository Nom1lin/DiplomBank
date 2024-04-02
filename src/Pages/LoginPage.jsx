import React from 'react'
import ButtonOne from '../components/ButtonOne'
import { Link, NavLink } from 'react-router-dom'

export const LoginPage = () => {
	return (
		< >
			<div className='flex justify-center mt-[30px] text-Melody'>
				<div className='w-[980px] h-[795px] bg-Tom rounded-[40px] shadow-xxA  flex justify-center'>
					<ul className='mt-[66px]'>
						<li className='text-[48px] ml-[94px]'>Авторизация</li>
						<li className=''> {/* Инпут 1*/}
							<h1 className='text-[20px] mt-[90px] ml-[30px] mb-[5px]'>Введите ваш логин</h1>
							<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />
						</li>
						<li className=''> {/* Инпут 2*/}
							<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Введите ваш логин</h1>
							<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />
						</li>
						<li className="flex text-[13px] mt-[15px]">
							<input className="mr-[5px] w-[20px] h-[20px] bg-Tom " type="checkbox" />
							<h1 className="mr-[5px]">я принимаю </h1>
							<h1 className="text-[#00C2FF]"> условия обработки и передачи персональльных данных</h1>
						</li>
						<li className='mt-[100px] ml-[120px]'>
							<ButtonOne color='bg-Melody' silki='/carts/debetovcart' text='Войти' />
							<NavLink to={'/register'} className='text-[#00C2FF] text-[13px] ml-[55px]  '>У вас ещё нет аккаунта?</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}
