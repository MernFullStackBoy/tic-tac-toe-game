import Squares from "./Squares"

const Board = ({ squares, onClick }) => {
    return (
        <>
            {squares.map((s, i) => {
                return <Squares onClick={() => onClick(i)} value={s} key={i} />
            })}
        </>
    )
}

export default Board