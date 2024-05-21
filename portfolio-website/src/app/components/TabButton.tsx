import React from 'react'

export default function TabButton ({active, selectTab, children} : {active:any, selectTab:any, children:any}) {
    const buttonClasses = active ? 'text-black border-b-4 border-orange-500' : 'text-gray-500'
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-black hover:scale-105 transition-transform duration-300 ease-in-out ${buttonClasses}`}>
            {children}
            </p></button>
    )
}