import React from "react"
import {ImageListItem} from "@mui/material";

interface ImageProps {
    imageInfo: any
}

const ImageDetail: React.FC<ImageProps> = (props) => {
    return (
        <ImageListItem>
            <img src={props.imageInfo.webformatURL} className="max-h-64" alt={props.imageInfo.tags}/>
        </ImageListItem>
        // <div>
        //     <img src={props.imageInfo.webformatURL} className="max-h-64" alt={props.imageInfo.tags}/>
        // </div>
    )
}

export default ImageDetail;