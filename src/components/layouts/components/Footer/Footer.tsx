import React from 'react';

function Footer() {
	return (
		<footer className="absolute bottom-0 body-large pt-[53px] pb-[115px] left-0 right-0  bg-highlight">
			<div className="container mx-auto flex gap-[100px] ">
				<div className="flex-[0_0_550px]">
					<div className="flex gap-[14px]">
						<img src="/image 125.png" alt="" />
						<img src="/Steam-footer.png" alt="" />
					</div>
					<p className="mt-8  text-dim">
						© 2023 Valve Corporation. All rights reserved. All trademarks are
						property of their respective owners in the US and other countries.
						VAT included in all prices where applicable.
					</p>
				</div>
				<div className="flex justify-between flex-auto">
					<div className="">
						<ul className="flex gap-4 flex-col">
							<li>About Valve</li>
							<li>Jobs</li>
							<li>Steamworks</li>
							<li>Steam Distribution</li>
							<li>Support</li>
						</ul>
					</div>
					<div className="">
						<ul className="flex gap-4 flex-col">
							<li>Privacy Policy</li>
							<li>Legal</li>
							<li>Steam Subscriber Agreement</li>
							<li>Refunds</li>
							<li>Cookies</li>
						</ul>
					</div>
					<div className="">
						<div className="flex gap-[13px]">
							<div className=" bg-[#76808C]/10 flex items-center justify-center w-[43px] h-[43px]">
								<img src="/fb-log.png" alt="" />
							</div>
							<div className="bg-[#76808C]/10 flex items-center justify-center w-[43px] h-[43px]">
								<img src="/X.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
