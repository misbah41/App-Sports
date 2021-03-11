
import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css';

const Home = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
    fetch(url)
      .then(res => res.json())
      .then(data => setLeagues(data.leagues))
      .catch(err => alert('Something Went Wrong!!! Please Try Again Later'))
  }, [])
  const first21 = leagues.slice(45, 66);

  return (
    <>
      <div className="container">
        <div className='row justify-content-center mb-5 pb-5'>
          {
            first21.map(league => <div className="col-xs-10 col-sm-6 col-md-4">
              <League key={league.idLeague} league={league} />
            </div>)
          }
        </div>
      </div>
    </>
  );
};

export default Home;


