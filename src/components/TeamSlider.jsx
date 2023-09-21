import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const TeamSlider = ({ teamMembers }) => {
  return (
    <div className="">
      <p className="text-5xl leading-10 tracking-wide text-[#3B536D] text-center mb-2">
        Who We Are
      </p>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {teamMembers.map((oneMember) => (
          <SwiperSlide>
            <div className="flex flex-col gap-1 items-center justify-center w-full h-fit">
              <p className="m-3 p-3 text-center font-bold leading-10 text-3xl text-[#3B536D]">
                {oneMember.name}
              </p>
              <p className=" w-[80%] p-4 text-[#3B536D] leading-8 tracking-wide text-base md:text-2xl text-center mb-2">
                {oneMember.bio}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
