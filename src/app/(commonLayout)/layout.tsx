import AnnouncementBar from '@/components/modules/AnnouncementBar'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <AnnouncementBar />
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    )
}
