import { ISkill } from '@/type'
import React, { FunctionComponent } from 'react'

const Bar:FunctionComponent<{
    data:ISkill
}> = ({ data: {Icon,level,name} }) => {
  return (
    <div className='my-2 text-white rounded-full bg-slate-300'>
        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"
        style={{ width: level}}>
            <Icon className='mr-3 '/>
            {name}
        </div>
    </div>
  )
}

export default Bar