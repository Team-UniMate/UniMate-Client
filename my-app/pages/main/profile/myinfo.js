import React from 'react';
/*component*/
import HeadCont from '../../../component_mo/common/HeadCont';


const myinfo = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" }
  return (
    <div className="px-4 items-center relative bg-gray-200">
      <HeadCont leftIcon={prevIcon} headerTitle={"프로필 정보"}/>
      <div className="pt-14 flex flex-col items-center bg-white">
        <span className="w-20 h-20 bg-gray-100"></span>
        <span className="block pb-2">프렌즈cvdv</span>
        <div>
          <span className="bg-gray-100 rounded-2xl p-2 mx-1">남성</span>
          <span className="bg-gray-100 rounded-2xl p-2 mx-1">학생</span>
        </div>
  
</div>
    </div>
  )
}

export default myinfo
