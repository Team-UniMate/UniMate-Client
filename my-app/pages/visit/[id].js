import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
/*component*/
import HeadCont from "../../component_mo/common/HeadCont";

const Page = () => {
  const router = useRouter();
  const user = useSelector((state) => state.app.applogin);
  const pageId = router.query.id;
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  const [birthDate, setBirthDate] = useState(new Date());
  const [inputs, setInputs] = useState({
    birth: birthDate,
    sex: "",
    country_name: "",
  });
  console.log(inputs);
  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const [p1, setP1] = useState(false);
  const [p2, setP2] = useState(false);
  const [p3, setP3] = useState(false);
  const [p4, setP4] = useState(false);
  const [p5, setP5] = useState(false);
  const [p6, setP6] = useState(false);
  const [p7, setP7] = useState(false);
  const [p8, setP8] = useState(false);
  const [p9, setP9] = useState(false);
  const [p10, setP10] = useState(false);
  const [p11, setP11] = useState(false);
  const [p12, setP12] = useState(false);
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [a4, setA4] = useState(false);
  const [a5, setA5] = useState(false);
  const [a6, setA6] = useState(false);
  const [a7, setA7] = useState(false);
  const [a8, setA8] = useState(false);
  const [a9, setA9] = useState(false);
  const [a10, setA10] = useState(false);
  const [a11, setA11] = useState(false);
  const [a12, setA12] = useState(false);
  const [a13, setA13] = useState(false);
  const [a14, setA14] = useState(false);
  const [a15, setA15] = useState(false);
  const [a16, setA16] = useState(false);
  const [a17, setA17] = useState(false);
  const [a18, setA18] = useState(false);
  const colorState =
    "block w-24 py-2 border text-center rounded-full  cursor-pointer";
  const falseState = colorState + " hover:bg-gray-100";
  const trueState = colorState + " bg-gray-100";

  const p1Ref = useRef();
  const p2Ref = useRef();
  const p3Ref = useRef();
  const p4Ref = useRef();
  const p5Ref = useRef();
  const p6Ref = useRef();
  const p7Ref = useRef();
  const p8Ref = useRef();
  const p9Ref = useRef();
  const p10Ref = useRef();
  const p11Ref = useRef();
  const p12Ref = useRef();
  const a1Ref = useRef();
  const a2Ref = useRef();
  const a3Ref = useRef();
  const a4Ref = useRef();
  const a5Ref = useRef();
  const a6Ref = useRef();
  const a7Ref = useRef();
  const a8Ref = useRef();
  const a9Ref = useRef();
  const a10Ref = useRef();
  const a11Ref = useRef();
  const a12Ref = useRef();
  const a13Ref = useRef();
  const a14Ref = useRef();
  const a15Ref = useRef();
  const a16Ref = useRef();
  const a17Ref = useRef();
  const a18Ref = useRef();
  let array = [];
  let array2 = [];

  const onClickPersonal = () => {
    if (p1) {
      array.push(p1Ref.current.innerText);
    }
    if (p2) {
      array.push(p2Ref.current.innerText);
    }
    if (p3) {
      array.push(p3Ref.current.innerText);
    }
    if (p4) {
      array.push(p4Ref.current.innerText);
    }
    if (p5) {
      array.push(p5Ref.current.innerText);
    }
    if (p6) {
      array.push(p6Ref.current.innerText);
    }
    if (p7) {
      array.push(p7Ref.current.innerText);
    }
    if (p8) {
      array.push(p8Ref.current.innerText);
    }
    if (p9) {
      array.push(p9Ref.current.innerText);
    }
    if (p10) {
      array.push(p10Ref.current.innerText);
    }
    if (p11) {
      array.push(p11Ref.current.innerText);
    }
    if (p12) {
      array.push(p12Ref.current.innerText);
    }
    alert(array);
    router.push(`4`);
  };
  const onClickTaste = () => {
    if (a1) {
      array2.push(a1Ref.current.innerText);
    }
    if (a2) {
      array2.push(a2Ref.current.innerText);
    }
    if (a3) {
      array2.push(a3Ref.current.innerText);
    }
    if (a4) {
      array2.push(a4Ref.current.innerText);
    }
    if (a5) {
      array2.push(a5Ref.current.innerText);
    }
    if (a6) {
      array2.push(a6Ref.current.innerText);
    }
    if (a7) {
      array2.push(a7Ref.current.innerText);
    }
    if (a8) {
      array2.push(a8Ref.current.innerText);
    }
    if (a9) {
      array2.push(a9Ref.current.innerText);
    }
    if (a10) {
      array2.push(a10Ref.current.innerText);
    }
    if (a11) {
      array2.push(a11Ref.current.innerText);
    }
    if (a12) {
      array2.push(a12Ref.current.innerText);
    }
    if (a13) {
      array2.push(a13Ref.current.innerText);
    }
    if (a14) {
      array2.push(a14Ref.current.innerText);
    }
    if (a15) {
      array2.push(a15Ref.current.innerText);
    }
    if (a16) {
      array2.push(a16Ref.current.innerText);
    }
    if (a17) {
      array2.push(a17Ref.current.innerText);
    }
    if (a18) {
      array2.push(a18Ref.current.innerText);
    }
    alert(array2);
    router.push(`5`);
  };

  return (
    <>
      {pageId === "1" ? (
        <div className="w-full h-screen flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-1/6 z-30 keycolor h-1 shadow-inner"></div>
          <form className="pt-16">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              나에 대해 알려주세요
            </h1>
            <div className="mt-14 text-base">
              <h2 className="pb-3">&middot; 생년월일을 선택해주세요</h2>
              <DatePicker
                className=" py-2 px-3 leading-normal rounded-3xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 border w-full"
                selected={birthDate}
                name="birth"
                onChange={(date) => {
                  setBirthDate(date);
                }}
              />
              <h2 className="mt-6 pb-3">&middot; 성별을 선택해주세요</h2>
              <select
                aria-label="Selected tab"
                className="sex border rounded-2xl form-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="sex"
              >
                <option value="">입력값 없음</option>
                <option value="여성">여성</option>
                <option value="남성">남성</option>
              </select>
              <h2 className="mt-6 pb-3">&middot; 출신 국가를 알려주세요</h2>
              <select
                aria-label="Selected tab"
                className="nation border rounded-2xl form-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="nation"
              >
                <option value="">입력값 없음</option>
                <option value="한국">한국</option>
                <option value="미국">미국</option>
                <option value="중국">중국</option>
                <option value="그외">그외</option>
              </select>
            </div>

            <div className="fixed bottom-4 left-0 w-full px-4 ">
              <button
                onClick={() => {
                  router.push(`2`);
                }}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
              >
                다음
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {pageId === "2" ? (
        <div className="w-full h-screen flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-2/6 z-30 keycolor h-1 shadow-inner"></div>
          <form className="pt-16">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              소속대학과 학과를 알려주세요
            </h1>
            <div className="mt-14 text-base">
              <h2 className="pb-3">&middot; 소속대학을 선택해주세요</h2>

              <select
                aria-label="Selected tab"
                className="university border rounded-2xl form-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="university"
              >
                <option value="">입력값 없음</option>
                <option value="A대학교">A대학교</option>
                <option value="B대학교">B대학교</option>
                <option value="C대학교">C대학교</option>
                <option value="그외">그외</option>
              </select>
              <h2 className="mt-6 pb-3">&middot; 학과를 알려주세요</h2>
              <select
                aria-label="Selected tab"
                className="nation border rounded-2xl form-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="nation"
              >
                <option value="">입력값 없음</option>
                <option value="컴퓨터공학과">컴퓨터공학과</option>
                <option value="유아교육과">유아교육과</option>
                <option value="디자인과">디자인과</option>
                <option value="그외">그외</option>
              </select>
            </div>

            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                onClick={() => {
                  router.push(`3`);
                }}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
              >
                다음
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {pageId === "3" ? (
        <div className="w-full h-screen flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-3/6 z-30 keycolor h-1 shadow-inner"></div>
          <form className="pt-16">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              성향을 알려주세요
            </h1>
            <div className="mt-14 text-base">
              <h2 className="pb-3">
                &middot; 키워드는 최소 3개 이상 선택해주세요
              </h2>
            </div>

            <div className="flex flex-wrap justify-between gap-x-8 gap-y-4">
              <span
                ref={p1Ref}
                onClick={() => {
                  setP1(!p1);
                }}
                className={p1 ? trueState : falseState}
              >
                발랄한
              </span>
              <span
                ref={p2Ref}
                onClick={() => {
                  setP2(!p2);
                }}
                className={p2 ? trueState : falseState}
              >
                활동적
              </span>
              <span
                ref={p3Ref}
                onClick={() => {
                  setP3(!p3);
                }}
                className={p3 ? trueState : falseState}
              >
                집순이
              </span>
              <span
                ref={p4Ref}
                onClick={() => {
                  setP4(!p4);
                }}
                className={p4 ? trueState : falseState}
              >
                조용한
              </span>
              <span
                ref={p5Ref}
                onClick={() => {
                  setP5(!p5);
                }}
                className={p5 ? trueState : falseState}
              >
                온화한
              </span>
              <span
                ref={p6Ref}
                onClick={() => {
                  setP6(!p6);
                }}
                className={p6 ? trueState : falseState}
              >
                유연한
              </span>
              <span
                ref={p7Ref}
                onClick={() => {
                  setP7(!p7);
                }}
                className={p7 ? trueState : falseState}
              >
                적극적
              </span>
              <span
                ref={p8Ref}
                onClick={() => {
                  setP8(!p8);
                }}
                className={p8 ? trueState : falseState}
              >
                내향적
              </span>
              <span
                ref={p9Ref}
                onClick={() => {
                  setP9(!p9);
                }}
                className={p9 ? trueState : falseState}
              >
                규칙적
              </span>
              <span
                ref={p10Ref}
                onClick={() => {
                  setP10(!p10);
                }}
                className={p10 ? trueState : falseState}
              >
                사교적인
              </span>
              <span
                ref={p11Ref}
                onClick={() => {
                  setP11(!p11);
                }}
                className={p11 ? trueState : falseState}
              >
                수다쟁이
              </span>
              <span
                ref={p12Ref}
                onClick={() => {
                  setP12(!p12);
                }}
                className={p12 ? trueState : falseState}
              >
                깔끔한
              </span>
            </div>
            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                onClick={onClickPersonal}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
              >
                다음
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {pageId === "4" ? (
        <div className="w-full h-screen flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-4/6 z-30 keycolor h-1 shadow-inner"></div>
          <form className="pt-16">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              관심사를 알려주세요
            </h1>
            <div className="mt-14 text-base">
              <h2 className="pb-3">
                &middot; 키워드는 최소 3개 이상 선택해주세요
              </h2>
            </div>

            <div className="flex flex-wrap justify-between gap-x-8 gap-y-4">
              <span
                ref={a1Ref}
                onClick={() => {
                  setA1(!a1);
                }}
                className={a1 ? trueState : falseState}
              >
                영화
              </span>
              <span
                ref={a2Ref}
                onClick={() => {
                  setA2(!a2);
                }}
                className={a2 ? trueState : falseState}
              >
                음악
              </span>
              <span
                ref={a3Ref}
                onClick={() => {
                  setA3(!a3);
                }}
                className={a3 ? trueState : falseState}
              >
                운동
              </span>
              <span
                ref={a4Ref}
                onClick={() => {
                  setA4(!a4);
                }}
                className={a4 ? trueState : falseState}
              >
                산책
              </span>
              <span
                ref={a5Ref}
                onClick={() => {
                  setA5(!a5);
                }}
                className={a5 ? trueState : falseState}
              >
                반려동물
              </span>
              <span
                ref={a6Ref}
                onClick={() => {
                  setA6(!a6);
                }}
                className={a6 ? trueState : falseState}
              >
                독서
              </span>
              <span
                ref={a7Ref}
                onClick={() => {
                  setA7(!a7);
                }}
                className={a7 ? trueState : falseState}
              >
                드라마
              </span>
              <span
                ref={a8Ref}
                onClick={() => {
                  setA8(!a8);
                }}
                className={a8 ? trueState : falseState}
              >
                인테리어
              </span>
              <span
                ref={a9Ref}
                onClick={() => {
                  setA9(!a9);
                }}
                className={a9 ? trueState : falseState}
              >
                요리
              </span>
              <span
                ref={a10Ref}
                onClick={() => {
                  setA10(!a10);
                }}
                className={a10 ? trueState : falseState}
              >
                맛집탐방
              </span>
              <span
                ref={a11Ref}
                onClick={() => {
                  setA11(!a11);
                }}
                className={a11 ? trueState : falseState}
              >
                외국어
              </span>
              <span
                ref={a12Ref}
                onClick={() => {
                  setA12(!a12);
                }}
                className={a12 ? trueState : falseState}
              >
                글쓰기
              </span>
              <span
                ref={a13Ref}
                onClick={() => {
                  setA13(!a13);
                }}
                className={a13 ? trueState : falseState}
              >
                커피
              </span>
              <span
                ref={a14Ref}
                onClick={() => {
                  setA14(!a14);
                }}
                className={a14 ? trueState : falseState}
              >
                패션
              </span>
              <span
                ref={a15Ref}
                onClick={() => {
                  setA15(!a15);
                }}
                className={a15 ? trueState : falseState}
              >
                건강
              </span>
              <span
                ref={a16Ref}
                onClick={() => {
                  setA16(!a16);
                }}
                className={a16 ? trueState : falseState}
              >
                여행
              </span>
              <span
                ref={a17Ref}
                onClick={() => {
                  setA17(!a17);
                }}
                className={a17 ? trueState : falseState}
              >
                웹툰
              </span>
              <span
                ref={a18Ref}
                onClick={() => {
                  setA18(!a18);
                }}
                className={a18 ? trueState : falseState}
              >
                글쓰기
              </span>
            </div>
            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                onClick={onClickTaste}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-hover-600"
              >
                다음
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {pageId === "5" ? (
        <div className="w-full h-screen flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-5/6 z-30 keycolor h-1 shadow-inner"></div>
          <form className="pt-16">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              라이프스타일을 알려주세요
            </h1>
            <div className="mt-14 text-base">
              <h2 className="pb-3">&middot; 생활패턴을 선택해주세요</h2>

              <select
                aria-label="Selected tab"
                className="daynight border rounded-2xl form-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="daynight"
              >
                <option value="">입력값 없음</option>
                <option value="아침형">아침형</option>
                <option value="저녁형">저녁형</option>
              </select>
              <h2 className="mt-6 pb-3">&middot; 흡연여부를 선택해주세요</h2>
              <select
                aria-label="Selected tab"
                className="smoke border rounded-2xl form-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="smoke"
              >
                <option value="">입력값 없음</option>
                <option value="비흡연">비흡연</option>
                <option value="흡연">흡연</option>
              </select>
              <h2 className="mt-6 pb-3">
                &middot; 반려동물 유무를 선택해주세요
              </h2>
              <select
                aria-label="Selected tab"
                className="pet border rounded-2xl form-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="pet"
              >
                <option value="">입력값 없음</option>
                <option value="있음">있음</option>
                <option value="없음">없음</option>
              </select>
            </div>

            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                onClick={() => {
                  router.push(`6`);
                }}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
              >
                다음
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {pageId === "6" ? (
        <div className="w-full h-screen h-full flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-full z-30 keycolor h-1 shadow-inner"></div>
          <form className="pt-16 h-full">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              자신을 소개해주세요
            </h1>
            <textarea className="w-full h-2/3 border mt-4 p-4" />

            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                onClick={() => {
                  router.push(`7`);
                }}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
              >
                다음
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {pageId === "7" ? (
        <div className="w-full h-screen h-full flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-full z-30 keycolor h-1 shadow-inner"></div>
          <form className="pt-16 h-full">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              프로필 사진을 등록해주세요
            </h1>
            <div className="w-full flex items-center justify-center pt-16 flex flex-col">
              <div className="p-4 w-48 h-48 bg-gray-100 rounded-2xl"></div>
              <span
                className=" mt-6 keycolor hover:bg-purple-600 py-2 w-28 block rounded-full text-white font-bold text-2xl
              cursor-pointer text-center hover:bg-purple-600"
              >
                등록
              </span>
            </div>

            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                onClick={() => {
                  router.push(`8`);
                }}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
              >
                다음
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      {pageId === "8" ? (
        <div className="w-full h-screen h-full flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-full z-30 bg-gray-100 h-1 shadow-inner"></div>
          <form className="pt-16 ">
            <div className="bg-white w-full py-6 flex flex-col items-center">
              <span className="w-24 h-24 rounded-full block bg-gray-100 flex justify-center items-center">
                image
              </span>
              <span>닉네임</span>
              <div className="w-28 flex justify-between ">
                <span className="bg-gray-100 inline-block px-2 py-1 rounded-xl">
                  남성
                </span>
                <span className="px-2 py-1 ">한국</span>
              </div>
            </div>
            <div className="bg-gray-100 w-full h-4 "></div>
            <div className="mt-4 bg-white">
              <div className=" p-4">
                <strong className="w-20 inline-block">성향</strong>
                <span className="border-2 keyBorder px-2 py-1 rounded-2xl box-content">
                  온화한
                </span>
              </div>
              <div className=" p-4">
                <strong className="w-20 inline-block">관심사</strong>
                <span className=" keycolor px-2 py-1 rounded-2xl">커피</span>
              </div>
              <div className=" p-4">
                <strong className="w-20 inline-block">학과</strong>
                <span>컴퓨터공학과</span>
              </div>
              <div className=" p-4">
                <strong className="w-20 inline-block">생활패턴</strong>
                <span>아침형</span>
              </div>
              <div className=" p-4">
                <strong className="w-20 inline-block">흡연여부</strong>
                <span>비흡연</span>
              </div>
              <div className=" p-4">
                <strong className="w-20 inline-block">반려동물</strong>
                <span>없음</span>
              </div>
              <div className=" p-4">
                <strong className="w-20 inline-block">자기소개</strong>
                <span>없음</span>
              </div>
            </div>
            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                onClick={() => {
                  router.push(`/login/signin`);
                  console.log(router);
                }}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
              >
                완료
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Page;
