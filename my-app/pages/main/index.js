import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
/*component*/
import MainNav from "../../component_mo/common/MainNav";

const index = () => {
  const router = useRouter();
  return (
    <div className=" items-center">
      <div className="px-4 flex w-full py-4 fixed left-0 top-0">
        <Image
          src="/images/building.png"
          width={30}
          height={30}
          alt="buildingiMG"
        />
        <h1 className="flex items-center font-bold text-2xl pl-4">UniMate</h1>
      </div>
      <div className="w-full  mt-14">
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper text-center"
        >
          <SwiperSlide>
            <div className="flex flex-col">
              <Image
                src="/images/twobed.png"
                width={300}
                height={200}
                alt="twobed"
              />
              <div className="w-full mt-4"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col">
              <Image
                src="/images/friends.png"
                width={300}
                height={200}
                alt="twobed"
              />

              <div className="w-full mt-4"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col">
              <Image
                src="/images/dorm.png"
                width={300}
                height={200}
                alt="dorm"
              />

              <div className="w-full mt-16"></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          modules={[Autoplay, Scrollbar, A11y]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="mySwiper text-center"
        >
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="w-full font-bold">
                [공지] 2021 2학기 기숙사 신청기간
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="w-full font-bold">
                [공지] 2021 2학기 기숙사 신청기간
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col">
              <div className="w-full font-bold">
                [공지] 2021 2학기 기숙사 신청기간
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="w-full mt-4 text-2xl font-bold text-white ">
          <div
            className="relative cursor-pointer"
            onClick={() => {
              router.push("/main/dorm");
            }}
          >
            <Image
              src="/images/dorm.png"
              width={500}
              height={150}
              alt="dorm"
              className="h-28 rounded-2xl flex justify-center items-center"
            />
            <span
              className="text-2xl font-bold absolute top-0 left-0 block h-full w-full z-10
            flex justify-center items-center"
            >
              기숙사 시설
            </span>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => {
              router.push("/main/roommate");
            }}
          >
            <Image
              src="/images/friends.png"
              width={500}
              height={150}
              alt="friends"
              className="h-28 rounded-2xl flex justify-center items-center"
            />
            <span
              className="text-2xl font-bold absolute top-0 left-0 block h-full w-full z-10
            flex justify-center items-center"
            >
              룸메이트 찾기
            </span>
          </div>
        </div>
        <MainNav />
      </div>
    </div>
  );
};

export default index;
