import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: { text: "Let's hit the beach!", iconName: 'sun' },
  winter: { text: "Brr, it's cold!", iconName: 'snowflake' }
};

const getSeason = (lat, month) => {
  if(month >= 3 && month <= 8) {
    return lat >= 0 ? 'summer' : 'winter';
  }
  return lat < 0 ? 'summer' : 'winter';
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  const iconClass = `icon huge ${iconName}`;
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconClass}`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconClass}`} />
    </div>
  );
};

export default SeasonDisplay;