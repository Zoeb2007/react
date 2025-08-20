import React, { useState } from 'react'

const Project = () => {
    const [person,setPerson]=useState({
        name:'Zoeb Kabadi',
        artwork:{
            title:"A lonely soul",
            city:"Ratlam",
            image:"https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-6710-61f7-a407-03e4fa642f08/raw?se=2025-06-12T13%3A08%3A46Z&sp=r&sv=2024-08-04&sr=b&scid=32c955c1-97be-540d-ba76-ed9eafbf27b6&skoid=ec8eb293-a61a-47e0-abd0-6051cc94b050&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-11T20%3A13%3A41Z&ske=2025-06-12T20%3A13%3A41Z&sks=b&skv=2024-08-04&sig=mx9yviV%2B5c4dWFQ4GB5klzvIb4IngSs7l0LjJH62xJc%3D  "
        }
    });
    function handleNamechange(e){
        setPerson({
            ...person,
            name: e.target.value
        });}

  function handleTitlechange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    })};
  

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });}
  

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  
    }
  return (
    <div>
      <form action="">
        <label htmlFor="">
            Name
            <input type="text" 
            value={person.name}
            onChange={handleNamechange}/>
            </label>
        <label htmlFor="">Title
            <input type="text" 
            value={person.artwork.title}
            onChange={handleTitlechange} />
        </label>
            <label htmlFor="">City
                <input type="text" 
                value={person.artwork.city}
                onChange={handleCityChange} />
            </label>
            <label htmlFor="">Image
                <input type="text" 
                value={person.artwork.image} 
                onChange={handleImageChange}/>
            </label>
            </form>
    <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}/>
    </div>
    
  )
}

export default Project