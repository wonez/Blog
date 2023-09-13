export default function Loading() {
    return (
        <section className={'animate-pulse'}>
            <div
                className={
                    'my-5 flex justify-between flex-col gap-10 lg:flex-row'
                }
            >
                <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-full lg:w-1/6"></div>
                <div className="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-full lg:w-1/4"></div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-3">
                {Array.from(Array(6).keys()).map((key) => (
                    <div
                        key={key}
                        className="p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700"
                    >
                        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                ))}
            </div>
            <span className="sr-only">Loading...</span>
        </section>
    )
}
