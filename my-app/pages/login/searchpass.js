
/*component*/
import HeadCont from '../../component_mo/common/HeadCont';

const searchpass = () => {
  const prevIcon = { background: "url('/images/prev.svg') no-repeat center" }
  return (
    <div className="px-4 items-center relative">
      <HeadCont leftIcon={prevIcon} />
      <div className="mt-14 w-full">
        <h1 className="text-2xl font-bold">비밀번호 찾기</h1>
        <h2 className="mt-14 font-bold">등록했던 이메일로 비밀번호를 보내드립니다.</h2>
        <form className="mt-8">
          <div className="w-full py-4 border rounded-3xl tracking-wide ">
            <label htmlFor="ID" className="w-1/5 text-sm inline-block px-4">ID</label>
            <input id="ID" className="w-4/5 rounded-3xl"/>
          </div>
          <div className="w-full py-4 border rounded-3xl tracking-wide mt-6">
            <label htmlFor="MAIL" className="w-1/5 text-sm inline-block px-4">Mail</label>
            <input id="MAIL" className="w-4/5 rounded-3xl"/>
          </div>
          <button className="w-full py-4 keycolor text-white rounded-3xl font-bold tracking-wide text-center mt-8">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default searchpass