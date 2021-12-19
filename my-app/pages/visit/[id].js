import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import axios from "axios";
import common from "../../data/common";

/*component*/
import HeadCont from "../../component_mo/common/HeadCont";

const Page = () => {
  const router = useRouter();
  const user = useSelector((state) => state.app.applogin);
  const pageId = router.query.id;
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" };
  const [birthDate, setBirthDate] = useState(new Date());
  const [countries, setCountries] = useState([]);
  const [colleges, setcolleges] = useState([]);
  const [majors, setMajors] = useState([]);
  const [personality, setPersonality] = useState([]);
  const [interest, setInterest] = useState([]);
  const [lifeStyle, setLifeStyle] = useState([]);
  const [resultcount, setResultCount] = useState("");
  const [info, setInfo] = useState([]);
  const [inputs, setInputs] = useState({
    user_idx: user.user_idx,
    birth: `${new Date(birthDate).getFullYear()}-${new Date(
      birthDate
    ).getMonth()}-${new Date(birthDate).getDate()}`,
    sex: "",
    country_idx: "",
    college_idx: "",
    major_idx: "",
    personality_select: "",
    interest_select: "",
    life_style_select: "",
    self_introduce: "",
    // profile_images: "",
    // file: "",
  });
  console.log(inputs, "<<<<<<inputs");
  useEffect(async () => {
    await axios
      .get(common.baseURL + "country")
      .then((res) => setCountries(res.data.results))
      .catch((error) => console.log(error));
    await axios
      .get(common.baseURL + "college")
      .then((res) => setcolleges(res.data.results))
      .catch((error) => console.log(error));
    await axios
      .get(common.baseURL + "major")
      .then((res) => setMajors(res.data.results))
      .catch((error) => console.log(error));
    await axios
      .get(common.baseURL + "personality")
      .then((res) => setPersonality(res.data.results))
      .catch((error) => console.log(error));
    await axios
      .get(common.baseURL + "interest")
      .then((res) => setInterest(res.data.results))
      .catch((error) => console.log(error));
    await axios
      .get(common.baseURL + "life_style")
      .then((res) => setLifeStyle(res.data.results))
      .catch((error) => console.log(error));
  }, []);

  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const uploadImage = async (e) => {
    // const files = e.target.files;
    // console.log(files);
    // const formdata = new FormData();
    // formdata.append("FormData", inputs.file);
    // axios
    //   .post(common.baseURL + "profile_img/upload", formdata, {
    //     headers: { "Content-type": "multipart/form-data" },
    //   })
    //   .then((res) => {
    //     console.warn(res);
    //   });
    let formData = new FormData();
    formData.append("file", inputs.file[0]);
    let variables = [
      {
        title: "title",
        content: "content",
      },
    ];
    formData.append(
      "data",
      new Blob([JSON.stringify(variables)], { type: "application/json" })
    );
    axios
      .post(common.baseURL + "profile_img/upload", formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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
  const [l1, setL1] = useState(false);
  const [l2, setL2] = useState(false);
  const [l3, setL3] = useState(false);
  const [l4, setL4] = useState(false);
  const [l5, setL5] = useState(false);
  const [l6, setL6] = useState(false);
  const colorState =
    "block w-24 py-2 border text-center rounded-full  cursor-pointer";
  const noState = "block w-24 py-2 text-center rounded-full ";
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
  const l1Ref = useRef();
  const l2Ref = useRef();
  const l3Ref = useRef();
  const l4Ref = useRef();
  const l5Ref = useRef();
  const l6Ref = useRef();
  let array = [];
  let array2 = [];
  let array3 = [];
  const onClickPersonal = () => {
    if (p1 && p1Ref.current.innerText === "발랄한") {
      array.push(1);
    }
    if (p2 && p2Ref.current.innerText === "활동적") {
      array.push(2);
    }
    if (p3 && p3Ref.current.innerText === "집순이") {
      array.push(3);
    }
    if (p4 && p4Ref.current.innerText === "조용한") {
      array.push(4);
    }
    if (p5 && p5Ref.current.innerText === "온화한") {
      array.push(5);
    }
    if (p6 && p6Ref.current.innerText === "유연한") {
      array.push(6);
    }
    if (p7 && p7Ref.current.innerText === "적극적") {
      array.push(7);
    }
    if (p8 && p8Ref.current.innerText === "내향적") {
      array.push(8);
    }
    if (p9 && p9Ref.current.innerText === "규칙적") {
      array.push(9);
    }
    if (p10 && p10Ref.current.innerText === "사교적인") {
      array.push(10);
    }
    if (p11 && p11Ref.current.innerText === "수다쟁이") {
      array.push(11);
    }
    setInputs({ ...inputs, personality_select: array.join() });
    router.push(`4`);
  };

  const onClickTaste = () => {
    if (a1 && a1Ref.current.innerTex === "영화") {
      array2.push(1);
    }
    if (a2 && a2Ref.current.innerText === "음악") {
      array2.push(2);
    }
    if (a3 && a3Ref.current.innerText === "운동") {
      array2.push(3);
    }
    if (a4 && a4Ref.current.innerText === "산책") {
      array2.push(4);
    }
    if (a5 && a5Ref.current.innerText === "반려동물") {
      array2.push(5);
    }
    if (a6 && a6Ref.current.innerText === "독서") {
      array2.push(6);
    }
    if (a7 && a7Ref.current.innerText === "드라마") {
      array2.push(7);
    }
    if (a8 && a8Ref.current.innerText === "인테리어") {
      array2.push(8);
    }
    if (a9 && a9Ref.current.innerText === "요리") {
      array2.push(9);
    }
    if (a10 && a10Ref.current.innerText === "맛집탐방") {
      array2.push(10);
    }
    if (a11 && a11Ref.current.innerText === "외국어") {
      array2.push(11);
    }
    if (a12 && a12Ref.current.innerText === "글쓰기") {
      array2.push(12);
    }
    if (a13 && a13Ref.current.innerText === "커피") {
      array2.push(13);
    }
    if (a14 && a14Ref.current.innerText === "패션") {
      array2.push(14);
    }
    if (a15 && a15Ref.current.innerText === "건강") {
      array2.push(15);
    }
    if (a16 && a16Ref.current.innerText === "여행") {
      array2.push(16);
    }
    if (a17 && a17Ref.current.innerText === "웹툰") {
      array2.push(17);
    }
    if (a18 && a18Ref.current.innerText === "글쓰기") {
      array2.push(18);
    }
    setInputs({ ...inputs, interest_select: array2.join() });
    router.push(`5`);
  };
  const onClickLifestyle = () => {
    if (l1 && l1Ref.current.innerText === "아침형") {
      array3.push(1);
    }
    if (l2 && l2Ref.current.innerText === "저녁형") {
      array3.push(2);
    }
    if (l3 && l3Ref.current.innerText === "비흡연") {
      array3.push(3);
    }
    if (l4 && l4Ref.current.innerText === "흡연") {
      array3.push(4);
    }
    setInputs({ ...inputs, life_style_select: array3.join() });
    router.push(`6`);
  };
  const submitData = () => {
    axios
      .post(common.baseURL + "profile", inputs)
      .then((res) => {
        console.log(res);
        const getData = async () => {
          await axios
            .get(common.baseURL + "profile?user_idx=" + user.user_idx)
            .then((res) => {
              setInfo(res.data.results);
            })
            .catch((error) => console.log(error));
        };
        getData();
      })
      .catch((error) => console.log(error));
  };
  console.log(inputs);
  console.log(new Object(info[0]).life_style_select, ">>>info");
  //console.log(typeof info[0].interest_select, "<<<<this is info");
  return (
    <>
      {pageId === "1" ? (
        <div className="w-full h-screen flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-1/6 z-30 keycolor h-1 shadow-inner"></div>
          <div className="pt-16">
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
                className="sex border rounded-2xl div-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="sex"
                onChange={onhandleChange}
              >
                <option value="">입력값 없음</option>
                <option value="여성">여성</option>
                <option value="남성">남성</option>
              </select>
              <h2 className="mt-6 pb-3">&middot; 출신 국가를 알려주세요</h2>
              <select
                aria-label="Selected tab"
                className="country_idx border rounded-2xl div-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="country_idx"
                onChange={onhandleChange}
              >
                <option value="">입력값 없음</option>
                {countries.map((el, index) => (
                  <option key={index} value={el.country_idx}>
                    {el.country_idx ? el.country_name : ""}
                  </option>
                ))}
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
          </div>
        </div>
      ) : (
        ""
      )}
      {pageId === "2" ? (
        <div className="w-full h-screen flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-2/6 z-30 keycolor h-1 shadow-inner"></div>
          <div className="pt-16">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              소속대학과 학과를 알려주세요
            </h1>
            <div className="mt-14 text-base">
              <h2 className="pb-3">&middot; 소속대학을 선택해주세요</h2>
              <select
                aria-label="Selected tab"
                className="college_idx border rounded-2xl div-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="college_idx"
                onChange={onhandleChange}
              >
                <option value="">입력값 없음</option>
                {colleges.map((el, index) => (
                  <option key={index} value={el.college_idx}>
                    {el.college_idx ? el.college_name : ""}
                  </option>
                ))}
              </select>
              <h2 className="mt-6 pb-3">&middot; 학과를 알려주세요</h2>
              <select
                aria-label="Selected tab"
                className="major_name border rounded-2xl div-select w-full py-2 px-3 rounded appearance-none bg-transparent"
                name="major_idx"
                onChange={onhandleChange}
              >
                <option value="">입력값 없음</option>
                {majors.map((el, index) => (
                  <option key={index} value={el.major_idx}>
                    {el.major_idx ? el.major_name : ""}
                  </option>
                ))}
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
          </div>
        </div>
      ) : (
        ""
      )}
      {pageId === "3" ? (
        <div className="w-full h-screen flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-3/6 z-30 keycolor h-1 shadow-inner"></div>
          <div className="pt-16">
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
              <span className={noState}></span>
            </div>
            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                onClick={onClickPersonal}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
              >
                다음
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {pageId === "4" ? (
        <div className="w-full h-screen flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-4/6 z-30 keycolor h-1 shadow-inner"></div>
          <div className="pt-16">
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
          </div>
        </div>
      ) : (
        ""
      )}
      {pageId === "5" ? (
        <div className="w-full h-screen flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-5/6 z-30 keycolor h-1 shadow-inner"></div>
          <div className="pt-16">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              라이프스타일을 알려주세요
            </h1>
            <div className="mt-14 text-base flex items-center">
              <strong className="w-1/3">생활패턴</strong>
              <div className="w-2/3 flex flex-wrap justify-between gap-x-8 gap-y-4">
                <span
                  ref={l1Ref}
                  onClick={() => {
                    setL1(!l1);
                  }}
                  className={l1 ? trueState : falseState}
                >
                  아침형
                </span>
                <span
                  ref={l2Ref}
                  onClick={() => {
                    setL2(!l2);
                  }}
                  className={l2 ? trueState : falseState}
                >
                  저녁형
                </span>
              </div>
            </div>
            <div className="mt-14 text-base flex items-center">
              <strong className="w-1/3">흡연여부</strong>
              <div className="w-2/3 flex flex-wrap justify-between gap-x-8 gap-y-4">
                <span
                  ref={l3Ref}
                  onClick={() => {
                    setL3(!l3);
                  }}
                  className={l3 ? trueState : falseState}
                >
                  비흡연
                </span>
                <span
                  ref={l4Ref}
                  onClick={() => {
                    setL4(!l4);
                  }}
                  className={l4 ? trueState : falseState}
                >
                  흡연
                </span>
              </div>
            </div>

            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                onClick={onClickLifestyle}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
              >
                다음
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {pageId === "6" ? (
        <div className="w-full h-screen h-full flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-full z-30 keycolor h-1 shadow-inner"></div>
          <div className="pt-16 h-full">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              자신을 소개해주세요
            </h1>
            <textarea
              className="w-full h-2/3 border mt-4 p-4"
              name="self_introduce"
              value={inputs.self_introduce}
              onChange={onhandleChange}
            />
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
          </div>
        </div>
      ) : (
        ""
      )}
      {pageId === "7" ? (
        <div className="w-full h-screen h-full flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-full z-30 keycolor h-1 shadow-inner"></div>
          <div className="pt-16 h-full">
            <h1 className=" pt-6 text-2xl font-bold text-center">
              프로필 사진을 등록해주세요
            </h1>
            <div className="w-full flex items-center justify-center pt-16 flex flex-col">
              <input
                type="file"
                name="file"
                placeholder="upload image"
                onChange={onhandleChange}
                className="p-4 w-48 h-48 bg-gray-100 rounded-2xl"
              ></input>
              <span
                className=" mt-6 keycolor hover:bg-purple-600 py-2 w-28 block rounded-full text-white font-bold text-2xl
              cursor-pointer text-center hover:bg-purple-600"
                onClick={uploadImage}
              >
                등록
              </span>
            </div>
            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                onClick={() => {
                  submitData();
                  router.push(`8`);
                }}
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
              >
                다음
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {pageId === "8" ? (
        <div className="w-full h-screen h-full flex flex-col">
          <HeadCont leftIcon={prevIcon} />
          <div className="fixed top-14 left-0 w-full z-20 bg-gray-200 h-1 shadow-inner"></div>
          <div className="fixed top-14 left-0 w-full z-30 bg-gray-100 h-1 shadow-inner"></div>
          <div className="pt-16 ">
            <div className="bg-white w-full py-6 flex flex-col items-center">
              <span className="w-24 h-24 rounded-full block bg-gray-100 flex justify-center items-center">
                image
              </span>
              <span>{new Object(info[0]).user_name}</span>
              <div className="w-60 flex justify-center">
                <span className="bg-gray-100 inline-block px-2 py-1 rounded-xl mx-1">
                  {new Object(info[0]).sex}
                </span>
                <span className="mx-1 px-2 py-1 border rounded-full">
                  {new Object(info[0]).country_name}
                </span>
              </div>
            </div>
            <div className="bg-gray-100 w-full h-4 "></div>
            <div className="mt-4 bg-white">
              <div className=" p-2 flex">
                <strong className="w-2/6 inline-block">성향</strong>
                <div className="w-4/6">
                  {new Object(info[0]).personality_select}
                </div>
              </div>
              <div className=" p-2 flex">
                <strong className="w-2/6 inline-block">관심사</strong>
                <div className="w-4/6">
                  {new Object(info[0]).interest_select}
                </div>
              </div>
              <div className=" p-2 flex">
                <strong className="w-2/6 inline-block">학과</strong>
                <div className="w-4/6">{new Object(info[0]).major_name}</div>
              </div>
              <div className=" p-2 flex">
                <strong className="w-2/6 inline-block">
                  생활패턴/흡연여부
                </strong>
                <div className="w-4/6">
                  {new Object(info[0]).life_style_select}
                </div>
              </div>
              <div className=" p-2 flex">
                <strong className="w-2/6 inline-block">자기소개</strong>
                <div className="w-4/6">
                  {new Object(info[0]).self_introduce}
                </div>
              </div>
            </div>
            <div className="fixed bottom-4 left-0 w-full px-4">
              <button
                className="keycolor w-full text-white py-4 rounded-2xl font-bold hover:bg-purple-600"
                onClick={() => {
                  router.push("/main");
                }}
              >
                완료
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Page;
