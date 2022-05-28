import React, {useState, useEffect} from 'react';
import Modal from './modal/modal';


export default function FormBlock(props) {
    const [state, setState] = useState([]);
    const [modalActive, setModalActive] = useState(false);

    function postData() {
      const nickname = document.getElementById('nickname');
      const realName = document.getElementById('real_name');
      const originDescription = document.getElementById('origin_description');
      const superpowers = document.getElementById('superpowers');
      const catchPhrase = document.getElementById('catch_phrase');
      const img = document.getElementById('superhero-img');

      const formData = {
        nickname: nickname.value,
        real_name: realName.value,
        origin_description: originDescription.value,
        superpowers: superpowers.value,
        catch_phrase: catchPhrase.value,
        image: img.value,
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
      .catch((err) => console.log(err))
    }

    return <div className="add-superheroes-block">
        <div className="add-btn">
          <button className="open-modal" onClick={() => setModalActive(true)}>Add superhero</button>
        </div>
        <Modal active={modalActive} setActive={setModalActive}>
          <form className="add-superhero-form" id="add-superhero-form" action="" method="post">
            <h3 className="modal-name">Write all information for add superhero to the list!</h3>
            <input className="input-data" id='nickname' name="nickname" required type="text" placeholder="Nickname"/>
            <input className="input-data" id='real_name' name="real_name" required type="text" placeholder="Real name"/>
            <input className="input-data" id='origin_description' name="origin_description" required type="text" placeholder="Description"/>
            <input className="input-data" id='superpowers' name="superpowers" required type="text" placeholder="Superpowers"/>
            <input className="input-data" id='catch_phrase' name="catch_phrase" required type="text" placeholder="Catch phrase"/>
            <span>The file must be in the format ".jpg"</span>
            <input className="input-data" name="image" type="file" />
            <button className="modal-btn" onClick={() => postData()}>Add</button>
            {/* <input type="button" className="add-superhero-btn" onClick={() => postData()} placeholder="Add" /> */}
          </form>
        </Modal>
    </div>;
}