import React from 'react';
import Link from "next/link"
import MainNav from '../../component_mo/common/MainNav';

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
        <MainNav/>
      </div>
    </div>
  )
}

export default index
