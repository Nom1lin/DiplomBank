import React from 'react'
import Face from '../components/Face'
import { TiPlus } from "react-icons/ti";

import Logo from '../img/Main/PngMain.png'
import Image1 from '../img/Main/ImgOne.png'
import Image2 from '../img/Main/ImgTwo.png'
import Image3 from '../img/Main/ImgThree.png'
import Image4 from '../img/Main/ImgFo.png'
import Image5 from '../img/Main/ImgFive.png'

import ButtonOne from '../components/Button/ButtonOne'
import ButtonTwo from '../components/Button/ButtonTwo'

import Ramki from '../components/Ramki'

export const MainPage = () => {
	return (
		<>
			<Face main='Добро пожаловать в мой диплом проект, где мы стремимся быть вашим надежным финансовым партнером на всю жизнь. Мы предлагаем широкий спектр банковских услуг, разработанных для удовлетворения всех ваших финансовых потребностей.'
				body='Откройте счет сегодня и начните пользоваться преимуществами банковских услуг мирового класса. Наш опытный персонал готов помочь вам достичь ваших финансовых целей.'
				img={Logo}
				opacity='opacity-1'
				button='Войти'
			/>
			<div className='2xl:mt-[230px] sm:mt-[220px] text-Melody'>
				<span className='2xl:text-[32px] sm:text-[20px] mb-[20px]'>Преимущества</span>
				<div className='flex justify-between  mt-[23px]'>
					<Ramki text='Надежное хранение средств' img={Image1} w='w-[340px]' h='h-[322px]' wi='w-[250px]' hi='h-[250px]' px='px-[45px]' pt='pt-[10px]' />
					<Ramki text='Удобство' img={Image2} w='w-[340px]' h='h-[322px]' wi='w-[250px]' hi='h-[250px]' px='px-[45px]' pt='pt-[10px]' />
					<Ramki text='Финансовая безопасность' img={Image3} w='w-[690px]' h='h-[322px]' wi='w-[250px]' hi='h-[250px]' px='px-[225px]' pt='pt-[10px]' hidden='sm:hidden' />
				</div>
				<div className='flex justify-between  mt-[20px]'>
					<Ramki text='Консультации и поддержка' img={Image4} w='w-[690px]' h='h-[322px]' wi='w-[250px]' hi='h-[250px]' px='px-[225px]' pt='pt-[10px]' hidden='sm:hidden' />
					<Ramki text='Программы лояльности' img={Image5} w='w-[690px]' h='h-[322px]' wi='w-[250px]' hi='h-[250px]' px='px-[225px]' pt='pt-[10px]'  />
				</div>
			</div>

			<div className='mt-[100px] text-Melody sm:hidden 2xl:block'>
				<span className='text-[32px] mb-[20px]'>Наше обслуживания</span>
				<div className="flex">
					<div className="ml-[400px]">
						<span className="text-[24px] ml-[50px]">Дебетовая карта</span>
						<div className="w-[300px] h-[170px] bg-Tom flex justify-center items-center text-[24px] mt-[10px]">Карта</div>
					</div>
					<div className="ml-[55px]">
						<span className="text-[24px] ml-[3px]">Дебетовая карта "Золото"</span>
						<div className="w-[300px] h-[170px] bg-Tom flex justify-center items-center text-[24px] mt-[10px]">Карта</div>
					</div>
					<div className="ml-[55px]">
						<span className="text-[24px] ml-[38px]">Виртуальная карта</span>
						<div className="w-[300px] h-[170px] bg-Tom flex justify-center items-center text-[24px] mt-[10px]">Карта</div>
					</div>
				</div>
				<div className="mt-[80px]">
					<div className="flex justify-between text-[24px]"> {/* Первая строка */}
						<span className="w-[340px] flex justify-center">Доставка</span><span className="w-[1020px] flex justify-center">Домой или в офис по всей территории России</span>
					</div>
					<div className="bg-Melody p-[1px] my-[80px]" /> {/* Разделяющая линия */}

					<div className="flex justify-between items-center text-[40px] "> {/* Вторая строка */}
						<span className="w-[340px] flex justify-center text-[20px] pl-[20px]">Кэшбек за покупки по льготным категориям</span>
						<span className="w-[300px] flex justify-center">5%</span>
						<span className="w-[300px] flex justify-center">8%</span>
						<span className="w-[300px] flex justify-center">10%</span>
					</div>
					<div className="bg-Melody p-[1px] my-[80px]" /> {/* Разделяющая линия */}

					<div className="flex justify-between items-center text-[28px] "> {/* Третья строка */}
						<span className="w-[340px] flex justify-center text-[20px]">Стоимость обслуживания в месяц</span>
						<span className="w-[300px] flex font-semibold justify-center">300 руб.</span>
						<span className="w-[300px] flex font-semibold justify-center">800 руб.</span>
						<span className="w-[300px] flex font-semibold justify-center">1000 руб.</span>
					</div>
					<div className="bg-Melody p-[1px] my-[80px]" /> {/* Разделяющая линия */}

					<div className="flex justify-between items-center text-[40px] "> {/* Четвертая строка */}
						<span className="w-[340px] flex justify-center text-[20px]">Бесплатное снятие</span>
						<span className="w-[76px] h-[76px] bg-Tom flex justify-center items-center rounded-[40px] mr-[100px]"><TiPlus /></span>
						<span className="w-[76px] h-[76px] bg-Tom flex justify-center items-center rounded-[40px] mr-[100px]"><TiPlus /></span>
						<span className="w-[76px] h-[76px] bg-Tom flex justify-center items-center rounded-[40px] mr-[112px]"><TiPlus /></span>
					</div>
					<div className="bg-Melody p-[1px] my-[80px]" /> {/* Разделяющая линия */}

					<div className="flex justify-between items-center text-[20px] "> {/* Пятая строка */}
						<span className="w-[340px] flex justify-center text-[20px]">Лимит снятия в месяц</span>
						<span className="w-[300px] flex font-semibold justify-center">3 000 000 руб.</span>
						<span className="w-[300px] flex font-semibold justify-center">8 000 000 руб.</span>
						<span className="w-[300px] flex font-semibold justify-center">Бесплатно</span>
					</div>
					<div className="bg-Melody p-[1px] my-[80px]" /> {/* Разделяющая линия */}

					<div className="flex justify-between items-center text-[40px] ">{/* Шестая строка */}
						<span className="w-[340px] flex justify-center text-[20px] pl-[20px]">Кэшбек за покупки по льготным категориям</span>
						<span className="w-[300px] flex justify-center">5%</span>
						<span className="w-[300px] flex justify-center">8%</span>
						<span className="w-[300px] flex justify-center">10%</span>
					</div>

					<div className="flex justify-between items-center text-[40px] mt-[95px] ml-[420px]">{/* Шестая строка */}
						<ButtonOne color='bg-Melody' text='Оформить' silki='/carts/debetovcart' />
						<ButtonTwo opacity='opacity-1' text='Оформить' silki='/carts/debetovcartzoloto' />
						<ButtonOne color='bg-Melody' text='Оформить' silki='/carts/virtualiticart' />
					</div>
				</div>


			</div>

			<div className='mt-[100px] text-Melody sm:hidden 2xl:block'>
				<span className='text-[32px] '>Как пользоваться</span>
				<div className='flex justify-between mt-[10px]'>
					<ul>
						<li className='w-[1060px] h-[126px] bg-Tom rounded-[40px] shadow-xxA my-[20px] py-[53px] pl-[32px]'>Получение и активация карты</li>
						<li className='w-[1060px] h-[126px] rounded-[40px] shadow-xxB my-[20px] py-[53px] pl-[32px] border border-Melody'>Сокращение покупок и платежей по карте</li>
						<li className='w-[1060px] h-[126px] bg-Tom rounded-[40px] shadow-xxA my-[20px] py-[53px] pl-[32px]'>Накопление процентов и кэшбек на остаток</li>
						<li className='w-[1060px] h-[126px] rounded-[40px] shadow-xxB my-[20px] py-[53px] pl-[32px] border border-Melody'>Укрепление безопасности карты</li>
						<li className='w-[1060px] h-[126px] bg-Tom rounded-[40px] shadow-xxA my-[20px] py-[53px] pl-[32px]'>Оформление дополнительной карты</li>
					</ul>
					<ul>
						<li className='text-[36px] pt-[90px]'>+7 978 504-65-69</li>
						<li className='pt-0'>Бесплатно по Крыму</li>
						<li className='pt-[40px]'><ButtonOne color='bg-Melody' text='Зарегистрироваться' silki='/register' /></li>
					</ul>

				</div>
			</div>

		</>
	)
}
