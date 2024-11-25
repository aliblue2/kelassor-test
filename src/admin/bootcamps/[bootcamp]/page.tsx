import TableUser from "@/components/Admin/bootcamps/TableUser";
import Filter from "@/components/Admin/layout/Filter/Filter";
import { getUsersBootcamp } from "@/requests/admin/getUsersBootcamp";
import { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { cookies } from "next/headers";
import Link from "next/link";

const Page: NextPage<{
  params: { bootcamp: string };
  searchParams: { page: string; callResult: string };
}> = async ({ params, searchParams }) => {
  const hashedID = cookies().get("user_session")!.value;
  const bootcampName = params.bootcamp;
  const currentPage = parseInt(searchParams.page || "1", 10);
  const callResult = searchParams.callResult || "";

  const { users, total, Bootcamps } = await getUsersBootcamp(
    hashedID,
    [bootcampName],
    currentPage,
    callResult
  );
  const totalPages = Math.ceil(total / 20);

  const getUpdateUrlParams = (newPage: number) => {
    const params = new URLSearchParams();
    params.set("page", newPage.toString());
    if (callResult) params.set("callResult", callResult);

    return `/admin/bootcamps/${bootcampName}?${params.toString()}`;
  };

  return (
    <>
      <div className="bg-white shadow2 overflow-hidden rounded-[20px] py-5 px-2">
        <div className="p-2 rounded-lg bg-primary-base">
          <h6 className="p-2 text-lg font-medium bg-white rounded-md text-light-1">
            بوتکمپ {bootcampName} کلاسور
          </h6>
        </div>
        <Filter bootcamps={Bootcamps} filters={[bootcampName, callResult]} />
        <TableUser users={users} />

        <div className="flex items-center justify-center gap-3 w-full">
          {currentPage !== 1 && (
            <Link
              className="w-10 h-10 rounded-full text-lg bg-white shadow-md border flex items-center justify-center hover:bg-primary-base hover:bg-opacity-20 hover:text-primary-base transition-colors duration-300"
              href={getUpdateUrlParams(currentPage - 1)}
            >
              {currentPage - 1}
            </Link>
          )}
          <span className="w-10 h-10 rounded-full text-lg font-medium bg-primary-base text-white shadow-md border flex items-center justify-center">
            {currentPage}
          </span>
          {currentPage !== totalPages && (
            <Link
              className="w-10 h-10 rounded-full text-lg bg-white shadow-md border flex items-center justify-center hover:bg-primary-base hover:bg-opacity-20 hover:text-primary-base transition-colors duration-300"
              href={getUpdateUrlParams(currentPage + 1)}
            >
              {currentPage + 1}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
