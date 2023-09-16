import {React, useState, useEffect} from 'react'
import {db }from '../firebase';
export default function GetImages() {
const [images, setImages] = useState([]);

useEffect (() => {
    const databaseRef = db.ref('geomos-images')
    databaseRef.on('value', (snapshot) => {
       const imageList = []
    snapshot.forEach((element) => {
        const imageData = element.val()
        imageList.push(imageData.imageUrl)

        console.log(imageList);

    });
    setImages(imageList)
    console.log(imageList);
})
return ()=> {
    databaseRef.off('value')
}
},[]);

  return (
    <div>GetImages</div>
  )
}
