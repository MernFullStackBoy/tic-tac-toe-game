import { BrowserRouter } from "react-router-dom"
import RouteComponent from "./components/RouteComponent"

const App = () => {
  return (
    <div className=" container bg-back max-w-[400px] h-[100vh] mx-auto ">
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
    </div>
  )
}

export default App