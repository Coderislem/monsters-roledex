import React from "react"
import './search-style.css'
export  const Searchbox=({placeholder,handchange})=> {
 return (
<input className="search"
    type="search"
    placeholder={placeholder}
  onChange={handchange}
  />

 )

}





   

 
