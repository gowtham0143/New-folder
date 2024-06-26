import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <div>
            <Head>
                <link rel="icon" href={'/giftRightLogo.png'} />
            </Head>

            <section className="bg-white flex justify-between items-center p-5">
                <div>
                    <div className='size-[60px]'>
                        <Link href={'/'}>
                            <img className='w-full' src="/giftRightLogo.png" alt="logo" />
                        </Link>
                    </div>
                </div>

                <div>
                    <div className="flex justify-end space-x-5 text-sm font-semibold">
                        <div>
                            <Link href={'/'}>Home</Link>
                        </div>
                        <div>
                            <Link href={'/charity-listings'}>Charities</Link>
                        </div>
                        <div>
                            <Link href={'/about-us'}>About Us</Link>
                        </div>
                        <div>
                            <Link href={'/faq'}>FAQ</Link>
                        </div>
                        <div>
                            <Link href={'/contact'}>Contact</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
