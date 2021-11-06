import Link from "next/link"
const intro = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative">
      <div className="w-40 h-40 bg-red-100 flex justify-center items-center text-white">IMAGE</div>
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center">
        <Link href="/signin"
        >
          <a className="w-full py-4 keycolor rounded-3xl font-bold text-white tracking-wide text-center ">
          Let's Start
          </a>
       </Link>
        <span className="pt-10">Click to continue</span>
        </div>
    </div>
  )
}

export default intro
