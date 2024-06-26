import React from 'react'
import { WebLayout } from '../layout'
import Link from 'next/link'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import axios from 'axios'

const charityDetails = () => {
    const router = useRouter();
    const { charityId } = router.query;

    const fetchCharityDetails = async (charityId) => {
        const res = await axios.post(`/api/getOneCharity`, { charityId });
        console.log(res.data)
        return res.data;
    };

    const { data, isLoading } = useQuery(['charity-details', charityId], () => fetchCharityDetails(charityId), {
        enabled: !!charityId, // Ensures the query runs only if charityId is available
    });

    return (
        <div>
            <Head>
                <title>Gift Right | Charity Details</title>
            </Head>

            <WebLayout>
                {
                    (isLoading) ? (
                        <div className='p-3 text-center font-semibold text-2xl'>Loading...</div>
                    ) : (
                        <section className='p-7 h-full min-h-screen'>
                            <div className='flex justify-start py-10 px-5 items-center border-b border-black space-x-5'>
                                <div>
                                    <div className='size-[150px] rounded-md bg-black'>
                                        <img className='w-full h-full rounded-md' src={`/charity/${data?.validCharity.imgName}`} alt="pic" />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <h1 className='text-4xl capitalize font-bold'>{data?.validCharity.name}</h1>
                                    <p className='font-semibold'>Charity Id: {data?.validCharity._id}</p>
                                    <p className='font-semibold capitalize'>{data?.validCharity.address}</p>

                                    <div className='mt-3'>
                                        <Link target='blank' href={`mailto:${data?.validCharity.email}`}>
                                            <button type='button' className='text-sm font-semibold border border-black rounded-md py-1 px-4'>Contact</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className='py-10 px-7'>
                                <h2 className='text-4xl font-bold'>About</h2>
                                <p className='mt-5 capitalize'>
                                    {data?.validCharity.about}
                                </p>
                            </div>

                            <div className='py-10 px-7'>
                                <h2 className='text-4xl font-bold'>Wishlist</h2>
                                <p className='capitalize'>Children’s hope foundation would be greatful for your kind gesture</p>

                                {
                                    (data?.productList.length === 0) ? (
                                        <div className='text-red-500 text-center py-4 text-2xl font-semibold'>No Products Found!</div>
                                    ) : (
                                        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-2 mt-2'>
                                            {
                                                data?.productList.map((item, index) => (
                                                    <div className='p-3 rounded-md shadow-2xl space-x-3' key={index}>
                                                        <div className='w-full bg-black rounded-md h-[200px] overflow-hidden'>
                                                            {
                                                                (item.importFlag == 1) ? (
                                                                    <img className='w-full rounded-md' src={`${item.imgName}`} alt="icon" />
                                                                ) : (
                                                                    <img className='w-full rounded-md' src={`/product/${item.imgName}`} alt="icon" />
                                                                )
                                                            }
                                                        </div>

                                                        <div className='flex justify-between mt-3'>
                                                            <div>
                                                                <p className='text-xl font-semibold capitalize'>{item.name}</p>
                                                            </div>

                                                            <div>
                                                                <Link href={`/product-details/${item._id}`}>
                                                                    <button type='button' className='py-1 px-2 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black text-sm font-semibold'>Proceed To Gift</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                    )
                }
            </WebLayout>
        </div>
    )
}

export default charityDetails