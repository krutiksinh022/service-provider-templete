import React from 'react'
import "../styles/Contact.css"

function Contact() {
  return (
      <>
          <div className="contact-container">
              <div className="contact-form-container">
                  <div className="contact-form">
                      <form action="">
                          <h1 className='contact-heading'>Contact us</h1>
                          <div className="form-get-details">
                              <div className="name-container">
                              <label htmlFor="">Name </label>
                                  <input type="text" placeholder='abc' />
                              </div>
                              <div className="email-container">
                              <label htmlFor=""> Email </label>
                                  <input type="text" placeholder='xyz@gmail.com' />
                              </div>
                              <div className="message-container">
                                  <label htmlFor="">Message </label>
                                  <input type="text" placeholder='Tell us about your query'/>
                              </div>
                              <button type='submit' className='send-button'>Send</button>
                          </div>
                          

                          </form>
                  </div>
                  
              </div>
          </div>
      </>
  )
}

export default Contact
