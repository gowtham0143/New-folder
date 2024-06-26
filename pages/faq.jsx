import React from 'react'
import { WebLayout } from './layout'

const faq = () => {
    return (
        <>
            <WebLayout>
                <div className='p-5'>
                    <h1 className='text-center font-bold text-4xl mb-5'>FAQ</h1>

                    <div className='space-y-5 text-center'>
                        <p>
                            <b>What is GiftRight?</b> A: GiftRight is an online platform designed to improve the
                            donation process by connecting donors with charities. Each charity has a profile with a
                            Wishlist of needed items, allowing donors to purchase specific items that go directly
                            to the charity.
                        </p>

                        <p>
                            <b>How does GiftRight work?</b> A: Simply visit our website, choose a charity, browse
                            their Wishlist, select an item you wish to donate, and complete the purchase. During the
                            purchase process, you will add the address of the charity, ensuring the item is sent
                            directly to them.
                        </p>

                        <div>
                            <h2 className='text-2xl font-bold'>For Donors</h2>
                        </div>

                        <p>
                            <b>Who can use GiftRight?</b> A: GiftRight is for anyone looking to make a direct impact
                            by donating specific items to charities.
                        </p>

                        <p>
                            <b>How do I find a charity to support?</b> A: You can browse through our list of registered
                            charities or use the search feature to find a specific cause or organisation.
                        </p>

                        <p>
                            <b>What types of items can I donate?</b> A: Each charity has a unique Wishlist that can include
                            a variety of items such as food, clothing, educational supplies, medical equipment, and more.
                            These items are authorised by the charity as items needed by them urgently.
                        </p>

                        <p>
                            <b>How do I know the charity receives the item I purchased?</b> A: During the purchase process,
                            you will add the address of the charity, ensuring the item is sent directly to them. You will
                            receive a confirmation once the item has been dispatched and when it has been received by the
                            charity. It is recommended that you add a note for the charity to contact you for the
                            confirmation and a thank you.
                        </p>

                        <div>
                            <h2 className='text-2xl font-bold'>For Charities</h2>
                        </div>

                        <p>
                            <b>How can my charity join GiftRight?</b> A: Charities interested in joining GiftRight will
                            need to contact our team to get onboarded. Please reach out to us via the "Contact Us" link
                            on our website. We will guide you through the registration process and help you create your
                            profile and Wishlist.
                        </p>

                        <p>
                            <b>Is there a cost for charities to use GiftRight?</b> A: No, it is free for charities to create a
                            profile and list their needed items on GiftRight.
                        </p>

                        <p>
                            <b>What types of items can we request on our Wishlist?</b> A: Charities can request a wide range of items
                            that are essential to their operations, including items from Amazon and eBay.
                        </p>

                        <div>
                            <h2 className='text-2xl font-bold'>Security and Privacy</h2>
                        </div>

                        <p>
                            <b>Is my personal information secure on GiftRight?</b> A: Yes, we take your privacy and
                            security seriously. All personal and payment information is encrypted and protected
                            with industry-standard security measures.
                        </p>

                        <p>
                            <b>Will my personal information be shared with charities?</b> A: No, your personal
                            information will not be shared with charities or any third parties without your consent.
                            Only necessary information to complete the donation process will be shared securely.
                        </p>

                        <p>
                            <b>How can I contact GiftRight for support?</b> A: You can reach our support team by
                            clicking on the "Contact Us" link on our website. We are here to assist you with any
                            questions or issues you may have.
                        </p>

                        <p>
                            <b>What should I do if I encounter an issue with my donation?</b> A: If you have any problems
                            or concerns regarding your donation, please contact our support team immediately. We will
                            work to resolve any issues within 24 hours.
                        </p>
                    </div>
                </div>
            </WebLayout>
        </>
    )
}

export default faq