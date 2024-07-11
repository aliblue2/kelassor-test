//page component
const page = () => {
  return (
    <div className="flex gap-10 flex-col grow items-center py-10">
      <h3 className="self-start">بوتکمپ‌های من</h3>
      <table className="text-center w-full bg-light-3 rounded-[20px] overflow-hidden">
        <thead className="[&>tr>th]:p-5">
          <tr className="bg-primary-base text-white border-spacing-10  ">
            <th>نام بوتکمپ</th>
            <th>تاریخ شروع</th>
            <th>تاریخ پایان</th>
            <th>وضعیت پرداخت</th>
          </tr>
        </thead>
        <tbody className="[&>tr>td]:p-5">
          <tr>
            <td>مدیریت محصول</td>
            <td>۲۰ دی ماه ۱۴۰۳</td>
            <td>۲۰ اسفند ماه ۱۴۰۳</td>
            <td className="text-success">تسویه</td>
          </tr>
          <tr>
            <td>مدیریت محصول</td>
            <td>۲۰ دی ماه ۱۴۰۳</td>
            <td>۲۰ اسفند ماه ۱۴۰۳</td>
            <td className="text-success">تسویه</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
