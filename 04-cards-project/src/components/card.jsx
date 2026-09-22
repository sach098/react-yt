import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  console.log(props.company)
  
  return (
    <div>
        <div className="card">
      
      <div>
        <div className="top">
       <img src={props.logo} alt="" />
        <button>save <Bookmark size={12} /></button>
        
      </div>

      <div className="center">
        <h3>{props.company} <span>{props.datapost}</span></h3>
        <h2>{props.role}</h2>
        <div className='tag'>
          <h4>{props.time} </h4>
          <h4>{props.tag2}</h4>
        </div>

      </div>
      </div>
      <div className="bottom">
        
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
        <button>Apply Now</button>
        

      </div>
    </div>
      
    </div>
  )
}

export default card
