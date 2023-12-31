import {ImageList, ImageListItem, ListSubheader} from "@mui/material";
import React from "react";

interface CollectionProps {
    images: any[];
    collectionName: string;
}

const Collection: React.FC<CollectionProps> = (props) => {
    return (
        <div className="text-left max-w-5xl mb-8 mx-auto">
            <h2 className="text-xl mb-2">📁{props.collectionName}</h2>
            <ImageList cols={4}>
                {props.images.map((image) => (
                    <ImageListItem key={image}>
                        <img
                            srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${image}?w=248&fit=crop&auto=format`}
                            alt={image}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default Collection;