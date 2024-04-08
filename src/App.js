import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom'

import { MainPage } from './Pages/MainPage'
import { RegisterPage } from './Pages/RegisterPage'
import { LoginPage } from './Pages/LoginPage'
import { KartaPage } from './Pages/KartaPage'
import { ErrorPage } from './Pages/ErrorPage'
import { AboutMePage } from './Pages/AboutMePage'
import { QuestionsPage } from './Pages/QuestionsPage'

import { DohodPage } from './Pages/Vkalad/DohodPage'
import { MaxPage } from './Pages/Vkalad/MaxPage'
import { MinPage } from './Pages/Vkalad/MinPage'
import { SberPage } from './Pages/Vkalad/SberPage'
import { UniversalPage } from './Pages/Vkalad/UniversalPage'

import { ImushestvaPage } from './Pages/Strahovka/ImushestvaPage'
import { NeschastiePage } from './Pages/Strahovka/NeschastiePage'

import { AvtoCreditPage } from './Pages/Credits/AvtoCreditPage'
import { CreditBusinessPage } from './Pages/Credits/CreditBusinessPage'
import { CreditCartPage } from './Pages/Credits/CreditCartPage'
import { IpotekaPage } from './Pages/Credits/IpotekaPage'
import { LubieCeliPage } from './Pages/Credits/LubieCeliPage'
import { NaObrazovaniePage } from './Pages/Credits/NaObrazovaniePage'

import { DebetovCartPage } from './Pages/Carts/DebetovCartPage'
import { DebetovZolotoCartPage } from './Pages/Carts/DebetovZolotoCartPage'
import { VirtualitiCartPage } from './Pages/Carts/VirtualitiCartPage'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from './redux/features/auth/authSlice.js'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
			dispatch(getMe())
	}, [dispatch])

	return (
		<>
			<Layout>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/karta' element={<KartaPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/*' element={<ErrorPage />} />
					<Route path='/aboutme' element={<AboutMePage />} />
					<Route path='/questions' element={<QuestionsPage />} />

					<Route path='/vkkad/dohod' element={<DohodPage />} />
					<Route path='/vkkad/max' element={<MaxPage />} />
					<Route path='/vkkad/min' element={<MinPage />} />
					<Route path='/vkkad/sber' element={<SberPage />} />
					<Route path='/vkkad/universal' element={<UniversalPage />} />

					<Route path='/strahovka/imusestva' element={<ImushestvaPage />} />
					<Route path='/strahovka/neschastie' element={<NeschastiePage />} />

					<Route path='/credit/avto' element={<AvtoCreditPage />} />
					<Route path='/credit/business' element={<CreditBusinessPage />} />
					<Route path='/credit/creditcart' element={<CreditCartPage />} />
					<Route path='/credit/ipoteka' element={<IpotekaPage />} />
					<Route path='/credit/lunieceli' element={<LubieCeliPage />} />
					<Route path='/credit/obrazovanie' element={<NaObrazovaniePage />} />

					<Route path='/carts/debetovcart' element={<DebetovCartPage />} />
					<Route path='/carts/debetovcartzoloto' element={<DebetovZolotoCartPage />} />
					<Route path='/carts/virtualiticart' element={<VirtualitiCartPage />} />

				</Routes>

				<ToastContainer position='bottom-right'/>
			</Layout>
		</>
	)
}

export default App