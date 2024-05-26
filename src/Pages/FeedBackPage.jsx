import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { createFeedBack, getAllFeedBacks } from '../redux/features/feedback/feedbackSlice'
import FeedBack from '../components/GetAll/FeedBack'

export const FeedBackPage = () => {
	const login = useSelector(state => state.auth.user?.fio ?? 'Нет данных');
	const [text, setText] = useState('');
	const DateTime = new Date();
	const dispatch = useDispatch();
	const { feedbacks } = useSelector((state) => state.feedback)
	useEffect(() => {
		dispatch(getAllFeedBacks())
	}, [dispatch])
	const handleCreateFeedBack = () => {
		try {
			if (text.trim() === '') {
				toast('Вы не ввели одно из значений, перевыберите вид карты');
			} else {
				dispatch(
					createFeedBack({ login, text, DateTime })
				);
				// Очищаем поля после создания вклада
				setText('');
				toast('Карта открыта');
			}
		} catch (error) {
			console.log(error);
			toast('Вы ввели что-то не то');
		}
	}
	return ( // xl sm
		<>
			<div className="mt-[100px] text-[16px]">
				<h1 className='text-Tom flex justify-center text-[40px] font-semibold '>Все отзывы</h1>

				<div className='grid grid-cols-[60%_40%] mt-[50px] gap-[20px]'>
					<div>
						{
							feedbacks?.map((feedback, idx) => (
								<FeedBack key={idx} feedback={feedback} />
							))}
					</div>
					<div className=' bg-Tom rounded-[40px] shadow-xxA p-[56px] text-Melody'>
						<div>
							<h1 className='text-[20px] ml-[30px] mb-[5px]'>Текст отзыва</h1>
							<textarea className='w-[100%] h-[200px] bg-Jerry shadow-xxB rounded-[40px] px-[30px] py-[15px] text-[24px]' type="textarea"
								value={text} onChange={(e) => setText(e.target.value)} />
						</div>

						<button type='submit' className={`mt-[30px] w-[258px] h-[82px] bg-Melody shadow-xxB rounded-[40px] text-Jerry flex justify-center items-center text-[24px]`}
							onClick={handleCreateFeedBack} >Отправить</button>
					</div>
				</div>


			</div>
		</>

	)
}
