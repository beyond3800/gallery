import { createContext, useState, useRef } from "react";
import { city, nature } from "../images";

export const GalleryContext = createContext(null)

 export const GalleryProvider =(props)=>{
    const [cities,setCities]=useState(city)
    const [natures,setNatures]=useState(nature)
    const selectedRef = useRef(null)
    const [modal,setModal] = useState({
        on:false,
        currImg:'',
        modalBody:''
    })

    const darkSelected = (selectedImg) =>{
        const children = selectedRef.current.children
        const spread = ([...children])
        spread.map(each=>{
            each.classList.remove('selected')
            if(each.alt==selectedImg){
            each.classList.add('selected')
            }
        })
    }
    const chooseImage=(evt,picked)=>{
        let newGallery=[]
        if(picked==='nature'){
            newGallery.push(nature)
        }if(picked==='city'){
            newGallery.push(city)
        }
        console.log(evt.target.alt)
      setModal(prev=>{
        return{
            on:!prev.on,
            currImg:evt.target.alt,
            modalBody:newGallery
        }
      })
    }
    const changeSeletedImage =(selectedImg,evt)=>{
        darkSelected(selectedImg)
        setModal(prev=>({...prev,currImg:selectedImg}))

    }
    const context={
     modal,
     setModal,
     natures,
     cities,
     chooseImage,
     changeSeletedImage,
     selectedRef,
    }
    return(
        <GalleryContext.Provider value={context}>
           {props.children}
        </GalleryContext.Provider>
    )
}