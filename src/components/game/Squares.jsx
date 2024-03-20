const Squares = ({ value, onClick }) => {
    return (
        <button onClick={onClick} className=" font-bold w-[80px] text-red-500 text-[40px] font-serif h-[80px] btn border ">{value}</button>
    )
}

export default Squares