import { Link } from "react-router-dom"

export const Welcome = () => {
    return <div>
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center text-4xl font-extrabold">
                welcome to
            </div>
            <div className="flex justify-center text-8xl font-extrabold">
                medium
            </div>
            <div className="flex justify-center pt-6">
                <Link to={'/signin'}>
                    <button type="button" className=" m-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4
                    focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign In</button>
                </Link>
                <Link to={'/signup'}>
                    <button type="button" className="m-5 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 
                    focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
                </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center text-black p-4">
                    For demo access, click sign-in and use <br/> email-id: tester123@gmail.com and pass: tester123  
            </div>
        </div>
    </div>
}