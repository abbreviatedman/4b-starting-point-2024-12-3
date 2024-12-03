import { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL } from "./constants";
import { Link } from "react-router-dom";

function AllDebuts() {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        async function getDebuts() {
            const response = await axios(`${API_URL}/debuts`);
            setServerData(response.data.payload);
        }

        getDebuts();
    }, [])

    return (
        <>
            {
                serverData.map((debut) => (
                    <li key={debut._id}>
                        <Link to={`/debuts/${debut.characterName}`}>{debut.characterName}</Link>
                    </li>
                ))
            }
        </>
    )
}

export default AllDebuts;