import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { registerUser, checkIsAuth } from '../redux/features/auth/authSlice'

export const RegisterPage = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [telephone, setTelephone] = useState('')
	const [email, setEmail] = useState('')
	const [Inn, setInn] = useState('')
	const [Kpp, setKpp] = useState('')
	const { status } = useSelector(state => state.auth)
	const isAuth = useSelector(checkIsAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (status) {
			toast(status)
		}
		if (isAuth) navigate('/')
	}, [status, isAuth, navigate])

	const handleSubmit = () => {
		try {
			dispatch(registerUser({ username, password, telephone, email, Inn, Kpp })) // передает в виде объекта данные с полей ввода 
			setPassword(''); setEmail('') // очисщяем
			setUsername(''); setInn('')
			setTelephone(''); setKpp('')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		< >
			<div className='flex justify-center mt-[10px] text-Melody'>
				<div className='w-[980px] h-[1229px] bg-Tom rounded-[40px] shadow-xxA  flex justify-center  mb-[60px]'>
					<ul className='mt-[30px]'>
						<li className='text-[48px] ml-[94px]'>Регистрация</li>
						<li className=''> {/* Инпут 1*/}
							<h1 className='text-[20px] mt-[40px] ml-[30px] mb-[5px]'>Введите ваше ФИО</h1>
							<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
						</li>
						<li className=''> {/* Инпут 2*/}
							<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Придумайте себе пароль</h1>
							<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
						</li>
						<li className=''> {/* Инпут 3*/}
							<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Введите ваш телефон</h1>
							<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
						</li>
						<li className=''> {/* Инпут 4*/}
							<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Введите вашу почту</h1>
							<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
						</li>
						<li className=''> {/* Инпут 5*/}
							<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Введите ваш ИНН</h1>
							<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" value={Inn} onChange={(e) => setInn(e.target.value)} />
						</li>
						<li className=''> {/* Инпут 6*/}
							<h1 className='text-[20px] mt-[15px] ml-[30px] mb-[5px]'>Введите ваш КПП</h1>
							<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" value={Kpp} onChange={(e) => setKpp(e.target.value)} />
						</li>
						<li className="flex text-[13px] mt-[5px]">
							<input className="mr-[5px] w-[20px] h-[20px] bg-Tom " type="checkbox" />
							<h1 className="mr-[5px]">я принимаю </h1>
							<h1 className="text-[#00C2FF]"> условия обработки и передачи персональльных данных</h1>
						</li>
						<li className='mt-[40px] ml-[120px]'>
							{/* <ButtonOne color='bg-Melody' silki='/carts/debetovcart' text='Зарегистрироваться' /> */}
							{/* <NavLink to={'/carts/debetovcart'} > */}
							<button type='submit' onClick={handleSubmit} className={`w-[258px] h-[82px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[24px]`}>Зарегистрироваться</button>
							{/* </NavLink> */}
							<NavLink to={'/login'} className='text-[#00C2FF] text-[13px] ml-[55px]'>У вас уже есть аккаунт?</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}