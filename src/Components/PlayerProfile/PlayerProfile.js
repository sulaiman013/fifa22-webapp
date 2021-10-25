import React from 'react';
import { Radar } from 'react-chartjs-2';
import './PlayerProfile.css';
import ronaldo from '../../assets/images/ronaldo.png';
import { BrowserRouter, Link, Switch } from 'react-router-dom';

const data = {
    labels: ['Overall', 'Crossing', 'Finishing', 'Heading', 'Passing', 'Volleys'],
    datasets: [
      {
        label: 'Player Attributes',
        data: [94, 84, 94, 89, 81, 87],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgb(255, 91, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: 'rgba(255, 99, 132, 0.7)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        borderWidth: 4,
        pointBorderWidth: 10
      }]
  };
  
  const options = {
    scales: {
        r: {
            angleLines: {
                display: true,
                lineWidth: 1,
                color: "rgba(0, 0, 0, 0.8)"
            },
            suggestedMin: 0,
            suggestedMax: 100
        }
    }
};

const PlayerProfile = ({data2}) => {
    
    const {Age, Nationality, Height, Weight, PreferredFoot, Position, JerseyNumber, WorkRate, Joined, ContractValidUntil, Value, Wage, Overall, Club } = data2[1];

    return (
        <div className = "profile">
            <div className="player-info">
            <BrowserRouter>
            <Switch>
            <div className= "home-button">
                <button className="btn-home"><Link className="link-home" to = "/home" target="_blank">Back to Home</Link></button>
            </div>
            </Switch>
            </BrowserRouter>
               <div className="player-name">C. Ronaldo</div>
               <div><img className="player-pic" src={ronaldo} alt="" /></div>
           </div>
           <div className="data-section">
           <div className="radar-chart">
                <Radar data = {data} options = {options} />    
            </div>
           <div className="player-attributes">
               <span><button className="btn-profile">Overall {Overall}</button></span>
               <span><button className="btn-profile">Club: {Club}</button></span>
               <p className="attribute-text">Age &nbsp;<span className="attributes">{Age}</span></p>
               <p className="attribute-text">Nationality  &nbsp;<span className="attributes">{Nationality}</span></p>
               <p className="attribute-text">Value  &nbsp;<span className="attributes">{Value}</span></p>
               <p className="attribute-text">Wage  &nbsp;<span className="attributes">{Wage}</span></p>
               <p className="attribute-text">Height  &nbsp;<span className="attributes">{Height}</span></p>
               <p className="attribute-text">Weight  &nbsp;<span className="attributes">{Weight}</span></p>
               <p className="attribute-text">Preferred Foot  &nbsp;<span className="attributes">{PreferredFoot}</span></p>
               <p className="attribute-text">Position  &nbsp;<span className="attributes">{Position}</span></p>
               <p className="attribute-text">Jersey Number  &nbsp;<span className="attributes">{JerseyNumber}</span></p>
               <p className="attribute-text">Work Rate  &nbsp;<span className="attributes">{WorkRate}</span></p>
               <p className="attribute-text">Joining Date  &nbsp;<span className="attributes">{Joined}</span></p>
               <p className="attribute-text">Contract Ending Date  &nbsp;<span className="attributes">{ContractValidUntil}</span></p>
           </div>
           </div>
        </div>
    );
};

export default PlayerProfile;