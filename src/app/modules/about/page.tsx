import {FaMoneyCheck} from "react-icons/fa";
import {GiCommercialAirplane, GiStrong} from "react-icons/gi";
import {FaGaugeHigh} from "react-icons/fa6";

export default function Page(){
    return (
        <main
            className='w-full md:px-8 px-4 py-24 flex items-center justify-center flex-col'
            id='about'>
            <h1 className='text-[#304D30] text-center text-4xl font-bold mb-14'>
                Why E-Tracker?
            </h1>
            <div
                className='flex items-center sm:flex-row flex-col sm:space-x-4 sm:mb-6  justify-center sm:w-[80%] w-full'>
                <div className='sm:w-1/2 w-full mb-4 sm:mb-0 bg-[#EEF0E5] p-6 rounded-lg'>
                    <FaGaugeHigh className='text-3xl mb-4 text-[#304D30]'/>
                    <h2 className='text-[#304D30] text-xl font-bold'>Premium Quality</h2>
                    <p className='text-[#304D30]'>
                        We use only the finest cotton to create our tees, ensuring they are
                        soft, breathable and durable.
                    </p>
                </div>
                <div className='sm:w-1/2 w-full mb-4 sm:mb-0 bg-[#EEF0E5] p-6 rounded-lg'>
                    <GiStrong className='text-3xl mb-4 text-[#304D30]'/>
                    <h2 className='text-[#304D30] text-xl font-bold'>Sustainable</h2>
                    <p className='text-[#304D30]'>
                        We are committed to using sustainable materials and processes to
                        reduce our environmental impact.
                    </p>
                </div>
            </div>

            <div className='flex items-center sm:flex-row flex-col sm:space-x-4 mb-6 justify-center sm:w-[80%] w-full'>
                <div className='sm:w-1/2 w-full mb-4 sm:mb-0 bg-[#EEF0E5] p-6 rounded-lg'>
                    <FaMoneyCheck className='text-3xl mb-4 text-[#304D30]'/>
                    <h2 className='text-[#304D30] text-xl font-bold'>Affordable</h2>
                    <p className='text-[#304D30]'>
                        We believe that everyone should have access to premium quality
                        clothing at affordable prices.
                    </p>
                </div>
                <div className='sm:w-1/2 w-full mb-4 sm:mb-0 bg-[#EEF0E5] p-6 rounded-lg'>
                    <GiCommercialAirplane className='text-3xl mb-4 text-[#304D30]'/>
                    <h2 className='text-[#304D30] text-xl font-bold'>Free Shipping</h2>
                    <p className='text-[#304D30]'>
                        We offer free shipping for orders over $200, so you can shop from
                        anywhere in the world.
                    </p>
                </div>
            </div>
        </main>
    )
}