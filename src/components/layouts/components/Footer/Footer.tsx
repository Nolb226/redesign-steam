import React from "react";

function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-highlight pb-[115px] pt-[53px] body-small  lg:body-large">
      <div className="container mx-auto flex flex-wrap p-4 md:p-0 lg:gap-[100px]">
        <div className="lg:flex-[0_0_550px]">
          <div className="flex flex-col gap-[14px] md:flex-row">
            <img src="/image 125.png" alt="" className="w-[125px] lg:w-auto" />
            <img
              src="/Steam-footer.png"
              alt=""
              className="w-[125px] lg:w-fit"
            />
          </div>
          <p className="mt-8  text-dim">
            © 2023 Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners in the US and other countries.
            VAT included in all prices where applicable.
          </p>
        </div>
        <div className="mt-8 flex flex-auto flex-col justify-between gap-7 lg:mt-0 lg:flex-row lg:gap-0">
          <div className="">
            <ul className="flex  flex-col gap-1 md:flex-row md:justify-between lg:flex-col lg:gap-4">
              <li>About Valve</li>
              <li>Jobs</li>
              <li>Steamworks</li>
              <li>Steam Distribution</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-1 md:flex-row md:justify-between lg:flex-col lg:gap-4">
              <li>Privacy Policy</li>
              <li>Legal</li>
              <li>Steam Subscriber Agreement</li>
              <li>Refunds</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="">
            <div className="flex gap-[13px]">
              <div className=" flex h-8 w-8 items-center justify-center bg-[#76808C]/10 md:h-[43px] md:w-[43px]">
                <img
                  src="/fb-log.png"
                  alt=""
                  className="h-5 w-5 object-fill md:h-fit md:w-fit"
                />
              </div>
              <div className="flex h-8 w-8 items-center justify-center bg-[#76808C]/10 md:h-[43px] md:w-[43px]">
                <img
                  src="/X.png"
                  alt=""
                  className="h-5 w-5 md:h-fit md:w-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
