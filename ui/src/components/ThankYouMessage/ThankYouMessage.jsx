import React from "react";
import '../DonationForm/NewDonationForm.css';
import Modal from 'react-modal';

const ThankYouMessage = ({
    city,
    center,
    product,
    cantitate,
    setIsOpen
}) => {
    const [modalIsOpen, setModalIsOpen] = React.useState(true);

    const handleConfirm = () => {
        console.log(`Se adauga in baza de date ${ product } ${city} ${center} ${ cantitate }`);
        // navigate('/donations', true);
    }

    const closeModal = (event) => {
        event.preventDefault();
        setModalIsOpen(false);
    }

    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal">
        <div>
            <button onClick={closeModal}>close</button>
            <p className="mesage">Multumim ca ai ales sa ajuti!</p>
            <button className="confirm-button" onClick={handleConfirm} >Confirma donatia</button>
        </div>
        
      </Modal>
    );
};

export default ThankYouMessage;