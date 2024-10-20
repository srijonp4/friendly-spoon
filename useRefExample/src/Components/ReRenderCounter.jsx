import { useState, useRef, useEffect } from 'react';

const ReRenderCounter = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name]);
  return (
    <div className=" flex flex-col justify-center text-white bg-inherit font-semibold gap-2">
      <label htmlFor="nameInput"> Name</label>
      <input
        className="rounded h-8 p-2 bg-slate-700"
        type="text"
        id="nameInput"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p className="font-semibold italic">{name}</p>
      <p>Times Rendered : {renderCount.current} </p>
    </div>
  );
};

export default ReRenderCounter;
