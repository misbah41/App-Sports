

import React, { useState, useEffect } from 'react';
import League from '../League/League';
import './Soccer.css';
import soccerBanner from './bannerimg/Football-stadium2.jpg';
import messiLogo from './bannerimg/download.png';

const Soccer = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
    fetch(url)
      .then(res => res.json())
      .then(data => setLeagues(data.leagues))
      .catch(err => alert('Something Went Wrong!!! Please Try Again Later'))
  }, [])

  const first66 = leagues.slice(0, 66)
  const SoccerType = first66.filter(soccer => soccer.strSport === 'Soccer');

  return (
    <div className='container'>
      <div style={{ backgroundImage: `linear-gradient(0deg, rgb(126 126 126 / 56%), rgb(58 58 58 / 79%)),url(${soccerBanner})` }} className="soccerBanner">
        <img src={messiLogo} alt=""/>
      </div>
      
      <div className='row justify-content-center mb-5 pb-5'>
        {
          SoccerType.map(league => <div className="col-xs-10 col-sm-6 col-md-4">
            <League key={league.idLeague} league={league} />
          </div>)
        }
      </div>
    </div>
  );
};

export default Soccer;


