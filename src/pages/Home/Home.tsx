import React from "react";
import { HomeProps } from "./Home.type";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import GenreTags from "../../components/GenreTags";
import WishList from "../../components/buttons/WishList";
import CTAButton from "../../components/buttons/CTAButton";
import Button from "../../components/buttons/Button";
import SpecialOffers from "./components/SpecialOffers";
import BrowseSteam from "./components/BrowseSteam";
import FreeToPlay from "./components/FreeToPlay";
import NewUpdate from "./components/NewUpdate";
import NewTrending from "./components/NewTrending";
import TopSellers from "./components/TopSellers";
import UnderPrice from "./components/UnderPrice";
import Menu from "../../components/layouts/components/Menu";

function Home({}: HomeProps) {
  return (
    <>
      <Menu />
      <div className="w-full bg-gradient-to-b from-[#040011] to-[#202B3C] pb-96">
        <div className="h-screen">
          <img
            src="/images/home_header_bg_night_english 1.gif"
            alt=""
            className="h-full w-full "
          />
        </div>
        <div className="container mx-auto mt-20 flex flex-col gap-[70px]">
          <div className="">
            <p className="uppercase heading-small">Featured</p>
            <div className="mt-[30px] flex items-center gap-[14px] rounded-[5px] bg-main/20 px-[15px] py-5">
              <div className="">
                <ChevronLeftIcon className="h-6 w-6" />
              </div>
              <div className="flex flex-1 gap-[17px] rounded-[5px] bg-main p-[15px]">
                <div className="flex-1">
                  <img
                    src="/images/image 48.png"
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <div className="flex  flex-[0_0_40%] flex-col gap-[17px]">
                  <p className="heading-large">Elden Ring</p>
                  <div className="body-medium">
                    THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided
                    by grace to brandish the power of the Elden Ring and become
                    an Elden Lord in the Lands Between.
                  </div>
                  <div className="grid grid-cols-2 gap-[7px]">
                    <div className="">
                      <img
                        src="images/image 49.png"
                        alt=""
                        className="h-full w-full"
                      />
                    </div>
                    <div className="">
                      <img
                        src="images/image 50.png"
                        alt=""
                        className="h-full w-full"
                      />
                    </div>
                    <div className="">
                      <img
                        src="images/image 51.png"
                        alt=""
                        className="h-full w-full"
                      />
                    </div>
                    <div className="">
                      <img
                        src="images/image 52.png"
                        alt=""
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <GenreTags
                      genres={[
                        "Soul-like",
                        "RPG",
                        "Dark Fantasy",
                        "Open-world",
                      ]}
                    />
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={25}
                        viewBox="0 0 26 25"
                        fill="none"
                      >
                        <path
                          d="M20.3893 2.08534C20.2383 2.07831 20.0859 2.08752 19.9336 2.11383L13.8626 3.17177C13.3637 3.25927 13 3.69091 13 4.19716V10.4166C13 10.9916 13.4667 11.4583 14.0417 11.4583H21.3333C21.9083 11.4583 22.375 10.9916 22.375 10.4166V4.16664C22.375 3.54998 22.1043 2.96846 21.6324 2.57159C21.2785 2.27393 20.8423 2.10644 20.3893 2.08534ZM9.93197 3.88385C9.855 3.87983 9.77565 3.88416 9.69596 3.89809L5.35026 4.65492C4.35339 4.82888 3.625 5.69524 3.625 6.70774V10.4166C3.625 10.9916 4.09167 11.4583 4.66667 11.4583H9.875C10.45 11.4583 10.9167 10.9916 10.9167 10.4166V4.92348C10.9167 4.35746 10.4707 3.91193 9.93197 3.88385ZM4.66667 13.5416C4.09167 13.5416 3.625 14.0083 3.625 14.5833V18.2922C3.625 19.3047 4.35234 20.1711 5.35026 20.345L9.69596 21.1019C10.3335 21.2123 10.9167 20.7233 10.9167 20.0765V14.5833C10.9167 14.0083 10.45 13.5416 9.875 13.5416H4.66667ZM14.0417 13.5416C13.4667 13.5416 13 14.0083 13 14.5833V20.8028C13 21.309 13.3637 21.7417 13.8626 21.8282L19.9336 22.8861C20.0534 22.907 20.1739 22.9187 20.2937 22.9187C20.7802 22.9187 21.2532 22.7471 21.6324 22.4284C22.1043 22.0304 22.375 21.4489 22.375 20.8333V14.5833C22.375 14.0083 21.9083 13.5416 21.3333 13.5416H14.0417Z"
                          fill="#76808C"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <WishList>Wishlist</WishList>
                    <div className="">
                      <span className="mr-3.5 heading-small">$ 100.95</span>
                      <Button variant="primary">Add to cart</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <ChevronRightIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
          <SpecialOffers />
          <BrowseSteam />
          <FreeToPlay />
          <NewUpdate />
          <NewTrending />
          <TopSellers />
          <UnderPrice />
        </div>
      </div>
    </>
  );
}

export default Home;
