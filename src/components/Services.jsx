import { FaMoneyBillAlt } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

const Services = () => {

  return (

<>

<div data-aos="fade-down" className='text-center w-10/12 mx-auto my-[50px]'>
        <h1 className='text-3xl font-extrabold mb-3'>Services We Offer</h1>
        <p>We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open. Traveling - it leaves you speechless, then turns you into a storyteller.</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto my-[50px] md:gap-10 lg:gap-10'>

        <div className='p-5 shadow-2xl h-[150px] hover:border-2 hover:border-b-blue-500 mb-10'>
        <FaMoneyBillAlt className='text-blue-600 text-4xl mb-2' />
        <h1 className='text-xl font-medium'>Discount</h1>
        <p>We give discounts to our regular customers</p>
        </div>

        <div className='p-5 shadow-2xl h-[150px] hover:border-2 hover:border-b-blue-500 mb-10'>
        <GiProfit className='text-blue-600 text-4xl mb-2' />
        <h1 className='text-xl font-medium'>Customer Service</h1>
        <p>We always try to give best customer services.</p>
        </div>

        <div className='p-5 shadow-2xl h-[150px] hover:border-2 hover:border-b-blue-500 mb-10'>
        <FaBuilding className='text-blue-600 text-4xl mb-2' />
        <h1 className='text-xl font-medium'>Luxurios</h1>
        <p>We provide luxurious ready made tours & travels.</p>
        </div>

        <div className='p-5 shadow-2xl h-[150px] hover:border-2 hover:border-b-blue-500'>
        <CgNotes className='text-blue-600 text-4xl mb-2' />
        <h1 className='text-xl font-medium'>Policy</h1>
        <p>Easy going policy for our customers</p>
        </div>

    </div>

    </>
  )
}

export default Services
