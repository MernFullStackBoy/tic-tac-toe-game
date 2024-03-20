import { Link } from "react-router-dom"

const Maindash = () => {


    return (
        <div className=" flex flex-col items-center  p-[20px] w-[100%] h-633px ">
            <h2 className=" text-[35px] mt-[100px] font-semibold text-white ">Welcome to</h2>
            <h1 className=" text-[50px] font-semibold font-serif mt-[20px] text-yellow-600 animate-pulse ">Tic Tac Toe</h1>
            <Link to="/game">
                <button className=" text-white flex gap-[40px] justify-center items-center btn btn-warning mt-[70px] w-[200px] h-[60px] text-[20px] ">
                    <i className=" fa-solid fa-flag-checkered "></i>
                    <span>Start</span>
                </button>
            </Link>
        </div>
    )
}

export default Maindash