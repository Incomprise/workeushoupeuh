import React, {Component} from 'react';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import db from "../firebase";

function Footer() {

        
    
        const [input, setInput] = useState("");
        const [message, setMessage] = useState("");
        const inputHandler = (e) => {
            setInput(e.target.value);
        };
        const submitHandler = (e) => {
            e.preventDefault();
            if(input) {
                console.log(input);
                db.collection("emails").add({
                    email: input,
                });
                setInput("");
                setMessage("Vous recevrez prochainement un email :)");
                setTimeout(() => {
                    setMessage("");
                }, 3000)
            }
        };
        return(
        <div className="App">
            <form onSubmit={submitHandler}>
                <h4>Abonnez-vous à notre newsletter</h4>
                <input type="email"  className='BouttonMail' placeholder="Votre email" onChange={inputHandler} value={input}/>
                <button className="bouttonsubscribe" type="submit">Envoyer</button>
            </form>
        </div>
        );


};
export default Footer;