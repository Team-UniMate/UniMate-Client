import React from 'react'
import Link from "next/link"
/*component*/
import HeadCont from '../../../component_mo/common/HeadCont';
import MainNav from '../../../component_mo/common/MainNav';
const profile = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" }
  return (
    <div className="items-center h-screen">
      <HeadCont headerTitle={"프로필"} />
      <div className="flex items-center mt-14 py-2">
        <span className="block h-14 w-14 bg-gray-100 mr-4">image</span>
        <span className="font-bold">프렌즈 cbk</span>
        <button className="p-2 border rounded ml-8">프로필 보기</button>
      </div>
      <div className="bg-gray-200">
        <ul className="py-4">
          <li className="bg-white py-2 border-b">
            <Link href="profile/myinfo">
              <a>
              회원정보
              </a>
            </Link>
          </li>
          <li className="bg-white py-2 border-b">
            <Link href="profile/myroommate">
              <a>
              내 룸메이트 찾기 글
              </a>
            </Link>
          </li>
          <li className="bg-white py-2 border-b">
            <Link href="profile/notice">
            <a>
            공지사항
            </a>
            </Link>
          </li>
          <li className="bg-white py-2 border-b"
            onClick={() => {alert("logout")}}>

              로그아웃


          </li>
        </ul>
        <MainNav/>
      </div>
    </div>
  )
}

export default profile
