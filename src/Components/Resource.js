import React from 'react'
import './Resources.css';

export default function Resource() {
  return (
    <div className='pageContainer'>
      <div className="resourcesSubHeader">
      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
        <h2 className='resourcesSubHeaderTitle'> Find all resources you need for your classes, <br/> be it books, assignments, practice papers etc. </h2>
      </div>
    </div>
  )
}