import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center font-bold text-xl cursor-pointer">
                Medium
        </Link>
        <div>
            <Link to={'/publish'}>
                <button type="button" className="mr-4 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 
                focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb">New</button>
            </Link>
            <Avatar name="Ankit" size={"big"}/>
        </div>
    </div>
}