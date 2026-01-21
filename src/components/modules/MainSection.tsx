import React from 'react'
import CategoryWiseFoodSection from './CategoryWiseFoodSection'
import CartSidebar from './CartSidebar'
import CategoryNavbar from './CategoryNavbar'

function MainSection() {
    return (
        <section>
            <CategoryNavbar />

            <div className="container mx-auto grid grid-cols-12 gap-6 mt-6 relative">
                {/* LEFT */}
                <div className="col-span-12 lg:col-span-8">
                    <CategoryWiseFoodSection />
                </div>

                {/* RIGHT */}
                <div className="col-span-12 lg:col-span-4 ">
                    <CartSidebar />
                </div>
            </div>
        </section>

    )
}

export default MainSection