import { useState } from "react"

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style = {{backgroundColor: color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button
            onClick={() => setColor("#FBF8CC")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#FBF8CC"}}>Lemon</button>

            <button
            onClick={() => setColor("#FDE4CF")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#FDE4CF"}}>Petal</button>

            <button
            onClick={() => setColor("#FFCFD2")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#FFCFD2"}}>Rose</button>

            <button
            onClick={() => setColor("#F1C0E8")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#F1C0E8"}}>Orchid</button>

            <button
            onClick={() => setColor("#CFBAF0")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#CFBAF0"}}>Lavender</button>

            <button
            onClick={() => setColor("#A3C4F3")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#A3C4F3"}}>Blue</button>

            <button
            onClick={() => setColor("#90DBF4")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#90DBF4"}}>Sky</button>
            <button
            onClick={() => setColor("#8EECF5")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#8EECF5"}}>Aqua</button>

            <button
            onClick={() => setColor("#98F5E1")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#98F5E1"}}>Aquamarine</button>

            <button
            onClick={() => setColor("#B9FBC0")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "#B9FBC0"}}>Sage</button>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
