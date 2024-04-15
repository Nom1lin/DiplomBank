import React from 'react'

import { toast } from 'react-toastify'

const MyCart = ({ cart }) => {

    const removeCartHandler = () => {
        try {
            toast('Пост был удален')
        } catch (error) {
            console.log(error)
        }
    }

	if (!cart) {
		return (
			<div className='text-xl text-center text-white py-10'>
				У вас нет карт
			</div>
		)}

	return (
		<>
			<div className="mt-[20px] flex">  {/* Первая карта */}
				<div className="w-[150px] h-[84px] bg-Tom text-Melody flex justify-center items-center ">{cart.vidCart}</div>  
				<ul className="ml-[23px] mt-[15px]"> 
					<li >{cart.number}</li>
					<li className=" mt-1 text-[13px] text-Melody/70">{cart.balans} рублей</li>
					<li onClick={removeCartHandler} className="absolute mt-[-10px] ml-[530px] text-[13px] text-Melody">Заблокировать</li> 
				</ul>
			</div>
			<div className="bg-Melody/80 p-[0.5px] my-[13px]" /> {/* Разделяющая линия */}
		</>
	)
}

export default MyCart