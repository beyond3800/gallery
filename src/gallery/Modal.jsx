import React, { useContext } from 'react'
import { GalleryContext } from '../context/galleryContext'
import { StarFour } from 'phosphor-react'
import ImgArray from './ImgArray'
import EachNature from './EachNature'

const Modal=()=> {
  const{setModal,modal,selectedRef}=useContext(GalleryContext)
  // console.log(modal.modalBody[0])
  return (
    <div className="modal">
      <header>
         <h3>modal name</h3>
            <button className='modalBtn' onClick={setModal}>X</button>
        </header>
          
    <div className="modalBody">
    <div className="currImg"><img src={`/images/${modal.currImg}`} alt={modal.currImg} /></div>
    <div className="imgArray" ref={selectedRef}>
      {modal.modalBody[0].map(images=><ImgArray key={images.id} data={images}/>)}
    </div>
    </div>
         </div>

  )
}

export default Modal