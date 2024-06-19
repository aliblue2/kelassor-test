">puse client";

import CustomHeading from "@/components/Ui/CustomHeading";
import SimpleCarousel from "@/components/Ui/SimpleCarousel";
import Image from "next/image";

//BootcampIntroduction component
type BootcampIntroductionProps = {
  content: string;
  title: string;
  pictures: string[];
};
const BootcampIntroduction = ({
  content,
  pictures,
  title,
}: BootcampIntroductionProps) => {
  console.log(pictures);
  return (
    <>
      <CustomHeading circle>
        <h2>معرفی بوتکمپ {title}</h2>
      </CustomHeading>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 ">
        <p className="md:w-1/2 font-medium leading-8">{content}</p>
        <SimpleCarousel count={pictures.length}>
          {pictures.map((item) => (
            <Image
              key={item}
              src={item}
              alt="picture"
              height={300}
              width={400}
              className="size-full object-cover"
            />
          ))}
        </SimpleCarousel>
      </div>
    </>
  );
};

export default BootcampIntroduction;
