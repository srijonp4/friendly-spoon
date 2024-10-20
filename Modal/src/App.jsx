import { useEffect, useState } from 'react';
import Modal from './Components/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickModal = () => {
    setIsOpen((prev) => !prev);
  };

  /* functionality to close the modal whenever the user presses ESC and open modal whenever the user presses ctrl+m */
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey && event.key === 'm') {
        setIsOpen(true);
      }
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      return window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className=" p-2 bg-slate-900 text-yellow-100 min-h-screen ">
      <h1>Modal Window</h1>
      <button
        className="bg-blue-600 py-2 px-4 rounded font-semibold "
        onClick={handleClickModal}
      >
        Open Modal
      </button>
      {isOpen && <Modal closeModal={handleClickModal} />}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa
        eligendi recusandae natus, illo quas. In ut placeat assumenda illo
        aspernatur praesentium ullam nesciunt natus minus magnam velit, odio
        incidunt!
      </p>
    </div>
  );
};

export default App;
