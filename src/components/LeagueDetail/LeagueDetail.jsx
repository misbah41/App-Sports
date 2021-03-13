
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//conditional image
import male from '../LogoData/male.png';
import female from '../LogoData/female.png';

import './LeagueDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faVolleyballBall, faVenusMars, faGlobe, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"


const LeagueDetail = () => {
  const { leagueId } = useParams();
  const [league, setLeague] = useState([]);

  useEffect(() => {
    const url_id = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(url_id)
      .then(res => res.json())
      .then(data => setLeague(data.leagues[0]))
  }, [leagueId])

  const { strLeague, intFormedYear, strCountry, strSport, strGender,
    strBanner, strBadge, strWebsite, strTwitter, strFacebook, strYoutube } = league;


  //find the description value without null value or emty value
  const { strDescriptionCN, strDescriptionDE, strDescriptionEN, strDescriptionES, strDescriptionFR, strDescriptionPT } = league;
  const objectToArray = [strDescriptionCN, strDescriptionDE, strDescriptionEN, strDescriptionES, strDescriptionFR, strDescriptionPT];
  const truthyValue = objectToArray.find(description => description !== null);

  // console.log(league);

  return (
    <>
      <div className="container crd-container">
        <div style={{ backgroundImage: `linear-gradient(0deg, rgb(126 126 126 / 56%), rgb(58 58 58 / 79%)),url(${strBanner})` }} className='card banner-card'>
          <img src={strBadge} alt="" />
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-sm-10  flex-content">
            <div className="flexBox ">
              <div className="str-content ">
                <h4 className='league-title'>{strLeague}</h4>
                <strong><span className='font-icon'><FontAwesomeIcon icon={faCalendarCheck} /></span> Founded : {intFormedYear}</strong><br />
                <strong><span className='font-icon'><FontAwesomeIcon icon={faFlag} /></span>  Country : {strCountry}</strong><br />
                <strong><span className='font-icon'><FontAwesomeIcon icon={faVolleyballBall} /></span> Sport Type : {strSport}</strong><br />
                <strong><span className='font-icon'><FontAwesomeIcon icon={faVenusMars} /></span> Gender : {strGender}</strong><br />
              </div>
              <div className="strConditionalImgbox ">
                {
                  strGender === 'Male' ? <img src={male} alt="" /> : <img src={female} alt="" />
                }
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div className="detailDescription mt-5 mb-5">
              <article className='description'>{truthyValue}</article>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3 mb-5">
            <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer">
              <div className="iconBox1">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </a>
          </div>
          <div className="col-xs-6 col-sm-3 mb-5">
            <a href={`https://${strWebsite}`} target="_blank" rel="noreferrer">
              <div className="iconBox2">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
            </a>
          </div>
          <div className="col-xs-6 col-sm-3 mb-5">
            <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer">
              <div className="iconBox3">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </a>
          </div>
          <div className="col-xs-6 col-sm-3 mb-5">
            <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer">
              <div className="iconBox4">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeagueDetail;

