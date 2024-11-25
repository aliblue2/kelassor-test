import TableUser from "@/components/Admin/bootcamps/TableUser";
import Filter from "@/components/Admin/layout/Filter/Filter";
import { getUsersBootcamp } from "@/requests/admin/getUsersBootcamp";
import { NextPage } from "next";
import { cookies } from "next/headers";
import Link from "next/link";

const Page: NextPage<{
  searchParams: { page: string; bootcampName: string; callResult: string };
}> = async ({ searchParams }) => {
  const hashedId = cookies().get("user_session")!.value;
  const currentPage = parseInt(searchParams.page || "1");
  const bootcampsName = searchParams.bootcampName || "";
  const callResult = searchParams.callResult || "";

  // Split bootcamp names for multi-filter capability
  const { users, total, Bootcamps } = await getUsersBootcamp(
    hashedId,
    bootcampsName.split(","),
    currentPage,
    callResult
  );
  const totalPages = Math.ceil(total / 20);

  // Helper function to generate the URL with current filters and updated page number
  const getUpdatedUrl = (newPage: number) => {
    const params = new URLSearchParams();
    params.set("page", newPage.toString());

    if (bootcampsName) params.set("bootcampName", bootcampsName);
    if (callResult) params.set("callResult", callResult);

    return `/admin/users?${params.toString()}`;
  };

  return (
    <div className="bg-white shadow2 overflow-hidden rounded-[20px] py-5 px-2">
      <Filter bootcamps={Bootcamps} filters={[bootcampsName, callResult]} />
      <TableUser users={users} />
      <div className="flex items-center justify-center gap-3 w-full">
        {currentPage > 1 && (
          <Link
            className="w-10 h-10 rounded-full text-lg bg-white shadow-md border flex items-center justify-center hover:bg-primary-base hover:bg-opacity-20 hover:text-primary-base transition-colors duration-300"
            href={getUpdatedUrl(currentPage - 1)}
          >
            {currentPage - 1}
          </Link>
        )}
        <span className="w-10 h-10 rounded-full text-lg font-medium bg-primary-base text-white shadow-md border flex items-center justify-center">
          {currentPage}
        </span>
        {currentPage < totalPages && (
          <Link
            className="w-10 h-10 rounded-full text-lg bg-white shadow-md border flex items-center justify-center hover:bg-primary-base hover:bg-opacity-20 hover:text-primary-base transition-colors duration-300"
            href={getUpdatedUrl(currentPage + 1)}
          >
            {currentPage + 1}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Page;
