import {React} from "react";
import Gallery from './gallery/Gallery'
import { GalleryProvider } from "./context/galleryContext";

const App=()=> {
    

        return(
          <GalleryProvider>
            < Gallery />
          </GalleryProvider>
          
        )
        }

export default App