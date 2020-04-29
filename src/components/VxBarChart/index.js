
import React from 'react';
import Trend from 'react-trend';
import "./style.css";

function TrendLine() {
    return (
    <div>
  <Trend
    className='trendline'
    smooth
    autoDraw
    autoDrawDuration={5000}
    autoDrawEasing="ease-out"
    data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,20]}
    gradient={['#00c6ff', '#F0F', '#FF0']}
    radius={25}
    strokeWidth={2}
    strokeLinecap={'round'}
  />
  </div>
);
  }
  export default TrendLine;