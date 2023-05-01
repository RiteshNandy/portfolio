import React from 'react'
import {services} from '@/data'
import ServiceCard from '@/components/ServiceCard'

const index = () => {
  return (
    <div className='flex flex-col flex-grow px-6 py-1'>
      <h5 className='my-3 font-medium'>I am a highly motivated and efficient Business Analyst with 5+ years of experience in cloud and system analysis. My expertise lies in data analysis, data modeling, and data visualization, using tools such as SQL, Hadoop, Python, R, Advanced Excel, and Tableau. With a solid foundation in data engineering, I have worked on projects involving data cleaning, transformation, and validation using ETL processes and data pipeline development. I am a proactive learner, a team player, and am seeking a suitable data analyst position to continue growing my skills and contribute to creating insightful business outcomes.     
      </h5>

      <div className='flex-grow p-4 mt-3 mb-3 overflow-y-scroll bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl dark:bg-dark-300' 
        style={{marginLeft: '-1rem', marginRight: '-1rem', height: '25vh'}}>

        <h6 className='my-3 text-xl font-bold tracking-wide dark:text-dark-300' >Services offered</h6>

        <div className='grid gap-6 lg:grid-cols-2'>
          {services.map((service, index) => (
            <div className='p-4 bg-gray-200 rounded-lg dark:text-dark-300 lg:col-span-1 '>
              <ServiceCard key={index} service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default index
