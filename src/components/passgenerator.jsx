import React, { useCallback, useEffect, useRef, useState } from "react";

export default function Passgenerator() {
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [lenght, setLenght] = useState(8);

  const generatePass = useCallback(() => {
    let newpass = "";
    let string = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let character = "[]90()/,.;']\-";
    let number = "01223456789";

    if (numberAllowed) string += number;
    if (characterAllowed) string += character;

    for (let i = 0; i < lenght; i++) {
      let char = Math.floor(Math.random() * string.length + 1);

      newpass += string.charAt(char);
    }

    setPassword(newpass);
  }, [setPassword, numberAllowed, characterAllowed, lenght]);

  useEffect(() => {
    generatePass();
  }, [lenght, characterAllowed, numberAllowed, setPassword]);

  const setPasswordRef = useRef(null);

  const copytoclipboard = useCallback(() => {
    setPasswordRef.current?.select();
    setPasswordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full text-center shadow-lg bg-gray-500 text-orange-300 my-3 px-4 rounded-b-lg">
      <h1>Pss Changer from react</h1>

      <div className="flex shadow my-4 mx-5 ">
        <input
          type="text"
          name=""
          id="pss"
          value={password}
          ref={setPasswordRef}
          className="w-full px-3 py-1 bg-white  overflow-hidden outline-none"
          placeholder="password"
          readOnly
        />
        <button
          onClick={copytoclipboard}
          className="px-3 py-1 outline-none shrink-0 bg-blue-500 "
        >
          ccpy
        </button>
      </div>

      <div className="flex gap-x-5 text-sm mx-5">
        <div className="flex items-center gap-3">
          <input
            type="range"
            max={16}
            min={8}
            value={lenght}
            className="cursor-pointer"
            onChange={(e) => setLenght(Number(e.target.value))}
          />
          <label htmlFor="range">Lenght : {lenght}</label>
        </div>

        <div className="flex gap-x-5 ">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="number"
            onChange={() => setNumberAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label htmlFor="number">Number</label>
        </div>

        <div className="flex gap-x-5 ">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="character"
            onChange={() => setCharacterAllowed((prev) => !prev)}
            name=""
            id=""
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  );
}
