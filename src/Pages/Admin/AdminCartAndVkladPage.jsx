import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { createVklad } from '../../redux/features/vklad/vkladSlice'
import { useClickOutside } from '../../hooks/useClickOutside'
import { NavLink } from 'react-router-dom'

import Face from '../../components/Face'
import Gaid from '../../components/Gaid'

import Logo from '../../img/Main/PngMain.png'


export const AdminCartAndVkladPage = () => {
	const [isOpen, setOpen] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const [is2Open, set2Open] = useState(false)  //создал переменую и функцию для реализации открытия и закрытия списка 
	const menuRef = useRef(null) // создал переменую для реализации закрытия списка по клику вне области

	const [client, setClient] = useState(''); // Сумма займа
	const [vid, setVid] = useState(''); // Сумма займа
	const [summa, setSumma] = useState(1000); // Сумма займа
	const [srock, setSrock] = useState(5); // Срок вклад
	const [stavka, setStavka] = useState(null); // Процентная ставка вклада
	const finalsumma = Math.round(summa * (stavka / 100) / 365 * 30) // Прибыль за один месяц
	const dispatch = useDispatch();

	const handleDepositChange = (event) => {
		const selectedValue = event.target.value;
  setVid(selectedValue);

  // Объект соответствий видов вкладов и ставок
  const stavkaMap = {
    'Доходный': 10.8,
    'Минимальный': 8.8,
    'Максимальный': 15.6,
    'Сберегательный': 14.4,
    'Универсальный': 12,
  };
	const selectedStavka = stavkaMap[selectedValue];
  setStavka(selectedStavka);
}

	const handleCreateVklad = () => {
		try {
			dispatch(createVklad({ client, vid, summa, srock, stavka, finalsumma }));
			// Очищаем поля после создания вклада
			setClient('');    setVid('');
			setSumma('');    setSrock('');
			setStavka(''); 
		} catch (error) { console.log(error) }
	};

	useClickOutside(menuRef, () => { //  функция для реализации закрытия списка по клику вне области
		if (isOpen) setTimeout(() => setOpen(false), 50)
		if (is2Open) setTimeout(() => set2Open(false), 50)
	})

	return (
		<>
			<Face main='Административная панель.'
				body='На этой страничке вы сможете просматривать заявки на кредит, открывать вклады и создавать карты. '
				img={Logo}
				opacity='opacity-0'
				opacity1='opacity-0'
				button='Войти'
			/>

			<div className="mt-[100px] flex justify-evenly text-Melody text-[20px]">
				<NavLink to={'/admincredit'}>Кредиты </NavLink>
				<NavLink to={'/admincart'}>Вклады и карты</NavLink>
			</div>

			<div className="bg-Melody p-[1px] my-[13px] mt-[20px]" /> {/* Разделяющая линия */}

			<div className='flex justify-between'>
				<ul className=''>
					<div className='ml-[56px]'><Gaid maintext='Как создать карту?'
						text01='Введите данные клиента'
						text02='Подтвердите создание'
						text03='Сообщить клиенту'
					/> {/* Раздел Как получить кредит */}
					</div>
					<div className='mt-[75px] w-[680px] bg-Tom rounded-[40px] shadow-xxA p-[56px] text-Melody'>
						<li>
							<h1 className='text-[20px] ml-[30px] mb-[5px]'>Введите логин клиента</h1>
							<input className='w-[568px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />  {/*  ///  value={fio} onChange={(e) => setFio(e.target.value)} */}
						</li>
						<li>
							<h1 className='text-[20px] ml-[30px] mb-[5px]'>Введите вид карты</h1>
							<input className='w-[568px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />  {/*  ///  value={fio} onChange={(e) => setFio(e.target.value)} */}
						</li>
						<li>
							<h1 className='text-[20px] ml-[30px] mb-[5px]'>Если "Крелитная карта", то кредитный баланс</h1>
							<input className='w-[568px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" />  {/*  ///  value={fio} onChange={(e) => setFio(e.target.value)} */}
						</li>

					</div>
				</ul>

				<ul className=''>
					<div className='ml-[56px]'><Gaid maintext='Как работать?'
						text01='Введите данные клиента'
						text02='Подтвердите создание'
						text03='Сообщить клиенту'
					/> {/* Раздел Как получить кредит */}
					</div>
					<div className='mt-[75px] w-[680px] bg-Tom rounded-[40px] shadow-xxA p-[56px] text-Melody'>
						<li>
							<h1 className='text-[20px] ml-[30px] mb-[5px]'>Введите логин клиента</h1>
							<input className='w-[568px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="text" value={client} onChange={(e) => setClient(e.target.value)} />
						</li>
						<li>
							<h1 className='text-[20px] ml-[30px] mb-[5px] mt-[20px]'>Введите вид вклада</h1>
							<select className='w-[568px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' value={vid} onChange={handleDepositChange}>
								<option value="Доходный">Вклад "Доходный"</option>
								<option value="Минимальный">Вклад "Минимальный"</option>
								<option value="Максимальный">Вклад "Максимальный"</option>
								<option value="Сберегательный">Вклад "Сберегательный"</option>
								<option value="Универсальный">Вклад "Универсальный"</option>
							</select>
						</li>
						<li>
							<h1 className='text-[20px] ml-[30px] mb-[5px] mt-[20px]'>Введите сумму вклада</h1>
							<input className='w-[568px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="Number" value={summa} onChange={(e) => setSumma(e.target.value)} />
						</li>
						<li>
							<h1 className='text-[20px] ml-[30px] mb-[5px] mt-[20px]'>Введите срок вклада</h1>
							<input className='w-[568px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px]' type="Number" value={srock} onChange={(e) => setSrock(e.target.value)} />
						</li>
						<li>
							<h1 className='text-[20px] ml-[30px] mb-[5px] mt-[20px]'>Введите ставку вклада</h1>
							<div className='w-[568px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px] pt-[15px]'>{stavka}</div>
						</li>
						<li>
							<h1 className='text-[20px] ml-[30px] mb-[5px] mt-[20px]'>Финальная сумма вклада составляет:</h1>
							<div className='w-[568px] h-[70px] bg-Jerry shadow-xxB rounded-[40px] pl-[30px] text-[24px] pt-[15px]' >{parseInt(summa) + (finalsumma * srock)}</div>
						</li>
						<button type='submit' className={`mt-[30px] w-[258px] h-[82px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[24px] `} onClick={handleCreateVklad} >Отправить</button>
					</div>
				</ul>
			</div>
		</>
	)
}

