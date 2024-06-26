import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { AdminLayout } from '../layout'
import { useRouter } from 'next/navigation'
import axios from 'axios'

function dashboard() {
    const router = useRouter();
    const [Charity, setCharity] = useState([])

    const getCharity = async () => {
        try {
            const res = await axios.post(`/api/getCharity`, FormData);
            setCharity(res.data.charitys);
        } catch (error) {
            alert("Server Downtime, Please Try Again Later!");
        }
    }

    useEffect(() => {
        getCharity();
        if (!localStorage.getItem('token')) {
            router.push('/');
        }
    }, [])

    const handleActivity = async (id) => {
        try {
            const res = await axios.post('/api/changeCharityActivity', {
                charityId: id
            });

            getCharity()
        } catch (error) {
            alert("Failed to change Activity!");
        }
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.post('/api/deleteCharity', {
                charityId: id
            });

            getCharity()
        } catch (error) {
            alert("Failed to Delete Charity!");
        }
    }

    const handleHighlight = async (id) => {
        try {
            const res = await axios.post('/api/highlightCharity', {
                charityId: id
            });

            getCharity()
        } catch (error) {
            alert("Failed to change Highlight!");
        }
    }

    return (
        <AdminLayout>
            <Head>
                <title>Admin | Charity Listing</title>
            </Head>

            <div className='p-3'>
                <div className='flex justify-between py-3 border-b-2 border-black'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Charity Listing:</h1>
                    </div>

                    <div>
                        <Link href={'/admin-panel/charity/create'}>
                            <button type='button' className='rounded-md py-1 px-2 bg-green-400 hover:bg-green-500 text-black'>Add</button>
                        </Link>
                    </div>
                </div>

                <div className='mt-3'>
                    <table className='w-full'>
                        <tbody>
                            {
                                Charity.map((item, index) => (
                                    <tr className='border-b-2 border-gray-500' key={index}>
                                        <td className='py-5'>
                                            <div className='size-[70px] rounded-md bg-black'>
                                                <img className='w-full h-full rounded-md' src={`/charity/${item.imgName}`} alt="pic" />
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h2 className='text-2xl font-semibold capitalize'>{item.name}</h2>
                                                <p><b>Charity Id:</b> {item._id}</p>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='text-center'>
                                                <input type="checkbox" name='highLight' id='highLight' onChange={() => { handleHighlight(item._id) }} checked={item.highlighted === 1} />
                                                <p className='mt-1'>Highlight Charity</p>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='flex justify-center space-x-3 items-center'>
                                                <div>
                                                    <Link href={`/admin-panel/wishlist/${item._id}`}>
                                                        <button type='button' className='bg-yellow-400 hover:bg-yellow-500 py-1 px-2 rounded-md text-black'>Item Wishlist</button>
                                                    </Link>
                                                </div>

                                                <div>
                                                    <Link href={`/admin-panel/charity/edit/${item._id}`}>
                                                        <button type='button'>
                                                            <img src="/icons/editIcon.png" alt="icon" />
                                                        </button>
                                                    </Link>
                                                </div>

                                                <div>
                                                    <button type='button' onClick={() => { handleDelete(item._id) }}>
                                                        <img src="/icons/deleteIcon.png" alt="icon" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <button onClick={() => { handleActivity(item._id) }} type='button' className={`bg-${(item.isActive == 1) ? 'green' : 'red'}-400 hover:bg-${(item.isActive == 1) ? 'green' : 'red'}-500 py-1 px-2 rounded-md text-black`}>
                                                    {(item.isActive) ? 'Active' : 'In-Active'}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
}

export default dashboard