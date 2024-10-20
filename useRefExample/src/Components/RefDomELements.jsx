import { useEffect } from 'react';
import { useRef, useState } from 'react';

const RefDomELements = () => {
  const [name, setName] = useState('');
  const inputRef = useRef();
  /* PERSIST VALUES BETWEEN RENDERS */
  const prevName = useRef('');
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <div className=" flex flex-col justify-center text-white bg-inherit font-semibold gap-2">
      <label htmlFor="nameInput"> Name</label>
      <input
        ref={inputRef}
        className="rounded h-8 p-2 bg-slate-700"
        type="text"
        id="nameInput"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        className="bg-blue-600 hover:bg-green-400 py-2 px-4 rounded font-semibold "
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current.focus();
        }}
      >
        focus
      </button>
      <div>
        <p>current name : {name}</p>
        <p>prev name : {prevName.current}</p>
      </div>
    </div>
  );
};

export default RefDomELements;
