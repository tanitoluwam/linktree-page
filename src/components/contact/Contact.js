import React from 'react'

export const Contact = () => {
  return (
    <form>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind. </p>
        <div>
            <label htmlFor="name">
                First name
                <input type="text" id="name" className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400'/>
            </label>
        </div>
    </form>
  )
}
