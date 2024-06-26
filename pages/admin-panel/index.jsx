import Head from 'next/head'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AdminLayout } from './layout';
import axios from 'axios';

const page = () => {
    const router = useRouter();
    const [FormData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`/api/login`, FormData);
            console.log(res)

            if (res.status == 200) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userEmail', res.data.email);
                setFormData({
                    email: '',
                    password: ''
                });

                router.push('/admin-panel/charity');
            }
        } catch (error) {
            alert("Invalid Credentials!");
        }
    }

    return (
        <div>
            <Head>
                <title>GiftRight | Admin Panel</title>
                <link rel="icon" href={'/giftRightLogo.png'} />
            </Head>

            <div className="h-[100vh] relative">
                <div className="h-full">
                    <div className="bg-yellow-50 h-full">
                        <div className="flex items-center h-full">
                            <div className="w-full">
                                <div className="text-center mb-5">
                                    <div>
                                        <img className="w-[100px] mx-auto" src="/giftRightLogo.png" alt="logo" />
                                    </div>
                                </div>

                                <div className="lg:w-3/12 md:w-1/2 w-11/12 shadow-2xl rounded-xl shadow-yellow-800 p-5 mx-auto bg-white">
                                    <h1 className="font-bold text-center text-md mb-3">Admin Panel</h1>

                                    <form method="post" onSubmit={handleSubmit}>
                                        <div>
                                            <div className="my-3">
                                                <label className="block" htmlFor="email">Email:<span className="text-red-500">*</span></label>
                                                <input onChange={handleChange} className="block w-full rounded-md p-2 border border-gray-200" type="email" name="email" id="email" placeholder="Enter Email Id" required />
                                            </div>

                                            <div className="my-3">
                                                <label className="block" htmlFor="password">Password:<span className="text-red-500">*</span></label>
                                                <div className="relative">
                                                    <input onChange={handleChange} className="block w-full rounded-md p-2 border border-gray-200" type="password" name="password" id="password" placeholder="Enter Password" required />
                                                </div>
                                            </div>

                                            <div className="my-3">
                                                <button type="submit" className="text-black bg-yellow-300 hover:bg-yellow-400 w-full rounded-md py-2 font-bold">Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page