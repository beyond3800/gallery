import {React, useContext} from 'react'
import Modal from './Modal'
import './gallery.css'
import { GalleryContext } from '../context/galleryContext'
import { city, nature } from '../images'
import EachCity from './ImgArray'
import EachNature from './EachNature'


 const Gallery =()=>{
  const {
    setModal, 
    modal,
    cities,
    natures,
}= useContext(GalleryContext)


    return (
      <div className="">
      <div className={modal.on?'overflow':'mainBody'}>
         <div className="city">
          <div className="cityHeader">
            <h2>City</h2>
          </div>
          <div className="cityBody">
            {
            city.map(city=><EachNature key={city.id} data={city}/>)
          }
          </div>
          
         </div>
         <div className="nature">
          <div className="natureHeader">
            <h2>Nature</h2>
          </div>
          <div className="natureBody">
             {
            nature.map(nature=><EachNature key={nature.id} data={nature}/>)
             }
          </div>
         
         </div>
        </div>
        {
            modal.on&&<Modal />
          }
        </div>
    )
        }
export default Gallery
