import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  let [length, setlength] = useState(8);
  let [numallow, setNumberallow] = useState(false);
  let [charallow, setCharallow] = useState(false);
  let [password, setPassword] = useState("");
  let [showpassword, setshowpassword] = useState(false);
  const passwordgen = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhgfdsazxcvbnm";
    if (numallow) str += "1234567890";
    if (charallow) str += "!~`@#$%^&*-=+_[]{}:;<>/?";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numallow, charallow, setPassword]);

  useEffect(() => passwordgen(), [length, charallow, numallow, passwordgen]);
  const passwordref = useRef(null);
  const copypassword = () => {
    passwordref.current?.select();
    //  passwordref.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  };
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-slate-600">
        <h1 className="text-center">PASSWORD GENERATOR</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type={showpassword ? "text" : "password"}
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordref}
          />
          <button onClick={copypassword} className="bg-blue-800 text-white mr-2">
            COPY
          </button>
          <button
            className="bg-blue-800 text-white"
            onClick={() => {
              setshowpassword((prev) => !prev);
            }}
          >
            show password
          </button>
        </div>
        <div className="flex text-sm gap-x2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numallow}
              onChange={() => {
                setNumberallow((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={charallow}
              onChange={() => {
                setCharallow((prev) => !prev);
              }}
            />
            <label>CHARACTOR</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
