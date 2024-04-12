import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane, FaOdnoklassniki, FaInstagram, FaFacebookF, FaWindows, FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";

export const Buttom = () => {
	const isAuth = true; {/* Подриси профиля профиля */ }
	return (
		<>
			{isAuth && (
				<div className="w-100vh h-[490px] bg-Tom rounded-t-[40px] shadow-xxA pt-[30px] px-[425px] mt-[100px]">
					<div className="flex justify-between">
						<ul className="text-Melody"> {/* Первая группа */}
							<li className='text-[26px] mb-[22px]'>О банке</li>
							<li className='text-[16px] mb-[17px]'>
								<NavLink to={'/karta'} >Офисы и банкоматы</NavLink></li>
							<li className='text-[16px] mb-[17px]'>
								<NavLink to={'/'}>Общая информация</NavLink></li>
							<li className='text-[16px] mb-[17px]'>Руководство</li>
							<li className='text-[16px] mb-[17px]'>Реквизиты</li>
							<li className='text-[16px]'>
								<NavLink to={'/aboutme'}>О разработчикея</NavLink></li>
						</ul>
						<ul className="text-Melody"> {/* Вторая группа*/}  
							<li className='text-[26px] mb-[22px]'>Наши соц. сети</li>
							<li className='flex mb-[17px] text-[16px]'><SlSocialVkontakte className='mr-2 mt-[1px]' size='20px' /><a href='https://vk.com/stockholmskiy_66'>Вконтакте</a></li>
							<li className='flex mb-[17px] text-[16px]'><FaTelegramPlane className='mr-2 mt-[1px]' size='20px' /><a href='https://web.telegram.org/#1200569226'>Телеграмм</a></li>
							<li className='flex mb-[17px] text-[16px]'><FaOdnoklassniki className='mr-2 mt-[1px]' size='20px' /><a href='https://ok.ru/'>Однокласники</a></li>
							<li className='flex mb-[17px] text-[16px]'><FaInstagram className='mr-2 mt-[1px]' size='20px' /><a href='https://instagram.com/'>Инстаграм</a></li>
							<li className='flex text-[16px]'><FaFacebookF className='mr-2 mt-[1px]' size='20px' /><a href='https://facebook.com/'>Фейсбук</a></li>
						</ul>
						<ul className="text-Melody"> {/* Третья группа  */}
							<li className='text-[26px] mb-[22px]'>Онлайн сервисы</li>
							<li className='text-[16px] mb-[17px]'><NavLink  to={'/questions'} >Написать в банк</NavLink></li>
							<li className='text-[16px] mb-[17px]'>Заявки и калькулятор</li> 
							<li className=''>Мошеничество</li>
						</ul>
					</div>
					<div className="flex justify-around mt-[50px]">
						<ul className="text-Melody"> {/* Четвертая группа (не забудь добавить иконки) */}
							<li className='text-[26px] mb-[22px]'>Свяжитесь с нами</li>
							<li className='text-[16px] mb-[17px]'>Номер телефона: +7 978 504-65-69</li>
							<li className='text-[16px]'>Эл. почта: bank@mail.ru</li>
						</ul>
						<ul className="text-Melody"> {/* пятая группа  */}
							<li className='text-[26px] mb-[22px]'>Мобильный банк</li>
							<li className='flex'>
								<FaWindows size='36px' className='mr-[31px]' />
								<BsAndroid2 size='36px' className='mr-[31px]' />
								<FaApple size='36px' />
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	)
}