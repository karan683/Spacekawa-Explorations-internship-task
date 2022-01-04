import React from "react";
import ReactDom from 'react-dom'



const Backdrop = (props) => {
  return <div className="fixed left-0 top-0 w-full h-screen bg-black opacity-75 z-10" onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed left-0 md:left-1/4 top-1/4 w-full md:w-1/2  shadow-sm z-20">
      <header className="bg-red-600 h-12 text-center rounded-t-lg py-2 text-white">
        <h2>{props.title}</h2>
      </header>
      <div className="bg-white h-32 p-2 ">
        <p>{props.message}</p>
      </div>
      <footer className="flex justify-center  items-center h-12 bg-white rounded-b-lg ">
        <button onClick={props.onClick} className="border-2 border-red-600 p-1 mb-4 rounded-md w-20 hover:bg-red-600 hover:text-white">OKAY</button>
      </footer>
    </div>
  );
};
const ErrorModal = ({onClick , message , title}) => {
  return (
    <>
        {ReactDom.createPortal(<Backdrop onClick={onClick}/> ,document.getElementById('backdrop-hook') )}
        {ReactDom.createPortal(<ModalOverlay onClick={onClick} message={message} title={title} />,document.getElementById('modal-hook'))}
    </>
  );
};

export default ErrorModal;
