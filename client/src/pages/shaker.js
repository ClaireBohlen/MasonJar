import React, { useState, useEffect } from "react"
// import API from "../utils/API"
// import DateNightIn from "../components/DateNightIn"
// import DateNightOut from "../components/DateNightOut"
// import NetflixandChill from "../components/NetflixandChill"
// import Outdoor from "../components/Outdoor"
// import Weekend from "../components/Weekend"
import "../index.css"
import ShakerAnim from "../components/ShakerAnim"
import Nav from "../components/Nav";
import ModalShow from "../components/Modal";
// import Modal from "../components/Modal"
// import { Link } from "react-router-dom"


const Shaker = () => {

const [shakers, setShakers] = useState({  
  theme: "date night in",
  activity: ["strip poker", "movie night", "dance party"]
})

const [modalOpen, setModalOpen] = useState({
  isOpen: false,
  setTheme: "date night in"
})

useEffect(() => {
  console.log(shakers.activity)

}, [])


function chooseTheme(){
  console.log("chosen shaker")
  setModalOpen({isOpen: true})
}

function closeModal(){
  setModalOpen({isOpen: false})
}

return(
  <>
  <Nav />
  <div className="container-fluid">
    <div className="row">
    <div className="col-2">

    {shakers.activity.map(activity => (
      <span key={activity} >
      <ShakerAnim chooseTheme={chooseTheme}/>
      </span>

    ))}

    </div>
    <ModalShow isOpen={modalOpen.isOpen} closeModal={closeModal}/>
    </div>
  </div>
  </>
)
}

export default Shaker