import React from 'react'

const Gaid = (props) => {
	return (
		<div className="text-Melody text-[20px] mt-[100px]">
			<span className="text-[40px]">{props.maintext}</span>
			<ul className="mt-[40px]">
				<div className="flex atems-center">
					<h1 className='text-[40px] mr-[50px] font-semibold pb-[15px]'>01</h1>
					<h1 className='py-[14px]'>{props.text01}</h1>
				</div>
				<div className="flex atems-center">
					<h1 className='text-[40px] mr-[50px] font-semibold pb-[15px]'>02</h1>
					<h1 className='py-[14px]'>{props.text02}</h1>
				</div>
				<div className="flex atems-center">
					<h1 className='text-[40px] mr-[50px] font-semibold '>03</h1>
					<h1 className='py-[14px]'>{props.text03}</h1>
				</div>
			</ul>
		</div>
	)
}

export default Gaid