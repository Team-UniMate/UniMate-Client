
import { useRouter } from 'next/router'

const HeadCont = ({ leftIcon }) => {
    const router = useRouter()
    const goBack = () => { 
        router.back()
    }

    return (
        <div className='fixed top-0 left-0 w-full z-10 p-4 bg-white '>
            <div className='flex justify-between'>
                <span onClick={ goBack} className='w-6 h-6 bg-cover' style={leftIcon}></span>
         
            </div>
        </div>
    );
};

export default HeadCont;