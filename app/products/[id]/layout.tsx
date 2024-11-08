import React from 'react'

export default function ProductLayout({children} : {children: React.ReactNode}) {
  return (
    <div>
        {children}
        <div>
            <h2>Featured product section</h2>
        </div>
    </div>
  )
}