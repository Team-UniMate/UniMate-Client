import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
/*component*/
import HeadCont from "../../../component_mo/common/HeadCont";

const myinfo = () => {
  const [isAccessible, setIsAccessible] = useState(false);
  const router = useRouter();
  const user = useSelector((state) => state.app.applogin);
  useEffect(() => {
    if (user.length === 0 || user === undefined) {
      router.push("/login/signin");
    } else {
      setIsAccessible(true);
    }
  }, []);
  console.log(user);

  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  return (
    <>
      <div className="w-full h-screen  items-center  ">
        <HeadCont leftIcon={prevIcon} headerTitle={"개인정보 관리"} />
        <div className="mt-20">
          <h1 className="font-bold pb-2">계정정보</h1>
          <table>
            <tbody className="flex flex-col">
              <tr className="pb-2 inline-block">
                <td className="w-20 block">이메일</td>
                <td>{user.user_mail}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default myinfo;
