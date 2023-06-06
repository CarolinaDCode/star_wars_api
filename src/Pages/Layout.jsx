import { useState, useEffect } from 'react';
import * as API from '../services/utils';
import { PeopleItem } from '../components/PeopleItem';
import { TraitsPeople } from '../components/TraitsPeople';
import { Navbar} from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../style/loader.css'
import '../style/layout.css'

export function Layout() {
  const [loading, setLoading] = useState(true);
  const [peoples, setPeoples] = useState([]);
  const {id} = useParams();
  const [showMenu, setShowMenu] = useState(true);


  useEffect(() => {
    console.log(id)
    if(window.innerWidth <= 600 && id){
      setShowMenu(false)
    }else{
      setShowMenu(true)
    }
  }, [id]);

  useEffect(() => {
    API.getAllPeople()
      .then((data) => {
        setPeoples(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Navbar titulo={loading ? 'People of Star Wars' : 'People'} />
      <main className='main'>
        {loading ? (
          <div className="loader space-loader">
            <div className="lds-spinner"></div>
            <div className="loader-text">Loading</div>
          </div>
          ) : ( peoples ? (
                  <div> 
                    { showMenu && peoples.map((item) => (
                      <PeopleItem {...item} key={item.name}>
                      </PeopleItem>
                      ))}
                  </div>):(
                      <div>
                        <h1>Failed to Load Data</h1>
                      </div>)
              )
        }
        <Outlet/>
      </main>
    </div>
  );
}

