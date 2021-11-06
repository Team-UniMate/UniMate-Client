import React from 'react';
import Link from "next/link"

const signin = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center relative">
      <div className="pagination w-full h-1/2 border justify-center items-center">
pagination 작업
      </div>
      <h1 className="font-bold text-3xl mt-14">A roomate for everyone</h1>
      <div className="absolute bottom-10 left-0 w-full flex flex-col items-center">
          <Link href="/signin/signin"
            >
            <a className="w-full py-4 keycolor rounded-3xl font-bold text-white tracking-wide text-center ">
            로그인
            </a>
          </Link>
          <Link href="/signin/signup"
          >
            <a className="w-full py-4 border rounded-3xl font-bold tracking-wide text-center mt-4">
            계정 생성
          </a>
          </Link>
        </div>
    </div>
  )
}

export default signin