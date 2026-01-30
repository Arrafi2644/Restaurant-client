import React from 'react'
import CategoryWiseFoodSection from './CategoryWiseFoodSection'
import CartSidebar from './CartSidebar'
import CategoryNavbar from './CategoryNavbar'
import { Separator } from '../ui/separator'

function MainSection() {
    return (
        <section className=''>
            <CategoryNavbar />
            <Separator className='shadow sticky top-62 lg:top-42 z-50' />
            <div className=" container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-12 gap-4 mt-6 relative">
                {/* LEFT */}
                <div className="col-span-12 lg:col-span-8">
                    <CategoryWiseFoodSection />
                </div>

                {/* RIGHT */}
                <div className="hidden lg:block lg:col-span-4">
                    <CartSidebar />
                </div>
            </div>
        </section>

    )
}

export default MainSection