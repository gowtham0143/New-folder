import React from 'react'
import { WebLayout } from '../layout'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from 'react-query'

const productDetails = () => {
    const router = useRouter();
    const { productId } = router.query;

    const fetchProductDetails = async (productId) => {
        const res = await axios.post(`/api/getOneItem`, { productId });
        return res.data;
    };

    const { data, isLoading } = useQuery(['product-details', productId], () => fetchProductDetails(productId), {
        enabled: !!productId, // Ensures the query runs only if charityId is available
    });

    return (
        <div>
            <Head>
                <title>Gift Right | Product Details</title>
            </Head>

            <WebLayout>
                {
                    (isLoading) ? (
                        <div className='p-3 text-center font-semibold text-2xl'>Loading...</div>
                    ) : (
                        <section className='p-7 h-full min-h-screen py-10 px-3'>
                            <div className='mb-5'>
                                <div className='size-[250px] lg:hidden md:hidden block mx-auto rounded-md bg-black'>
                                    {
                                        (data?.validItem.importFlag == 1) ? (
                                            <img className='w-full h-full rounded-md' src={`${data?.validItem.imgName}`} alt="img" />
                                        ) : (
                                            <img className='w-full h-full rounded-md' src={`/product/${data?.validItem.imgName}`} alt="img" />
                                        )
                                    }
                                </div>
                            </div>

                            <div className='flex justify-start space-x-3'>
                                <div>
                                    <div className='lg:size-[500px] md:size-[300px] lg:block md:block hidden mx-auto rounded-md bg-black'>
                                        {
                                            (data?.validItem.importFlag == 1) ? (
                                                <img className='w-full h-full rounded-md' src={`${data?.validItem.imgName}`} alt="img" />
                                            ) : (
                                                <img className='w-full h-full rounded-md' src={`/product/${data?.validItem.imgName}`} alt="img" />
                                            )
                                        }
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <h1 className='text-4xl font-bold capitalize'>{data?.validItem.name}</h1>
                                        <p className='text-xl font-semibold'>{data?.validItem.price}/-</p>

                                        <div className='my-7'>
                                            <p className='font-bold text-xl'>Description</p>
                                            <p>
                                                {data?.validItem.description}
                                            </p>
                                        </div>

                                        <div>
                                            <Link target='blank' href={`${data?.validItem.link}`}>
                                                <button type='button' className='text-sm font-semibold bg-yellow-400 hover:bg-yellow-500 rounded-md py-1 px-4'>Proceed To Gift</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            </WebLayout>
        </div>
    )
}

export default productDetails