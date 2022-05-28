import React, {useState, useEffect} from 'react';
import Modal from './modal/modal';


export default function DeleteBlock(props) {
    const [state, setState] = useState([]);
    const [modalActive, setModalActive] = useState(false);

    function deleteData() {

    //   fetch("/superheroes", {
    //     method: 'POST',
    //     body: JSON.stringify(formData),
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json; charset=utf-8'
    //     },
    //   })
    //   .then(async response => {
    //     console.log(`response`, await response)
    //     if(response.status < 400) {

    //       document.location = response.url;
    //       document.location = "http://localhost:3000/";
    //     }
    //   })
    //   .catch((err) => console.log(err))
    }

    return <div className='delete-superhero-block' >
        <div className="delete-btn">
          <button className="open-modal" onClick={() => setModalActive(true)}>Delete</button>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <div className="delete-superhero-modal" >
                <h3 className='modal-name' >Are you sure to delete the superhero?</h3>
                <button className="modal-btn" onClick={() => deleteData()}>Delete</button>
            </div>
        </Modal>
    </div>;
}