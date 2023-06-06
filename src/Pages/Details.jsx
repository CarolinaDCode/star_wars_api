import { useParams } from 'react-router-dom';
import '../style/Details.css'
import { getPerson } from '../services/utils';
import { useEffect, useState } from 'react';
import { TraitsPeople } from '../components/TraitsPeople';


export function Details(){
    const {id} = useParams();
    const [personData, setPersonData] = useState({});

    useEffect(() => {
        getPerson(id)
          .then((data) => {
            setPersonData(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [id]);
    
    return(
        <div  className='containerDetail'>
            <TraitsPeople {...personData}/>
        </div>
    )
}