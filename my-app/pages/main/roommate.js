import React from 'react'/*component*/
import HeadCont from '../../component_mo/common/HeadCont';
const roommate = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" }
  return (
    <div className="items-center h-screen  overflow-scroll">
      <HeadCont leftIcon={prevIcon} headerTitle={"기숙사 시설"} />
      <div className="px-4 py-2 mt-14 border-t ">
        <input
          type="text"
          className=" py-1.5 w-full px-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100"
          placeholder="필터기능입니다."
        />
      </div>
      <div className="w-full border-black bg-gray-100">
        <div className="h-52 py-4 bg-white px-4">
          <div className="flex items-center ">
            <span className="bg-red-100 w-12 h-12 block">image</span>
            <div className="flex flex-col text-xs">
              <span>홍길동</span>
              <span>컴퓨터공학과</span>
              <span>남성 한국</span>
            </div>
          </div>
          <div className=" w-full border-b h-1/2 py-2 text-sm overflow-scroll">
            군대 갔다 온 복학생 24살입니다.<br />
            게임 좋아하시는 분 구합니다.<br />
            2인실 희망하고 있습니다.<br/>
            군대 갔다 온 복학생 24살입니다.<br />
            게임 좋아하시는 분 구합니다.<br />
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <div>
              좋아요 + 메시지
            </div>
            <div className="w-8 h-8 bg-blue-200"></div>
          </div>
        </div>
        <div className="h-52 py-4 mt-4 bg-white px-4">
          <div className="flex items-center ">
            <span className="bg-red-100 w-12 h-12 block">image</span>
            <div className="flex flex-col text-xs">
              <span>홍길동</span>
              <span>컴퓨터공학과</span>
              <span>남성 한국</span>
            </div>
          </div>
          <div className=" w-full border-b h-1/2 py-2 text-sm overflow-scroll">
            군대 갔다 온 복학생 24살입니다.<br />
            게임 좋아하시는 분 구합니다.<br />
            2인실 희망하고 있습니다.<br/>
            군대 갔다 온 복학생 24살입니다.<br />
            게임 좋아하시는 분 구합니다.<br />
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <div>
              좋아요 + 메시지
            </div>
            <div className="w-8 h-8 bg-blue-200"></div>
          </div>
        </div>
        <div className="h-52 py-4 mt-4 bg-white px-4">
          <div className="flex items-center ">
            <span className="bg-red-100 w-12 h-12 block">image</span>
            <div className="flex flex-col text-xs">
              <span>홍길동</span>
              <span>컴퓨터공학과</span>
              <span>남성 한국</span>
            </div>
          </div>
          <div className=" w-full border-b h-1/2 py-2 text-sm overflow-scroll">
            군대 갔다 온 복학생 24살입니다.<br />
            게임 좋아하시는 분 구합니다.<br />
            2인실 희망하고 있습니다.<br/>
            군대 갔다 온 복학생 24살입니다.<br />
            게임 좋아하시는 분 구합니다.<br />
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <div>
              좋아요 + 메시지
            </div>
            <div className="w-8 h-8 bg-blue-200"></div>
          </div>
        </div>
      </div>
      <span className="w-16 h-16 bg-blue-100 fixed bottom-4 right-4">
        note
      </span>
    </div>
  )
}

export default roommate
