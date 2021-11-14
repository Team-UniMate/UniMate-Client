import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import Image from "next/image";
import router from "next/router";
const login = () => {
  return (
    <div className="px-4 items-center h-screen relative">
      <div className="pagination w-full h-1/2 justify-center items-center">
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper text-center"
        >
          <SwiperSlide>
            <div className="flex flex-col">
              <Image
                src="/images/Frame.png"
                width={300}
                height={300}
                alt="frame"
              />
              <strong>Looking For Roommate?</strong>
              <div className="w-full mt-16"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col">
              <Image
                src="/images/Frame.png"
                width={300}
                height={300}
                alt="frame"
              />
              <strong>Looking For Roommate?</strong>
              <div className="w-full mt-16"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col">
              <Image
                src="/images/Frame.png"
                width={300}
                height={300}
                alt="frame"
              />
              <strong>Looking For Roommate?</strong>
              <div className="w-full mt-16"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className="font-bold text-3xl mt-14 text-center">
        A roomate for everyone
      </h1>
      <div className="w-full flex flex-col items-center absolute bottom-4 left-0">
        <button
          onClick={() => {
            router.push("/login/signin");
          }}
          className="w-full py-4 keycolor rounded-3xl font-bold text-white tracking-wide text-center hover:bg-purple-600 transition duration-150 ease-in-out"
        >
          로그인 페이지
        </button>

        <button
          onClick={() => {
            router.push("/login/signup");
          }}
          className="w-full py-4 border rounded-3xl font-bold tracking-wide text-center mt-4 hover:bg-gray-100  transition duration-150 ease-in-out"
        >
          계정 생성
        </button>
      </div>
    </div>
  );
};

export default login;
