import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import PopUp from './PopUp/PopUp';
import Intro from  './Intro/Intro';

function App() {

  const [popUpVisible, setPopUpVisible] = useState(false);
  const [emails, setEmails] = useState([]);

  useEffect(()=> {
    const timer = setTimeout(()=> {
      setPopUpVisible(true);
    }, 3000) // 3 sec

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setPopUpVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.contact.value;
    console.log("User's email:", email);
    setEmails([...emails, email]); // collect the emails
    handleClose();

     // Send the email to the backend
     /* fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      })
      .then(response => response.json())
      .then(data => {
        console.log("Email sent successfully:", data);
        handleClose();
      })
      .catch(error => {
        console.error("Error sending email:", error);
      }); */
    };

  return (
    <div className={styles.App}>
      <div className={styles.logo}>
        <img src='https://cdn.prod.website-files.com/64dd8724e05416ffcbf4e3b9/66ce6be25eb7e006c7a64af7_BiotechBeauty_Logo_Horizontal_Pink.svg'/>
      </div>
      <div className={styles.Intro}>
        <Intro />
      </div>
      <div>
        <PopUp 
          isVisible = {popUpVisible}
          onClose = {handleClose}
          onSubmit = {handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
