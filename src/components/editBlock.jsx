import React, {useState, useEffect} from 'react';
import Modal from './modal/modal';

export default function EditBlock(props) {
    const [state, setState] = useState([]);
    const [modalActive, setModalActive] = useState(false);

    function postData() {
      const nickname = document.getElementById('nickname');
      const realName = document.getElementById('real_name');
      const originDescription = document.getElementById('origin_description');
      const superpowers = document.getElementById('superpowers');
      const catchPhrase = document.getElementById('catch_phrase');

      const formData = {
        nickname: nickname.value,
        real_name: realName.value,
        origin_description: originDescription.value,
        superpowers: superpowers.value,
        catch_phrase: catchPhrase.value,
      }
      console.log(`formData`, formData)

      fetch("/superheroes", {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8'
        },
      })
      .then(async response => {
        console.log(`response`, await response)
        if(response.status < 400) {

          document.location = response.url;
          document.location = "http://localhost:3000/";
        }
        // if(!response.ok) {
        //   throw new Error(`Error! Status: ${response.status}. Text: ${response.statusText}`)
        // }
        // return response.status;
      })
      // .then(() => {
      //   formBlock.reset();
      // })
      .catch((err) => console.log(err))
    }

    return <div className="edit-superhero-block">
        <div className="edit-btn">
          <button className="open-modal" onClick={() => setModalActive(true)}>Edit</button>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <form className="edit-superhero-form" id="edit-superhero-form" action="" method="post">
            <h3 className="modal-name">Write all information for edit the superhero!</h3>
            <input className="input-data" id='nickname' name="nickname" required type="text" placeholder="Nickname"/>
            <input className="input-data" id='real_name' name="real_name" required type="text" placeholder="Real name"/>
            <input className="input-data" id='origin_description' name="origin_description" required type="text" placeholder="Description"/>
            <input className="input-data" id='superpowers' name="superpowers" required type="text" placeholder="Superpowers"/>
            <input className="input-data" id='catch_phrase' name="catch_phrase" required type="text" placeholder="Catch phrase"/>
            <button className="modal-btn" onClick={() => postData()}>Edit</button>
            {/* <input type="button" className="add-superhero-btn" onClick={() => postData()} placeholder="Add" /> */}
          </form>
        </Modal>
    </div>;
}