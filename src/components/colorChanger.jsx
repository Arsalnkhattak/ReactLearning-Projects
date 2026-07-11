import React from "react";
import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("");
  return (
    <div
      className="h-screen w-full flex items-center inset-x-0 justify-center bg-amber-200 "
      style={{ backgroundColor: color }}
    >
      <div className="flex fixed top-4 left-3 gap-2 flex-wrap justify-center h-16 bg-white p-2 shadow-2xl">
        <button
          onClick={() => setColor("red")}
          className="px-3 py-1 bg-red-800 text-white rounded-xl"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="px-3 py-1 bg-blue-800 text-white rounded-xl"
          style={{ backgroundColor: "blue" }}
        >
          blue
        </button>
        <button
          onClick={() => setColor("black")}
          className="px-3 py-1 bg-black-800 text-white rounded-xl"
          style={{ backgroundColor: "black" }}
        >
          black
        </button>
        <button
          onClick={() => setColor("purple")}
          className="px-3 py-1 bg-red-800 text-white rounded-xl"
          style={{ backgroundColor: "purple" }}
        >
          purple
        </button>
        {/* <button onClick={() => setColor("raddish")} className='px-3 py-1 bg-red-800 text-white rounded-xl' style={{backgroundColor:"redish"}}>redish</button> */}
        <button
          onClick={() => setColor("white")}
          className="px-3 py-1 bg-red-800 border-2 border-x-black text-white rounded-xl"
          style={{ backgroundColor: "white" }}
        >
          white
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="px-3 py-1 bg-red-800 text-white rounded-xl"
          style={{ backgroundColor: "yellow" }}
        >
          yellow
        </button>
      </div>
    </div>
  );
}
