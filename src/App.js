import React, {useState} from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

function App() {

    const [showModal,
        setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <div className="App">
            <h1>React Animations</h1>
            <Modal show={showModal} closed={closeModal}/>
            <Backdrop show={showModal} closed={closeModal}/>
            <button className="Button" onClick={openModal}>Open Modal</button>
            <h3>Animating Lists</h3>
            <List/>
        </div>
    );

}

export default App;
