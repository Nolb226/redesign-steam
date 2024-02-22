import React from "react";
import { useLoaderData } from "react-router-dom";
import { IApp } from "../../../types/apps";
import Button from "../../../components/buttons/Button";
import WishList from "../../../components/buttons/WishList";
import { util } from "../../../utils";
import GenreTags from "../../../components/GenreTags";
import MainCTA from "../../../components/MainCTA";
import { Helmet } from "react-helmet-async";
import Requirements from "./components/Requirements";
import Features from "./components/Features";
import Languages from "./components/Languages";
import Achievements from "./components/Achievements";
import Links from "./components/Links";
import About from "./components/About";
import ReviewsBar from "../../../components/ReviewsBar";

function AppDetail() {
  const data = useLoaderData() as IApp;
  console.log(data);

  return (
    <>
      <Helmet>
        <title>{data.name}</title>
      </Helmet>
      <div className="relative h-full bg-gradient-to-b from-[#040011] to-[#202B3C] pb-96 ">
        <div
          className=" bg-cover bg-center  pt-[45px]"
          style={{
            backgroundImage: `url(${data.background})`,
          }}
        >
          <div className="container  bottom-0 left-0 right-0 top-0 mx-auto pb-60">
            <div className=" flex items-center justify-between rounded bg-main py-[15px] pl-[25px] pr-[15px]">
              <div className="heading-large">{data.name}</div>
              <div className="flex gap-[10px]">
                <Button className="min-w-[90px]" variant="tertiary">
                  Ignore
                </Button>
                <Button className="min-w-[90px]" variant="tertiary">
                  Follow
                </Button>
                <WishList>WishList</WishList>
                <Button variant="secondary" className="px-4">
                  Browse All DLCs
                </Button>
                <Button variant="secondary" className="px-4">
                  Community Hub
                </Button>
              </div>
            </div>
            <div className="mt-[10px] grid grid-cols-7 gap-x-[24px] bg-[#0E141B]/50 p-[25px]">
              <div className="col-span-5">
                {/* {data.screenshots[0]} */}
                <img src={data.screenshots[0]} className="w-full" alt="" />
              </div>
              <div className="min-md:body-medium col-span-2 flex flex-col  gap-8">
                <img src={data.header_image} alt="" />
                <div className="body-large">{data.short_description}</div>
                <div className="flex flex-col gap-[15px]">
                  <span className="text-dim body-medium">Reviews</span>
                  <div className="flex items-center gap-3.5">
                    <span className="body-medium">Past Month:</span>
                    <ReviewsBar
                      negative={data.negative}
                      positive={data.positive}
                    />
                    <span className="text-secondary-color body-medium">
                      {data.negative + data.positive} Reviews
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-8 gap-x-2">
                  <span className="col-span-2 text-dim body-medium">
                    Release Date
                  </span>
                  <span className="">{util.formatDate(data.release_date)}</span>
                </div>
                <div className="grid grid-cols-8 gap-x-2">
                  <span className="col-span-2 text-dim body-medium ">
                    Developer(s)
                  </span>
                  <span className="col-span-6 whitespace-break-spaces">
                    {data.developers.map((dev, i) => {
                      if (i === data.developers.length - 1) return <>{dev}.</>;
                      return <>{dev}, </>;
                    })}
                  </span>
                </div>
                <div className="grid grid-cols-8 gap-x-2">
                  <span className="col-span-2 text-dim body-medium ">
                    Publisher(s)
                  </span>
                  <span className="col-span-6 whitespace-break-spaces">
                    {data.publishers.map((dev, i) => {
                      if (i === data.publishers.length - 1) return <>{dev}.</>;
                      return <>{dev}, </>;
                    })}
                  </span>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <span className="text-dim body-medium">Popular Tags</span>
                  <GenreTags genres={Object.keys(data.tags)} limit />
                </div>
              </div>
            </div>
            <div className="mt-[10px] grid grid-cols-7 ">
              <div className="col-span-5 mr-4 flex flex-col gap-3">
                <div className="flex flex-row items-center justify-between rounded bg-main/50 p-[26px]">
                  <div className="heading-medium">
                    <p>{data.name}</p>
                    {/* <p></p> */}
                  </div>
                  <div className="">
                    <MainCTA price={data.price} />
                  </div>
                </div>
                <About detail={data.about_the_game} name={data.name} />
                <Requirements
                  systems={{
                    windows: data?.windows,
                    mac: data?.mac,
                    linux: data?.linux,
                  }}
                  requirements={{
                    windows: data.pc_requirements,
                    mac: data.mac_requirements,
                    linux: data.linux_requirements,
                  }}
                />
              </div>

              <div className="col-span-2 flex flex-col gap-3">
                <Features />
                <Languages
                  languages={data.supported_languages}
                  audio={data.full_audio_languages}
                />
                <Achievements />
                <Links />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppDetail;
