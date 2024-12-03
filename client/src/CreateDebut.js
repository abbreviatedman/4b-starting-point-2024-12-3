import axios from "axios";
import { useState } from "react";
import { API_URL } from "./constants";

function CreateDebut() {
    const [debut, setDebut] = useState({
        characterName: '',
        film: '',
        year: '',
    })

    function handleSubmit(event) {
        event.preventDefault();
        postDebut();
    }

    async function postDebut() {
        try {
            await axios.post(`${API_URL}/debuts`, debut);
            setDebut({
                characterName: '',
                film: '',
                year: '',
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input value={debut.characterName} onChange={(e) => setDebut({ ...debut, characterName: e.target.value })} />
            <br /><br />
            <label>DebutFilm</label>
            <input value={debut.film} onChange={(e) => setDebut({ ...debut, film: e.target.value })} />
            <br /><br />
            <label>DebutYear</label>
            <input value={debut.year} onChange={(e) => setDebut({ ...debut, year: e.target.value })} />
            <br /><br />
            <button type="submit">Add character debut</button>
        </form>
    )
}

export default CreateDebut;