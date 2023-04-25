import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>

      <div className='grid grid-cols-12 gap-6 lg:px-48 my-14 md:px-32 sm:px-20'>

      <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-3xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>

        <Sidebar/>

      </div>

      <div className='flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-3xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>

      <Navbar />

      <Component {...pageProps} />

      </div>

    </div>
    </ThemeProvider>

  )
}
