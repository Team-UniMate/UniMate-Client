import React from 'react';
import Link from "next/link"

const index = () => {
  return (
    <div className=" items-center">
      <div className="px-4 flex w-full py-1 fixed left-0 top-0">
        <span className="block w-14 h-14 bg-red-100">image</span>
        <h1 className="flex items-center font-bold text-2xl pl-4">UniMate</h1>
      </div>
      <div className="w-full  mt-16">
        <div className="w-full h-40 border">
          pagination
        </div>
        <div className="w-full border py-1">
          공지사항 pagination
        </div>
        <div className="w-full mt-4 px-4 text-2xl font-bold text-white">
          <Link href="/main/dorm">
            <a className="h-28 rounded-2xl bg-red-100 flex justify-center items-center">
              기숙사 시설
            </a>
          </Link>
          <Link href="/main/roommate">
            <a className="h-28  mt-4 rounded-2xl bg-red-100 flex justify-center items-center">
              룸메이트 찾기
            </a>
          </Link>
        </div>
        <div className="fixed bottom-0 left-0 px-4 bg-gray-100 w-full h-20 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <Link href="/main">
             <a className=" block w-12 h-12 bg-red-100">image</a>
            </Link>
            <span>홈</span>
          </div>

          <div className="flex flex-col items-center">
            <Link href="/main/watchlist">
              <a className=" block w-12 h-12 bg-red-100">image</a>
            </Link>
            <span>관심목록</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/main/message">
              <a className=" block w-12 h-12 bg-red-100">image</a>
            </Link>
            <span>메시지</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/main/profile">
              <a className=" block w-12 h-12 bg-red-100">image</a>
            </Link>
            <span>프로필</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
