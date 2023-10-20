import React, { useContext } from 'react'
import { GalleryContext } from '../context/galleryContext'

const ImgArray=(props)=> {
    const{changeSeletedImage,selectedRef}=useContext(GalleryContext)
    const{name,img}=props.data
    // console.log(props)
  return (
    <img src={`/images/${img}`} alt={img} onClick={(e)=>changeSeletedImage(img,e)} className='imgArray'/>
    
  )
}

export default ImgArray