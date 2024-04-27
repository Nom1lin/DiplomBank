import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, checkIsAuth } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export const LoginPage = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const { status } = useSelector(state => state.auth)
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
				<form className='w-[900px] bg-Tom rounded-[40px] shadow-xxA flex justify-center p-[40px]' onSubmit={(e) => e.preventDefault}>
					<ul className='mt-[36px]'>
						<h1 className='text-[34px] flex justify-center'>Авторизация</h1>
						<li className=''> {/* Инпут 1*/}
							<h1 className=' mt-[90px] ml-[30px] mb-[5px]'>Введите ваш логин</h1>
							<input className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] ' type="text"
								value={username} onChange={(e) => setUsername(e.target.value)} />
						</li>
						<li className=''> {/* Инпут 2*/}
							<h1 className=' mt-[35px] ml-[30px] mb-[5px]'>Введите ваш пароль</h1>
							<input className='w-[400px] h-[50px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px]' type="password"
								value={password} onChange={(e) => setPassword(e.target.value)} />
						</li>
						<div className='flex justify-center mt-[80px]'>
							<button type='button' onClick={handleSubmit} className={`w-[258px] h-[82px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[20px]`}>Войти</button>
						</div>
						<div className='flex justify-center mt-[10px]'>
							<NavLink to={'/register'} className='text-[#00C2FF] text-[13px] '>У вас ещё нет аккаунта?</NavLink>
						</div>
					</ul>
				</form>
			</div>
		</>
	)
}
