const Modal = ({ closeModal }) => {
  return (
    <>
      {/* # NOTES:
      inset-0 === left-0 right-0 top-0 bottom-0
     */}
      <div className="modal-wrapper fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="p-2 flex flex-col gap-2 justify-center items-center text-center w-1/3 border white rounded bg-slate-800 fixed">
          <h1 className="text-2xl font-semibold">HELLO THIS IS A MODAL</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            tenetur harum dolores doloremque officia assumenda perferendis quo
            et praesentium veniam atque, iste iusto non nobis ut debitis
            laudantium. Nulla, a.
          </p>

          <button
            className="bg-blue-600 hover:bg-green-700 py-2 px-4 rounded font-semibold "
            onClick={closeModal}
          >
            Close Modal
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
