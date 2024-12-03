import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "./constants";

function OneDebut() {
    const params = useParams();
    const navigate = useNavigate();
    const [debut, setDebut] = useState({
        characterName: '',
        film: '',
        year: '',
    })

    const [isEditing, setIsEditing] = useState(false);

    async function handleDelete() {
        await axios.delete(`${API_URL}/debuts/${debut._id}`)
        navigate('/debuts');
    }

    function toggleEditing() {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }

        console.log('in toggleEditing')
    }

    function updateLocalDebut(event) {
        const inputBox = event.target;
        setDebut((previousState) => ({
            ...previousState,
            [inputBox.name]: inputBox.value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await axios.put(`${API_URL}/debuts/${debut._id}`, debut)
        setIsEditing(false);
    }

    useEffect(() => {
        async function getDebut() {
            const response = await axios(`${API_URL}/debuts/${params.name}`);
            setDebut(response.data.payload);
        }

        getDebut();
    }, [params, isEditing])

    console.log(isEditing);

    return (
        <form onSubmit={handleSubmit}>
            {
                isEditing
                    ? <div><input type="text" name="characterName" value={debut.characterName} onChange={updateLocalDebut} /></div>
                    : <h1>{debut.characterName}</h1>
            }

            {
                isEditing
                    ? <div><input type="text" name="film" value={debut.film} onChange={updateLocalDebut} /></div>
                    : <p>Debuted in {debut.film}</p>
            }

            {
                isEditing
                    ? <div><input type="text" name="year" value={debut.year} onChange={updateLocalDebut} /></div>
                    : <p>Year: {debut.year}</p>
            }

            {
                isEditing
                    ? <button type="submit">Save Changes</button>
                    : <p onClick={toggleEditing}>Edit Debut Details</p>
            }

            <button onClick={handleDelete}>DELETE DEBUT</button>
        </form>
    )
}

export default OneDebut;