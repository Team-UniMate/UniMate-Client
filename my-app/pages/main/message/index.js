import React from 'react'
import Link from "next/link"
/*component*/
import HeadCont from '../../../component_mo/common/HeadCont';
const roommate = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" }
  return (
    <div className="items-center h-screen">
      <HeadCont headerTitle={"홍길동"} leftIcon={prevIcon} />
      <div className="py-2 mt-14 border-t">
        <div className="flex items-center mt-6">
          <span className="w-12 h-12 block bg-red-100"> image</span>
          <Link href="/main/message/1">
            <a className="flex flex-col ml-6">
              <strong className="text-sm font-bold">홍길동</strong>
              <span className="text-xs font-bold text-gray-400">눌러서 채팅하기</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center mt-6">
          <span className="w-12 h-12 block bg-red-100"> image</span>
          <Link href="/main/message/1">
            <a className="flex flex-col ml-6">
              <strong className="text-sm font-bold">홍길동</strong>
              <span className="text-xs font-bold text-gray-400">눌러서 채팅하기</span>
            </a>
          </Link>
        </div>
        <div className="flex items-center mt-6">
          <span className="w-12 h-12 block bg-red-100"> image</span>
          <Link href="/main/message/1">
            <a className="flex flex-col ml-6">
              <strong className="text-sm font-bold">홍길동</strong>
              <span className="text-xs font-bold text-gray-400">눌러서 채팅하기</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
  export default roommate;