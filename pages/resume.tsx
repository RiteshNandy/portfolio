import Bar from '@/components/Bar'
import { languages, tools } from '@/data'
import React from 'react'

const resume = () => {
  return (
    <div className='px-6 py-2'>

      {/*Education*/}

      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>
            Education
          </h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>
              Postgraduate Diploma
            </h5>
            <p className='font-semibold'>
              Humber College - Toronto, Canada
            </p>
            <p className='my-3'>
              Cumulative GPA of 90% and recipient of Dean’s Honor List.
            </p>
            <p className='my-3'>
              Key courses: MSSQL DBA, Machine Learning, Oracle Data Warehouse, Tableau, Big Data, Python, R languages
            </p>
          </div>
          

        </div>


        <div>
          <h5 className='my-3 text-2xl font-bold text-white dark:text-black'>
          Education
          </h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>
              Bachelors of Engineering
            </h5>
            <p className='font-semibold'>
              Sir MVIT - Bangalore, India
            </p>
            <p className='my-3'>
              Cumulative GPA of 90% and recipient of Dean’s Honor List.
            </p>
            <p className='my-3'>
              Key courses: MSSQL DBA, Machine Learning, Oracle Data Warehouse, Tableau, Big Data, Python, R languages
            </p>
          </div>
          

        </div>
      </div>


      {/*Tools and Skills*/}

      <div className='grid gap-6 md:grid-cols-2'>

        <div>
          <h5 className="my-3 text-2xl font-bold">
            Tech Skills
          </h5>
          <div className="my-2">
            {
              languages.map(Language=><Bar data={Language} key={Language.name}/>)
            }
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">
            Soft Skills
          </h5>
          <div className="my-2">
            {
              tools.map(Tool=><Bar data={Tool} key={Tool.name}/>)
            }
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default resume