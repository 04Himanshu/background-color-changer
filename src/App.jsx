import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive');

  const colors = [
    { name: "Red", value: "red", bg: "bg-red-800" },
    { name: "Green", value: "green", bg: "bg-green-800" },
    { name: "Yellow", value: "yellow", bg: "bg-yellow-800" },
    { name: "Blue", value: "blue", bg: "bg-blue-800" },
    { name: "Pink", value: "pink", bg: "bg-pink-800" },
    { name: "Sky", value: "skyblue", bg: "bg-sky-800" },
    { name: "Purple", value: "purple", bg: "bg-purple-800" },
    { name: "Fuchsia", value: "fuchsia", bg: "bg-fuchsia-800" },
    { name: "Black", value: "black", bg: "bg-black" },
    { name: "Orange", value: "orange", bg: "bg-orange-800" }
  ];

  return (
    <div style={{ backgroundColor: color }} className="w-full h-screen">
      <div className="fixed flex flex-wrap justify-center bottom-6 w-full rounded-2xl bg-white text-white">

        {colors.map((c) => (
          <button
            key={c.value}
            onClick={() => setColor(c.value)}
            className={`${c.bg} m-2 px-4 rounded-lg cursor-pointer`}
          >
            {c.name}
          </button>

        ))}
      </div>
    </div>
  )
}

export default App
