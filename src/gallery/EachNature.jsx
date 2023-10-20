import React, { useContext } from 'react'
import { GalleryContext } from '../context/galleryContext'

const EachNature=(props)=> {
    const{chooseImage}=useContext(GalleryContext)
    const{name,img}=props.data
  return (
    <img src={`/images/${img}`} alt={img} onClick={(e)=>chooseImage(e,name)}/>
  )
}

export default EachNature