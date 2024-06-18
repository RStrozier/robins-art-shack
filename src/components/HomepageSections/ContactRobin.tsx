import { useState } from "react";

const ContactRobin = () => {

  const [msg, setMsg] = useState(""); 

  const handleContactMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // console logs the message
    console.log("Contact Robin Message: " + msg);
    // sets the message blank after submission
    setMsg("");
  }


  return (
    <>
      <div className="contact-robin-container large-container">
        <div className="contact-form-container">
          <div className="contact-robin">
            <span
            className="poppins-black">Want to contact Robin?</span>
            <input
              type="text" // Use "text" for multiline input
              placeholder="What do you wanna say?"
              value={msg} // Bind input value to state variable
              onChange={(e) => setMsg(e.target.value)} // Update state on input change
            />
            <button 
            className="poppins-light"
            onClick={handleContactMessage}>Contact Me</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactRobin;
