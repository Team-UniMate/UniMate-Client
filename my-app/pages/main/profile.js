import React from 'react'
import Link from "next/link"
/*component*/
import HeadCont from '../../component_mo/common/HeadCont';
const profile = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" }
  return (
    <div className="items-center h-screen">
      <HeadCont headerTitle={"프로필"}/>
    </div>
  )
}

export default profile
