import React, { useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, checkIsAuth } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export const LoginPage = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const {status} = useSelector(state => state.auth)
	const isAuth = useSelector(checkIsAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (status) toast(status)
		if (isAuth) navigate('/')
	}, [status])

	const handleSubmit = () => {
		try {
			dispatch(loginUser({ username, password })) // передает в виде объекта данные с полей ввода 
		} catch (error) {
			console.log(error)
		}
	}
	return (
		< >
			<div className='flex justify-center mt-[30px] text-Melody'>
				<form className='w-[1100px] h-[795px] bg-Tom rounded-[40px] shadow-xxA  flex justify-center' onSubmit={(e) => e.preventDefault}>
					<ul className='mt-[66px]'>
						<li className='text-[48px] ml-[94px]'>Авторизация</li>
						<li className=''> {/* Инпут 1*/}
							<h1 className='text-[20px] mt-[90px] ml-[30px] mb-[5px]'>Введите ваш логин</h1>
							<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]  outline-none focus:outline focus:outline-Melody focus:bg-Jerry' type="text"
							value={username} onChange={(e) => setUsername(e.target.value)}/>
						</li>
						<li className=''> {/* Инпут 2*/}
							<h1 className='text-[20px] mt-[30px] ml-[30px] mb-[5px]'>Введите ваш пароль</h1>
							<input className='w-[500px] h-[99px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]   outline-none' type="password" 
							value={password} onChange={(e) => setPassword(e.target.value)}/>
						</li>
						<li className="flex text-[13px] mt-[15px]">
							<input className="mr-[5px] w-[20px] h-[20px] bg-Tom " type="checkbox" />
							<h1 className="mr-[5px]">я принимаю </h1>
							<h1 className="text-[#00C2FF]"> условия обработки и передачи персональльных данных</h1>
						</li>
						<li className='mt-[100px] ml-[120px]'>
							{/* <ButtonOne color='bg-Melody' silki='/carts/debetovcart' text='Войти' /> */}
							<button type='button' onClick={handleSubmit} className={`w-[258px] h-[82px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[24px]`}>Войти</button>
							<NavLink to={'/register'} className='text-[#00C2FF] text-[13px] ml-[55px]  '>У вас ещё нет аккаунта?</NavLink>
						</li>
					</ul>
				</form>
			</div>
		</>
	)
}
