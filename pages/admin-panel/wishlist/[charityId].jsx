import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { AdminLayout } from '../layout'
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

function wishlist() {
    const router = useRouter();
    const params = useParams();
    const id = params?.charityId;
    const [Item, setItem] = useState([])

    const getItems = async (id) => {
        try {
            const res = await axios.post(`/api/getItems`, {
                charityId: id
            });

            setItem(res.data.products);
        } catch (error) {
            alert("Server Downtime, Please Try Again Later!");
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/');
        }
    }, [])

    useEffect(() => {
        if (id) {
            getItems(id)
        }
    }, [id])

    const handleActivity = async (ItemId) => {
        try {
            const res = await axios.post('/api/changeItemActivity', {
                itemId: ItemId
            });

            getItems(id)
        } catch (error) {
            alert("Failed to change Activity!");
        }
    }

    const handleDelete = async (ItemId) => {
        try {
            const res = await axios.post('/api/deleteItem', {
                itemId: ItemId
            });

            getItems(id)
        } catch (error) {
            alert("Failed to Delete Item!");
        }
    }

    return (
        <AdminLayout>
            <Head>
                <title>Admin | Wishlist</title>
            </Head>

            <div className='p-3'>
                <div className='flex justify-between py-3 border-b-2 border-black'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Health for All:</h1>
                        <p>Items currently wishlisted</p>
                    </div>

                    <div className='space-x-2'>
                        <Link href={`/admin-panel/wishlist/createAPI/${id}`}>
                            <button type='button' className='rounded-md py-1 px-2 bg-green-400 hover:bg-green-500 text-black'>Add Through API</button>
                        </Link>

                        <Link href={`/admin-panel/wishlist/create/${id}`}>
                            <button type='button' className='rounded-md py-1 px-2 bg-green-400 hover:bg-green-500 text-black'>Add</button>
                        </Link>
                    </div>
                </div>

                <div className='mt-3'>
                    <table className='w-full'>
                        <tbody>
                            {
                                Item.map((item, index) => (
                                    <tr className='border-b-2 border-gray-500' key={index}>
                                        <td className='py-5'>
                                            <div className='size-[50px] rounded-md bg-black'>
                                                {
                                                    (item.importFlag == 1) ? (
                                                        <img className='w-full h-full rounded-md' src={`${item.imgName}`} alt="pic" />
                                                    ) : (
                                                        <img className='w-full h-full rounded-md' src={`/product/${item.imgName}`} alt="pic" />
                                                    )
                                                }
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h2 className='text-2xl font-semibold capitalize'>{item.name}</h2>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div>
                                                <h2 className='text-2xl font-semibold'>£ {item.price}/-</h2>
                                            </div>
                                        </td>
                                        <td className='py-5'>
                                            <div className='flex justify-center space-x-3 items-center'>
                                                <div>
                                                    <Link href={`/admin-panel/wishlist/edit/${item._id}`}>
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
                                                <button onClick={() => { handleActivity(item._id) }} type='button' className={`bg-${(item.isActive) ? 'green' : 'red'}-400 hover:bg-${(item.isActive) ? 'green' : 'red'}-500 py-1 px-2 rounded-md text-black`}>
                                                    {(item.isActive == 1) ? 'Active' : 'In-Active'}
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

export default wishlist