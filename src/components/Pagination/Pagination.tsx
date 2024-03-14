import { PaginationButtonProps, PaginationProps } from "./Pagination.type";
import clsx from "clsx";

const PaginationButton = ({
  children,
  disabled = false,
  ...props
}: PaginationButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "h-[30px] rounded-[3px] bg-highlight px-2.5  disabled:opacity-20 ",
        {
          "hover:bg-hover": !disabled,
        },
      )}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

function Pagination({
  totalPages,
  currentPage,
  onChangePage,
  perPage,
}: PaginationProps) {
  const firstPage = 0;
  const lastPage = totalPages - 1;
  return (
    <>
      <div className="flex justify-end">
        <div className=" flex items-center gap-6 ">
          <PaginationButton disabled={currentPage === firstPage}>
            Prev
          </PaginationButton>
          <div className="mx-auto flex items-center justify-center gap-[5px]">
            {Array(totalPages)
              .fill(0)
              .slice(currentPage, currentPage + 7)
              .map((_, i) => {
                return (
                  <button
                    key={`page-${i + 1}`}
                    onClick={() => {
                      onChangePage && onChangePage(i);
                      window.scroll({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    className={clsx(
                      "h-[30px] w-[30px] rounded-[3px] hover:bg-hover",
                      {
                        "bg-hover": currentPage === i,
                        "bg-highlight": currentPage !== i,
                      },
                    )}
                  >
                    {i + 1}
                  </button>
                );
              })}
          </div>
          <PaginationButton disabled={currentPage === lastPage}>
            Next
          </PaginationButton>
        </div>
      </div>
    </>
  );
}

export default Pagination;
