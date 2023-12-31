import React, {useState} from "react"
import {IconButton, ImageListItem, ImageListItemBar} from "@mui/material";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { GrAddCircle } from "react-icons/gr";




interface ImageProps {
    imageInfo: any;
    setShowAddCollection: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}

const ImageDetail: React.FC<ImageProps> = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClickAddIcon = () => {
        props.setShowAddCollection(true);
        props.setSelectedImage(props.imageInfo.webformatURL);
    }

    return (
        <ImageListItem
            style={{ cursor: 'zoom-in' }}
            onMouseEnter={() => {
                setIsHovered(true)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
            }}
        >
            <img src={props.imageInfo.webformatURL} className="max-h-64" alt={props.imageInfo.tags}/>
            {isHovered && <ImageListItemBar
                className="text-left"
                title={props.imageInfo.tags}
                subtitle={props.imageInfo.user}
                actionIcon={
                    <IconButton
                        sx={{color: 'rgb(255,255,255)'}}
                        aria-label={`info about ${props.imageInfo.tags}`}
                        onClick={handleClickAddIcon}
                    >
                        <GrAddCircle />
                    </IconButton>
                }
            />}
        </ImageListItem>
    )
}

export default ImageDetail;