import React, { useState, useEffect, useRef} from 'react'


function ChangeImg(){

    const [imageUrl, setImageUrl] = useState("");
    const imageRef=useRef(null);
    const imageUrls=["https://statinfer.com/wp-content/uploads/dummy-user.png", "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"];

    useEffect(()=>{
        setImageUrl(imageUrl[0]);
    },[]);

    const changeImage=()=>{
        const currentImageUrl=imageRef.current.src;
        const currentIndex=imageUrls.indexOf(currentImageUrl);
        const nextIndex=(currentIndex+1)%imageUrls.length;
        setImageUrl(imageUrls[nextIndex]);
    }


    return(
        <div>

            <img src={imageUrl} alt="image" width="100px" height="100px" ref={imageRef}/>
            <button onClick={changeImage}>Change Image</button>
        </div>
    )
}

export default ChangeImg;