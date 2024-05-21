import React from 'react'
import {CodeBracketIcon, EyeIcon} from "@heroicons/react/24/outline"
import Link from 'next/link'

export default function ProjectCard ({imgUrl, title, description, tech , gitUrl, previewUrl} : {imgUrl:string, title:string, description:string, tech:string, gitUrl:string , previewUrl:string}) {
  return (
    <div className='mt-8 w-1/3 hover:scale-105 transition-transform duration-300 ease-in-out'>
        <div className='h-72 rounded-t-xl relative group'
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-50 group-hover:rounded-t-xl transition-all duration-500'>
            <Link href={previewUrl}
            className='h-12 w-12 mr-4 relative rounded-full border-gray-500 hover:border-white group/link'>
                <EyeIcon className=" text-white cursor-pointer group-hover/link:text-orange-200"/>
            </Link>
            <Link href={gitUrl}
            className='h-12 w-12 relative rounded-full border-gray-500 hover:border-white group/link'>
                <CodeBracketIcon className=" text-white cursor-pointer group-hover/link:text-orange-200"/>
            </Link>
            </div>
        </div>
        <div className='text-black rounded-b-xl mt-0 bg-slate-100 py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-gray-500'>{description}</p><br/>
            <h5 className='text-gray-700 font-semibold'>Tech used: </h5>
            <p className='text-gray-500'>{tech}</p>
        </div>
    </div>
  )
}