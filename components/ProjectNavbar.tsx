import { Category } from '@/type'
import React, { FunctionComponent } from 'react'

export const NavItem:FunctionComponent<{value:Category | 'all', handlerFilterCategory:Function; active:string
}> = ({value,handlerFilterCategory, active}) => {

    let className = 'capitalize cursor-pointer hover:text-orange-500'
    if (active === value)
        className += " text-orange-500"

  return (
    <li className={className} onClick={()=>handlerFilterCategory(value)}>
        {value}
    </li>
  )
}

const ProjectNavbar: FunctionComponent<{handlerFilterCategory:Function, active: string}>= (props) => {
  return (
    <div className='flex px-2 py-3 space-x-3 overflow-x-auto list-none'>
       <NavItem value='all' {...props}/> 
       <NavItem value='tableau' {...props}/> 
       <NavItem value='excel' {...props}/> 
       <NavItem value='machine_learning' {...props}/> 
       <NavItem value='deep_learning' {...props}/> 
       <NavItem value='R' {...props}/> 

    </div>
  )
}

export default ProjectNavbar