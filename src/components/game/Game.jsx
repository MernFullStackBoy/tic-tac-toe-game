import { useEffect, useState } from "react"
import { calculateWinner } from "../../help"
import Board from "./Board"
import { Link } from "react-router-dom"

const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)])

    const [num, setNum] = useState(0)

    const winner = calculateWinner(history[num])

    const [xIsNext, setXisNext] = useState(true)

    const [win, setWin] = useState(false)

    const XO = xIsNext ? "X" : "O"

    function handleClick(i) {
        const his = history.slice(0, num + 1)
        const current = his[num]
        const squares = [...current]

        if (winner || squares[i]) return

        squares[i] = XO

        setHistory([...his, squares])
        setNum(his.length)
        setXisNext(prev => !prev)
        his.fill() && setWin(true)
    }

    function handleReset() {
        setNum(0)
    }

    return (
        <div className=" w-[100%]  h-[633px] flex flex-col justify-center items-center ">
            <div className=" p-[10px] flex flex-wrap gap-[10px] justify-center items-center w-[300px] rounded-[20px] h-[300px] bg-yellow-400 ">
                <Board onClick={handleClick} squares={history[num]} />
            </div>
            {winner ? (
                <div className=" p-[20px] flex flex-col items-center w-[300px] absolute rounded-[20px] h-[350px] bg-[yellow] ">
                    <h1 className=" text-[30px] font-semibold text-white font-serif ">Winner</h1>
                    <div className=" mt-[20px] w-[120px] flex justify-center items-center rounded-[50%] border-[10px] border-[white] h-[120px] ">
                        <h1 className=" font-serif text-red-500 text-[70px] ">{winner}</h1>
                    </div>
                    <div className=" flex gap-[20px] ">
                        <Link to="/">
                            <button className=" mt-[20px] btn btn-danger ">Home</button>
                        </Link>
                        <button onClick={handleReset} className=" mt-[20px] btn btn-primary ">Restart</button>
                    </div>
                </div>
            ) : (
                <div className=" w-[200px] h-[50px] bg-yellow-400 rounded-b-2xl flex justify-center items-center text-[25px] text-[red] font-serif ">
                    {"Player turn: " + XO}
                </div>
            )}
            {win && <button onClick={handleReset} className=" btn btn-danger mt-[20px] w-[140px] ">Restart</button>}
        </div>
    )
}

export default Game