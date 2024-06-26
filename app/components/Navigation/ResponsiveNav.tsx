'use client';

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

export default function ResponsiveNav() {
    const [showNav, setShowNav] = useState(false)

    const openNavHandler = () => setShowNav(true)

    const closeNavaHandler = () => setShowNav(false)

    return (
        <div>
            <Nav openNav={openNavHandler} />
            <MobileNav showNav={showNav} closeNav={closeNavaHandler} />
        </div>
    )
}
