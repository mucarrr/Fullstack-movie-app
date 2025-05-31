const Error = ({info, refetch}) => {
    return (
        <div className="my-20 text-center bg-gray-200 text-black rounded-md max-w-[500px] mx-auto py-10">
            <h1>Something went wrong: {info.message}</h1>
            <button onClick={refetch} className="border-2 rounded-md px-4 py-2 mt-5 hover:bg-gray-300 transition-all">Try again</button>
        </div>
    )
}
export default Error;