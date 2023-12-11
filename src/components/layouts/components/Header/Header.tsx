import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Notifications from '../../../Notifications/Notifications';
import FriendList from '../../../FriendList';

const navigate = [
	{
		to: '',
		text: 'Store',
	},
	{
		to: '',
		text: 'Community',
	},
	{
		to: '',
		text: 'Library',
	},
	{
		to: '',
		text: 'Download',
	},
];

function Header() {
	return (
		<header className="bg-main flex p-4 items-center ">
			<div className="flex items-center">
				<div className="">
					<img src="./Steam.svg" className="w-[88px] h-[22px]" />
				</div>
				<div className="ml-[66px]">
					<ul className="flex gap-[66px] items-center">
						{navigate.map((n, i) => (
							<li key={i} className="hover:text-primary hover:cursor-pointer">
								<p className="uppercase heading-small">{n.text}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="flex ml-auto mr-[320px]">
				<div className="flex gap-[6px]">
					<FriendList />
					<Notifications />
					<div className="bg-highlight rounded p-2  py-[6px] text-dim flex items-center gap-2">
						<img src="./avatar1.jpg" alt="" className="h-5 w-5 object-cover" />
						<div className="">
							<p className="text-sm text-main">Khánh Hoàng</p>
						</div>
						<div className="">
							<p className="text-sm">$100.2</p>
						</div>
						<div className="">
							<ChevronDownIcon className="h-4 w-4" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
