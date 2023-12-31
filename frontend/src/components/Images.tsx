import React from "react";
import ImageDetail from "./ImageDetail";
import Uid from "../utils/Uid";
import {ImageList, Skeleton} from "@mui/material";

interface ImageListProps {
    images: any[],
    loading: boolean,
    setShowAddCollection: React.Dispatch<React.SetStateAction<boolean>>,
    setSelectedImage: React.Dispatch<React.SetStateAction<string>>
}

const Images: React.FC<ImageListProps> = (props) => {
    return (

        <ImageList cols={3}>
            {props.loading ? (
                Array.from(new Array(10)).map((_, index) => <Skeleton key={index} variant="rectangular" width={400} height={200}/>)
            ) : (props.images.map(image => <ImageDetail key={Uid()}
                                                        imageInfo={image}
                                                        setSelectedImage={props.setSelectedImage}
                                                        setShowAddCollection={props.setShowAddCollection}/>)
            )}
        </ImageList>
    )
}

export default Images;