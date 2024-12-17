import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

export default ({loading,setLoading}) => {

    const [ products , setProducts ] = useState([]);
    useEffect(() => {
        if(!products.length){
            fetechProducts()
        }
    }, [products])

    async  function fetechProducts () {
        setLoading(true)
        const { data } = await  axios.get("https://fakestoreapi.com/products?limit=3")
        setProducts(data);
        setLoading(false)
    }


    return loading ? <Loader /> :<div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
            <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
                <div>
                    <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">International Ecommerce, We Are Here</p>
                </div>
                <div className="mt-4 lg:w-4/5 xl:w-3/5">
                    <p className="text-base leading-6 text-gray-600 dark:text-white">Same tech for less
                        Save by shopping on Shop.</p>
                </div>
                <div className="mt-16 w-full">
                    <Link  to="/products">
                        <button className="px-4 bg-green-400 rounded-md dark:bg-white dark:text-gray-900 dark:hover:scale-105  flex justify-between items-center w-full lg:w-72 h-14 text-white focus:ring-2 outline-none  focus:ring-offset-2  dark:hover:bg-gray-100">
                            <p className="text-xl font-medium leading-5 bg-green-400 py-3 px-5 text-white rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">See More</p>
                            <svg className="dark:text-gray-900" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>

                    </Link>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                <div className="">
                    <img className="hidden lg:block" src="https://m.media-amazon.com/images/I/71x7+zZCNBL._SL1500_.jpg" alt="sofa" />
                    <img className="w-80 sm:w-auto lg:hidden" src="https://m.media-amazon.com/images/I/71x7+zZCNBL._SL1500_.jpg" alt="sofa" />
                </div>
                <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                    <div>
                        <img className="hidden lg:block" src="https://media.istockphoto.com/id/860853894/photo/red-headphones-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=qNtAs69Yalkq__YfZp2gu8w2mEcw0ssTnY6L-4mFWRI=" alt="chairs" />
                        <img className="w-80 sm:w-auto lg:hidden" src="https://media.istockphoto.com/id/860853894/photo/red-headphones-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=qNtAs69Yalkq__YfZp2gu8w2mEcw0ssTnY6L-4mFWRI=" alt="chairs" />
                    </div>
                    <div>
                        <img className="hidden lg:block" src="data:image/jpeg;base64,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" alt="chairs" />
                        <img className="w-80 sm:w-auto lg:hidden" src="data:image/jpeg;base64,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" alt="chairs" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}