import React, {useState} from "react";
import {Box, Modal} from "@mui/material";
import useForm from "../hooks/useForm";
import CollectionService from "../services/Collection.service";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import UserService from "../services/User.service";
import {useNavigate} from "react-router-dom";
import {USER} from "../constant";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface AddCollectionProps {
    showAddCollection: boolean;
    setShowAddCollection: React.Dispatch<React.SetStateAction<boolean>>;
    selectedImage: string;
}

const AddCollection: React.FC<AddCollectionProps> = (props) => {
    const {values, handleChange, resetForm} = useForm({
        initialValues: {
            collection: "",
        }
    })
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        values.image = props.selectedImage;
        setLoading(true);

        try {
            await CollectionService.addUpdateCollections(values.collection, values.image);
            setLoading(false);
            setMessage(`Add to collection ${values.collection} successfully`);
        } catch (error) {
            setMessage(`Add to collection ${values.collection} failed`);
            setLoading(false);
        }
    }

    return (
        <Modal
            open={props.showAddCollection}
            onClose={() => {
                props.setShowAddCollection(false)
                setMessage("");
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {localStorage.getItem(USER) ?
                    <div>
                        <h2 className="text-center font-semibold text-2xl">Add to collections</h2>
                        <form className="max-w-sm flex flex-col mx-auto my-2" onSubmit={handleSubmit}>
                            <input className="border-2 border-stone-300 my-1 rounded-md h-8 px-2 py-4"
                                   placeholder="Collection"
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('collection', e.target.value)}
                            />
                            {loading ?
                                <button className="btn btn-success text-xl my-8" disabled={true}>Loading...</button> :
                                <button className="btn btn-success text-xl my-2" onClick={handleSubmit}>Add</button>
                            }
                            {
                                message && <p className="text-lime-800">{message}</p>
                            }
                        </form>
                    </div> :
                    <div>
                        <h2 className="text-center font-semibold text-xl">Login to add image into collection</h2>
                        <button className="btn w-full btn-success text-xl my-2" onClick={() => {navigate("/home")}}>Login</button>
                    </div>
                }
            </Box>
        </Modal>
    )
}

export default AddCollection;