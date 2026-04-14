/**
 * @version 0.0.1
 * Updated On : 2026-04-14
 * Hello World page with a counter and increment button.
 */

import { useState } from 'react'

const HelloWorld = () => {
  //-------------- State & Variables --------------//
  const [count, setCount] = useState(0)

  //-------------- Other Methods --------------//
  const incrementCount = () => setCount(count + 1)

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-violet-50 to-purple-100 px-4 dark:from-gray-900 dark:to-violet-950'>
      <div className='w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-violet-100 dark:bg-gray-800 dark:ring-violet-900'>
        <div className='mb-6 flex justify-center'>
          <span className='inline-flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-3xl dark:bg-violet-900'>
            👋 hi Asif
          </span>
        </div>
        <h1 className='mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Hello, World!
        </h1>
        <p className='text-base text-gray-500 dark:text-gray-400'>
          Welcome to your first page. Built with React & Tailwind CSS.
        </p>
        <div className='mt-8 flex justify-center gap-3'>
          <span className='rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-900 dark:text-violet-300'>
            React
          </span>
          <span className='rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-900 dark:text-violet-300'>
            Tailwind
          </span>
          <span className='rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-900 dark:text-violet-300'>
            Vite
          </span>
        </div>
        <div className='mt-8 flex flex-col items-center gap-3'>
          <span className='text-5xl font-bold text-violet-600 dark:text-violet-400'>
            {count}
          </span>
          <button
            onClick={incrementCount}
            className='rounded-full bg-violet-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-violet-700 active:scale-95 dark:bg-violet-500 dark:hover:bg-violet-600'
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  )
}

export default HelloWorld
