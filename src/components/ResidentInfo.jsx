import axios from 'axios'
import { useEffect, useState } from 'react';


const ResidentInfo = ( {residentData} ) => {

    const [info, setInfo] = useState({})

    useEffect ( () => {

        axios
            .get(residentData)
            .then( resp => setInfo(resp.data) )
            .catch (error => console.error(error))

    }, [] )


    return (
        <li className="card-resident">
            
            <div className="card-resident-img">
                <img className="card-resident__img" src={info.image} />
            </div>
            <div className="card-resident-info">
                <h2>{info.name}</h2>
                <ul className="card-resident-info-items">
                    <li>Especie: <span>{info.species}</span> </li>
                    <li>Origen: <span>{info.origin?.name}</span> </li>
                    <li>Apariciones: <span>Ejemplo de apariciones</span> </li>
                </ul>
            </div>        
        
        </li>
    );
};

export default ResidentInfo;