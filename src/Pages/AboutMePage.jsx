import React from 'react';
import Face from '../components/Face'

import Logo from '../img/Main/PngMain.png'

export const AboutMePage = () => {



	return (
		<>
			<Face main='Разработчик данного веб-приложения Сардак Андрей Андреевич группа 4Исп-2'
				body='Я не придумал что писать Помогите пожалуйста'
				img={Logo}
				opacity='opacity-0'
				opacity1='opacity-0'
				button='Войти'
			/>
			{/* <div className='flex justify-around '>
        <input type="text" value={summa} onChange={(e) => setSumma(e.target.value)} />
        <input type="text" value={srok} onChange={(e) => setSrok(e.target.value)} />
        <button onClick={handleCreateVklad}>Создать вклад</button>
      </div> */}
		</>
	)
}
