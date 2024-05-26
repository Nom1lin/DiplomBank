import React from 'react'


const FeedBack = ({ feedback }) => {
	if (!feedback) {
		return (
			<div className='text-xl text-center text-white py-10'>
				Загрузка...
			</div>
		)
	}
	return (
		<div className='bg-Tom p-[30px] text-Melody shadow-xxA rounded-[40px] mb-[10px]'>
			<div className="flex justify-between items-end">
				<h1 className='text-[24px] font-medium mb-[5px] '>{feedback.login}</h1>
				<h1 className='text-[13px] mb-[5px] '>Дата размещения: {feedback.DateTime}</h1>
			</div>
			<div className="bg-Melody/30 p-[1px] " /> {/* Разделяющая линия */}
			<h1 className='text-[16px] mt-[10px]'>{feedback.text}</h1>

		</div>
	)
}

export default FeedBack