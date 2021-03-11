

import React from 'react';
import { Link } from 'react-router-dom';
import './League.css';


const League = (props) => {
  const {idLeague, strLeague, strSport } = props.league;
  
  return (
    <div className=' p-2 pb-4 mt-5 league-card'>
      <h4 className='sportTitle'>{strLeague}</h4>
      <p>Sport Type : {strSport}</p>
      <Link to={'/leagueDetail/'+idLeague}><button className='btn-detail'><span>More Detail</span></button></Link>
    </div>
  );
};

export default League;




