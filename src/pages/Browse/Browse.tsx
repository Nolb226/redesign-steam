import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { faList, faGrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Await, useAsyncValue, useLoaderData } from "react-router-dom";
import { IApp } from "../../types/apps";
import Filter from "./Filter";
import AppListItem from "./AppListItem";
import Pagination from "../../components/Pagination";
import clsx from "clsx";

function Browse() {
  const { apps } = useLoaderData() as { apps: IApp[] };
  const test = useAsyncValue();
  console.log(test);

  const [view, setView] = useState<"list" | "grid">("list");
  const perPage = useMemo(() => {
    return view === "list" ? 7 : 9;
  }, [view]);
  const [data, setData] = useState<IApp[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(0);

  const onChangePage = (page: number) => setCurrentPage(page);

  const renderApp = useCallback(() => {
    return data
      ?.slice(currentPage * perPage, (currentPage + 1) * perPage)
      .map((app: IApp) => <AppListItem key={app.name} view={view} app={app} />);
  }, [currentPage, perPage, data, view]);

  return (
    <div className="container mx-auto scroll-smooth pb-[322px]">
      <h2 className="heading-large">Browse Steam</h2>
      <div className=" mb-4 mt-9 flex justify-between rounded-[3px] bg-main py-2 pl-3.5 pr-[26px]">
        <div className="flex items-center">
          <span className="mr-[11px] text-dim body-large">View</span>
          <FontAwesomeIcon
            className={clsx(
              "mr-2 h-5 w-5 cursor-pointer rounded bg-[#76808C]/5 p-[7px] text-dim hover:bg-hover",
              {
                "bg-hover": view === "list",
              },
            )}
            icon={faList}
            onClick={() => setView("list")}
          />
          <FontAwesomeIcon
            className={clsx(
              " h-5 w-5 cursor-pointer rounded bg-[#76808C]/5 p-[7px] text-dim hover:bg-hover",
              {
                "bg-hover": view === "grid",
              },
            )}
            icon={faGrip}
            onClick={() => setView("grid")}
          />
        </div>
        <div className=""></div>
      </div>
      <div className="grid grid-cols-5 gap-x-2.5">
        <div className="col-span-1">
          <Filter
            // onFilter={() => {}}
            onFilter={(tags: string[]) => {
              const duplicatedApp = [...data];
              console.log(duplicatedApp);
              const newList = duplicatedApp.filter((app) => {
                if (!app.tags) return false;
                const allAppTag = Object.keys(app.tags);
                return allAppTag.some((item) => tags.includes(item));
              });
              if (!newList.length && !tags.length)
                return setData(duplicatedApp);
              setData(newList);
              setCurrentPage(0);
            }}
          />
        </div>
        <div className="col-span-4">
          <Suspense fallback={<>Test</>}>
            <div
              className={clsx("mb-2.5", {
                "flex flex-col gap-[11px]": view === "list",
                "grid min-h-[1022px] grid-cols-3 gap-3.5": view === "grid",
              })}
            >
              <Await resolve={apps}>
                {(gettedData) => {
                  // setData([...gettedData]);
                  const totalPages = Math.ceil(gettedData.length / perPage);
                  console.log(gettedData);

                  return (
                    <>
                      {renderApp()};
                      <Pagination
                        perPage={perPage}
                        currentPage={currentPage}
                        onChangePage={onChangePage}
                        totalPages={totalPages}
                      />
                    </>
                  );
                }}
              </Await>
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Browse;
