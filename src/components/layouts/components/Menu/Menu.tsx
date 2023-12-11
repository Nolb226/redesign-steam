import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React from 'react';

const items = [
	// {
	// 	text: 'Home',
	// },
	{
		text: 'Browse',
	},
	{
		text: 'Discover',
	},
	{
		text: 'Points Shop',
	},
	{
		text: 'Curators',
	},
	{
		text: 'Gift Cards',
	},
	{
		text: 'News',
	},
];

function Menu() {
	return (
		<div className="bg-tertiary h-[57px] py-[6px] px-[10px] flex items-center justify-between">
			<div className="">
				<ul className="flex gap-[7px] text-main  py-2">
					<li className="px-7 py-[10px] hover:bg-secondary-color bg-secondary-color rounded">
						<p className="body-large">Home</p>
					</li>
					{items.map((item, i) => (
						<li
							key={i}
							className="px-7 py-[10px] hover:bg-secondary-color hover:rounded"
						>
							<p className="body-large">{item.text}</p>
						</li>
					))}
				</ul>
			</div>
			<div className="flex items-center">
				<label
					htmlFor="search"
					className=" flex h-[44px] items-center pl-4 pr-3 bg-[#0E141B]/20 py-3 w-[507px]"
				>
					<input
						id="search"
						placeholder="Search..."
						type="text"
						className="border-none flex-1 outline-none bg-transparent placeholder:text-secondary-color placeholder:body-medium"
					/>
					<MagnifyingGlassIcon className="h-4 w-4 font-bold text-secondary-color" />
				</label>
			</div>
			<div className="">
				<ul className="flex items-center">
					<li className="px-7 py-[10px]">
						<p className="body-large">Wishlist</p>
					</li>
					<li className="px-7 py-[10px]">
						<p className="body-large">Cart</p>
					</li>
					<li>
						<div className="bg-[#76808C]/10 flex items-center justify-center w-10 h-10 rounded">
							<img src="./Settings.svg" alt="" />
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Menu;
