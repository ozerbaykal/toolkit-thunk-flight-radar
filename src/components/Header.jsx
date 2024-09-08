import React from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader';


const Header = () => {

  const  {isLoading,error,flights}= useSelector((store)=>store.flightReducer)

  return (
    <header>
        <div>
            <img src="/plane-logo.png" alt="plane-logo" />
            <h2>Uçuş Radarı</h2>
        </div>
        <h3>
         {isLoading ? <Loader /> : error ? "Hata" + `${error.message}` : `${flights.length} Uçuş bulundu
    ` } 
         
         
         </h3>
    </header>
  )
}

export default Header