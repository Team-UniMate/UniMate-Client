import React from 'react'
import Link from "next/link"
/*component*/
import HeadCont from '../../../component_mo/common/HeadCont';
import MainNav from '../../../component_mo/common/MainNav';
import { useRouter } from 'next/router';
const profile = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" }
  const router = useRouter();
  return (
    <div className="items-center h-screen px-4">
      <HeadCont headerTitle={"프로필"} />
      <div className="flex items-center mt-14 py-2">
        <span className="block h-14 w-14 bg-gray-100 mr-4">image</span>
        <span className="font-bold">프렌즈 cbk</span>
        <button className="p-2 border rounded ml-28"
        onClick = {()=>{ router.push("/main/profile/showprofile")}}
        >프로필 보기</button>
      </div>
      <div>
        <ul className="py-2">
          <li className="bg-white py-4 border-b border-t">
            <Link href="/main/profile/myinfo">
              <a className="w-full block">
              회원정보
              </a>
            </Link>
          </li>
          <li className="bg-white py-4 border-b w-full">
            <Link href="profile/myroommate">
              <a className="w-full block">
              내 룸메이트 찾기 글
              </a>
            </Link>
          </li>
          <li className="bg-white py-4 border-b">
            <Link href="profile/notice">
            <a className="w-full block">
            공지사항
            </a>
            </Link>
          </li>
          <li className="bg-white py-4 border-b cursor-pointer"
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
