import React from 'react'
import "../css/UserList.css"

const UserList = (props) => {
  return (
    <div className='list-items'> 
       {props.item}
        <span className='icons'><i className="fa-solid fa-trash-can icon-delete" onClick={e=>{
            props.deleteUser(props.index)
        }}></i></span>
   </div>
  )
}

export default UserList
