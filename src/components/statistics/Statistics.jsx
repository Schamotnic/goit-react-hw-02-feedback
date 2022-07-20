
import {StatDiv,StatSpan,StatSpanFix} from "./StatisticsStyle"


const Statistics = ({good,neutral,bad,total,percentage}) => {
   return( 
   <StatDiv>
      <StatSpan>Good:{good}</StatSpan>
      <StatSpan>Neutral:{neutral}</StatSpan>
      <StatSpan>Bad:{bad}</StatSpan>
      <StatSpan>Total:{total}</StatSpan>
      <StatSpanFix>Positive feedback:{percentage}</StatSpanFix>
      </StatDiv>
      )
  
};

export default Statistics;