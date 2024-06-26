import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <div>
            <section>
                <div className="p-5 bg-white">
                    <div className="size-[100px] mx-auto rounded-md mb-4">
                        <img src="/giftRightLogo.png" alt="logo" className="w-full h-full rounded-md" />
                    </div>

                    <div className="lg:flex md:flex block justify-center lg:space-y-0 md:space-y-0 space-y-3 space-x-5 text-sm font-semibold text-center">
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

                    <div className="my-3">
                        <h2 className="text-center text-xl font-bold mb-3">Follow Us:</h2>

                        <div className="flex justify-center space-x-10">
                            <div>
                                <Link href={'#'}>
                                    <img src="/media/tiktokLogo.png" alt="icon" />
                                </Link>
                            </div>

                            <div>
                                <Link href={'#'}>
                                    <img src="/media/fbLogo.png" alt="icon" />
                                </Link>
                            </div>

                            <div>
                                <Link href={'#'}>
                                    <img src="/media/whatsappLogo.png" alt="icon" />
                                </Link>
                            </div>

                            <div>
                                <Link href={'#'}>
                                    <img src="/media/instaLogo.png" alt="icon" />
                                </Link>
                            </div>

                            <div>
                                <Link href={'#'}>
                                    <img src="/media/linkedinLogo.png" alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center font-semibold text-sm">
                        Gift Right© 2024 All rights reserved.
                    </div>
                </div>
            </section>
        </div>
    )
}
