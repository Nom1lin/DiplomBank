import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

import MarkerBlack from '../img/MarkerBlack.png'
import MarkerOrange from '../img/MarkerOrange.png'

export const KartaPage = () => {
	const placemarkOptionsOne = { iconColor: '#E07445' };
	const placemarkOptionsTwo = { iconColor: '#17181D' };
	return (
		<>
			<YMaps>
				<div className="">
					<div className="flex justify-around text-Jerry mt-[105px] text-[20px]">
						<h1 className='text-[36px]  font-semibold' >Ищите нас на карте</h1>
						<h1 className='flex items-center'><img src={MarkerBlack} alt="картинки нет" className='mr-[10px] w-[40px]' /><h1 className=''>Офисы</h1></h1>
						<h1 className='flex items-center'><img src={MarkerOrange} alt="картинки нет" className='mr-[10px] w-[40px]' /><h1 className=''>Банкоматы</h1></h1>
					</div>


					<div className="w-[100%] h-[620px] rounded-[40px] bg-Melody flex justify-center items-center mt-[100px] ">
						<Map className='w-[1360px] h-[560px]  ' defaultState={{ center: [44.95995159149692,34.10552848740453], zoom: 14 }}>
							<Placemark geometry={[44.98284262361713, 34.08515315356711]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.98357359091058, 34.08686976733663]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.97480136413033, 34.09742694201925]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.97017103305466, 34.09296374621846]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.95996469828932, 34.10935740771748]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.95249149575122, 34.10209540681623]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.949352649708054, 34.11741618470929]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.94834696345097, 34.12625674562239]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.9562047796069, 34.12884950276548]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.944181209245684, 34.09359201585023]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.93504342359931, 34.08982433271646]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.938642800386795, 34.07235406987764]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.96270602504619, 34.08456413969194]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.9705289612076, 34.078172450423935]} options={placemarkOptionsOne} />
							<Placemark geometry={[44.93587667531547, 34.13420459816577]} options={placemarkOptionsOne} />

							<Placemark geometry={[44.935297509155156, 34.13433334419848]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.94475566461625, 34.125380006434966]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.948321424066634, 34.1269678741718]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.95240501137453, 34.12289091646917]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.95776808465191, 34.108085122706946]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.95322146988561, 34.10320463789]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.96085803329318, 34.08467341193577]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.972865630171434, 34.096271230646884]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.976581934137215, 34.09790201372795]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.944840420433565, 34.0942631809444]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.94581569158586, 34.07889948770711]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.96627857509589, 34.1260054183454]} options={placemarkOptionsTwo} />
							<Placemark geometry={[44.934730851383875, 34.102749764516034]} options={placemarkOptionsTwo} />
						</Map>
					</div>
				</div>
			</YMaps>
		</>
	)
}
