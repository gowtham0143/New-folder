import React from 'react'
import { WebLayout } from './layout'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from 'react-query'

export default function charity() {
    const fetchCharityList = async () => {
        const res = await axios.get(`/api/getCharity`);
        return res.data;
    };

    const { data, isLoading } = useQuery('charity-list', fetchCharityList);

    return (
        <div>
            <Head>
                <title>Gift Right | Charity Listing</title>
            </Head>

            <WebLayout>
                <section className='p-7 h-full min-h-screen'>
                    <div className='mb-10'>
                        <input type="text" name='search' id='search' className='rounded-full p-2 border border-white shadow-2xl w-full' placeholder='Search...' />
                    </div>

                    {
                        (isLoading) ? (
                            <div className='p-3 text-center font-semibold text-2xl'>Loading...</div>
                        ) : (
                            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2'>
                                {
                                    data?.charitys.map((item, index) => (
                                        <div className='px-3 py-7 rounded-md shadow-2xl flex justify-start space-x-3' key={index}>
                                            <div className='flex items-center'>
                                                <div className='size-[80px] shadow-2xl p-5 rounded-full flex items-center justify-center'>
                                                    <img className='w-full h-full rounded-md' src={`/charity/${item.imgName}`} alt="icon" />
                                                </div>
                                            </div>

                                            <div>
                                                <div className='mb-2'>
                                                    <h2 className='text-xl font-semibold capitalize'>{item.name}</h2>
                                                </div>

                                                <Link href={`/charity-details/${item._id}`}>
                                                    <button type='button' className='py-1 px-2 bg-yellow-400 hover:bg-yellow-500 rounded-md text-black text-sm font-semibold'>View</button>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </section>
            </WebLayout>
        </div>
    )
}
