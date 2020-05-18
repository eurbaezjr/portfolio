import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "./style.css";
import experience from "./experience.json";

function MyVerticalTimeline(props) {



    return (
<VerticalTimeline>

{experience.map( e => (


<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
contentArrowStyle={{ borderRight: '13px solid  rgb(33, 150, 243)' }}
date={e.date}
iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', overflow: 'hidden', width:'auto', height:'auto', position:'center' }}
icon={<a href={e.orgLink} target="_blank" rel="noopener noreferrer"><img src={e.icon} width='70px' height='70px' alt={e.org}/></a>}
key={e.id}
>

<h3 className="vertical-timeline-element-title">{e.title}</h3>
<h4 className="vertical-timeline-element-subtitle">{e.org}</h4>
<p className="vertical-paragraph">
  {e.description}
</p>

</VerticalTimelineElement>

)
)}
</VerticalTimeline>
 );
}

export default MyVerticalTimeline;