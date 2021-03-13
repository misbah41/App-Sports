

import React, { useState, useEffect } from 'react';
import League from '../League/League';
import './BaseBall.css';
import baseBallBanner from './BaseBallBanner/baseball.jpg';

//app start
const BaseBall = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
    fetch(url)
      .then(res => res.json())
      .then(data => setLeagues(data.leagues))
      .catch(err => alert('Something Went Wrong!!! Please Try Again Later'))
  }, [])
  
  const SoccerType = leagues.filter(soccer => soccer.strSport === 'Baseball');



  return (
    <div className='container'>
      <div style={{ backgroundImage: `linear-gradient(0deg, rgb(126 126 126 / 56%), rgb(58 58 58 / 79%)),url(${baseBallBanner})` }} className="soccerBanner">
        {/* <img src={baseLogo} alt="" /> */}
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

export default BaseBall;

