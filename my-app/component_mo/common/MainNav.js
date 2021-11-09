import React from 'react'
import Link from "next/link"
const MainNav = () => {
  return (
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
  )
}

export default MainNav
