/**
 * @version 0.0.1
 * Updated On : April 14, 2026
 * Hello World 2 page.
 */

const HelloWorld2 = () => {
  //-------------- State & Variables --------------//

  //-------------- Use Effects --------------//

  //-------------- Other Methods --------------//

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-violet-50 to-purple-100 px-4 dark:from-gray-900 dark:to-violet-950'>
      <div className='w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-xl ring-1 ring-violet-100 dark:bg-gray-800 dark:ring-violet-900'>
        <div className='mb-6 flex justify-center'>
          <span className='inline-flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-3xl dark:bg-violet-900'>
            👋
          </span>
        </div>
        <h1 className='mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Hello World 2
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
      </div>
    </div>
  )
}

export default HelloWorld2
