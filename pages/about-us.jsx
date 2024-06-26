import React from 'react'
import { WebLayout } from './layout'

const aboutUs = () => {
    return (
        <>
            <WebLayout>
                <div className='p-5'>
                    <h1 className='text-center font-bold text-4xl mb-5'>About Us</h1>

                    <div className='space-y-8 text-center'>
                        <div>
                            <h2 className='font-bold text-2xl'>Welcome to GiftRight!</h2>
                            <p>
                                At GiftRight, we are dedicated to transforming the donation process to make it more efficient,
                                transparent, and impactful. Our platform connects generous donors with deserving charities,
                                providing a streamlined way to support specific needs and make a direct difference.
                            </p>
                        </div>

                        <div>
                            <h2 className='font-bold text-2xl'>Why GiftRight?</h2>
                            <p>
                                <b>Transparency:</b> Our platform ensures that donors know exactly where their donations are
                                going and how they are being used.
                            </p>
                            <p>
                                <b>Efficiency:</b> By providing a Wishlist of specific items, charities receive exactly what they need
                                without the hassle of sorting through unsuitable donations.
                            </p>
                            <p>
                                <b>Impact:</b> Every donation through GiftRight is tailored to meet the specific needs of each charity, making
                                your contribution more meaningful and effective.
                            </p>
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold'>Impact:</h2>
                            <p>
                                To inspire the art of giving
                            </p>
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold'>Our Mission</h2>
                            <p>
                                Our Mission is to provide an innovative and efficient online gifting platform that
                                simplifies the process of gift-giving while promoting sustainability and charitable
                                giving. We strive to connect users with a wide range of products and services, including
                                local vendors and professionals, and create opportunities for easy and meaningful gifting
                                to loved ones and to causes that matter to our community
                            </p>
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold'>Our Values</h2>
                            <p>
                                Utility, Viability, Generosity, Sustainability, helping local vendors and upcoming professionals
                            </p>
                        </div>

                        <div>
                            <h2>How It Works</h2>
                        </div>

                        <div>
                            <h2>For Donors:</h2>
                            <ul>
                                <li>
                                    <b>Browse Charities:</b> Explore our comprehensive list of registered charities or
                                    use our search feature to find causes that resonate with you.
                                </li>

                                <li>
                                    <b>View Wishlists:</b> Each charity has a Wishlist of items they need,
                                    ranging from food and clothing to medical supplies and educational materials.
                                </li>

                                <li>
                                    <b>Select and Donate:</b> Choose the items you wish to donate, add the charity's address during the purchase process, and complete the transaction. The items will be sent directly to the charity, ensuring they receive exactly what they need.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold'>For Charities:</h2>
                            <ul>
                                <li>
                                    <b>Contact Us:</b> Charities interested in joining GiftRight can reach out to our team
                                    via the "Contact Us" link on our website to get onboarded.
                                </li>

                                <li>
                                    <b>Create a Profile:</b> Once onboarded, create a detailed profile highlighting your
                                    mission, goals, and the impact you aim to achieve.
                                </li>

                                <li>
                                    <b>Build Your Wishlist:</b> List the items your charity needs most, ensuring donors can
                                    see and choose exactly how they can help.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold'>Join Us</h2>
                            <p>
                                Whether you are a donor looking to make a meaningful impact or a charity in need of
                                support, GiftRight is here to help. Together, we can create a more connected and
                                compassionate world, one gift at a time.
                                <br />
                                Thank you for choosing GiftRight. Let's make a difference together.
                            </p>
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold'>Contact Us</h2>
                            <p>
                                For more information or to get started, please reach out to us via the "Contact Us"
                                link on our website. We look forward to working with you!
                            </p>
                        </div>

                        <div>
                            <h2 className='text-2xl font-bold'>The GiftRight Team</h2>
                        </div>
                    </div>
                </div>
            </WebLayout>
        </>
    )
}

export default aboutUs