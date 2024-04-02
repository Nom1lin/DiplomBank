import React from 'react'
import ButtonOne from '../components/ButtonOne'
import { Link, NavLink } from 'react-router-dom'

export const RegisterPage = () => {
	return (
		< >
		<div className='flex justify-center mt-[10px] text-Melody'>
			<div className='w-[980px] h-[1229px] bg-Tom rounded-[40px] shadow-xxA  flex justify-center  mb-[60px]'>
				<ul className='mt-[30px]'>
					<li className='text-[48px] ml-[94px]'>Регистрация</li>
					<li className=''> {/* Инпут 1*/}
						<h1 className='text-[20px] mt-[40px] ml-[30px] mb-[5px]'>Введите ваше ФИО</h1>
						<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />
					</li>
					<li className=''> {/* Инпут 2*/}
						<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Придумайте себе пароль</h1>
						<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />
					</li>
					<li className=''> {/* Инпут 3*/}
						<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Введите ваш телефон</h1>
						<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />
					</li>
					<li className=''> {/* Инпут 4*/}
						<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Введите вашу почту</h1>
						<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />
					</li>
					<li className=''> {/* Инпут 5*/}
						<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Введите ваш ИНН</h1>
						<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />
					</li>
					<li className=''> {/* Инпут 6*/}
						<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Введите ваш КПП</h1>
						<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />
					</li>
					<li className="flex text-[13px] mt-[5px]">
						<input className="mr-[5px] w-[20px] h-[20px] bg-Tom " type="checkbox" />
						<h1 className="mr-[5px]">я принимаю </h1>
						<h1 className="text-[#00C2FF]"> условия обработки и передачи персональльных данных</h1>
					</li>
					<li className='mt-[40px] ml-[120px]'>
						<ButtonOne color='bg-Melody' silki='/carts/debetovcart' text='Зарегистрироваться' />
						<NavLink to={'/login'} className='text-[#00C2FF] text-[13px] ml-[55px]'>У вас уже есть аккаунт?</NavLink>
					</li>
				</ul>
			</div>
		</div>
	</>
	)
}
