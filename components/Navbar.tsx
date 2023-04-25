import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent,useState, useEffect } from 'react'

const NavItem:FunctionComponent<{
  activeItem:string
  setActiveItem:Function
  name:string
  route:string
}> = ({activeItem,name,route,setActiveItem}) => {

  return (
    activeItem !== name ? (
      <Link href={route}>
        <span>
          <span onClick={() => setActiveItem(name)} className='hover:text-orange-500'>
            {name}
          </span>
        </span>
      </Link>
    ):null
  )
}

const Navbar = () => {

const [activeItem,setActiveItem] = useState<string>('')

const { pathname } = useRouter()

useEffect(() => {
  if (pathname === '/') setActiveItem('About')
  if (pathname === '/projects') setActiveItem('Projects')
  if (pathname === '/experience') setActiveItem('Experience')
  if (pathname === '/resume') setActiveItem('Resume')
}, [])

  return (
    <div className='flex justify-between py-3 my-3 px-7'>
      <span className='text-xl font-bold text-orange-500 border-b-4 border-orange-500 md:text-2xl'>
        {activeItem}
      </span>
      <div className='flex space-x-5 font-bold text-md text-custom_gray dark:text-white'>

        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/'/> 
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects'/> 
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Experience' route='/experience'/> 
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume'/> 

      </div>
    </div>
  )
}

export default Navbar
