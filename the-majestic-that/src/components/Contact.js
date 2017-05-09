import React from 'react'

const Contact = () => (
  <div className='Contact'>
    <h2>Contact Us</h2>

    <form>
      <p>
        <label htmlFor='fullName'>Name</label>
        <input name='fullName' type='text' />
      </p>
      <p>
        <label htmlFor='email'>Email</label>
        <input name='email' type='email' />
      </p>
      <p>
        <label htmlFor='message'>Message</label>
        <textarea cols='30' rows='10' />
      </p>
      <p>
        <button type='submit'>Submit</button>
      </p>
    </form>

    <p>
      You can also email us at
      <a href='mailto:hello@majestic.that'>hello@majestic.that</a>.
    </p>
  </div>
)

export default Contact
