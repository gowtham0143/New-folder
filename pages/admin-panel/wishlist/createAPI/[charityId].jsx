import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation';
import Head from 'next/head';
import { AdminLayout } from '../../layout';
import axios from 'axios';

const create = () => {
    const router = useRouter();
    const params = useParams();
    const id = params?.charityId;
    const [KeyWord, setKeyWord] = useState('');
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/');
        }
    }, [])

    const handleChange = async (e) => {
        setKeyWord(e.target.value);
        const res = await axios.post(`/api/ebaySearch`, {
            q: e.target.value
        });

        setProduct(res?.data?.itemSummaries ?? []);
    }

    const importProduct = async (productDetails) => {
        const productPayload = {
            name: productDetails.title,
            imgName: productDetails.image.imageUrl,
            price: productDetails.price.value,
            link: productDetails.itemWebUrl,
            charityId: id
        }

        try {
            const res = await axios.post('/api/ebayImport', productPayload);
            console.log(res);

            alert('Item Imported Successfully!');
        } catch (error) {
            alert('Server Down, Please Try Again Later!');
        }
    }

    return (
        <AdminLayout>
            <Head>
                <title>GiftRight | Create Item</title>
            </Head>

            <div className='p-5'>
                <h1 className='text-2xl font-semibold'>Add Item:</h1>

                <div className='my-3'>
                    <input type="text" onChange={handleChange} name='search' id='search' value={KeyWord} className='border border-black rounded-full p-2 shadow-2xl w-full' placeholder='Search...' />
                </div>
            </div>

            <div className='p-5'>
                {
                    (Product.length > 0) ? (
                        Product.map((item, index) => (
                            <div className='flex justify-between my-3' key={index}>
                                <div className='flex justify-start space-x-2'>
                                    <div>
                                        <div className='size-[150px] rounded-xl border border-black'>
                                            <img className='rounded-xl w-full h-full' src={item.image.imageUrl} alt="pic" />
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className='text-2xl font-semibold'>{item.title}</h2>
                                        <p className='text-2xl mt-2'>£ {item.price.value}</p>
                                    </div>
                                </div>

                                <div>
                                    <button type='button' className='bg-green-500 hover:bg-green-600 rounded-md py-1 px-2' onClick={() => { importProduct(item) }}>Import</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='text-red-500 text-2xl py-4 text-center'>No Data Found!</div>
                    )
                }
            </div>
        </AdminLayout>
    )
}

export default create