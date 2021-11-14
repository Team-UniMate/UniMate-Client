import Image from "next/image";
import { useRouter } from "next/router";
const intro = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex flex-col  relative">
      <div className="flex flex-col items-center mt-48">
        <Image
          src="/images/building.png"
          width={150}
          height={150}
          alt="buildingiMG"
        />
        <strong className="text-3xl pt-10">UniMate</strong>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center  ">
        <button
          onClick={() => {
            router.push("/login");
          }}
          className="w-full py-4 keycolor rounded-3xl font-bold text-white tracking-wide text-center 
          hover:bg-purple-600 transition duration-150 ease-in-out"
        >
          Let's Start
        </button>

        <span className="pt-10 pb-8">Click to continue</span>
      </div>
    </div>
  );
};

export default intro;
