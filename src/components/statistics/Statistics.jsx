import PropTypes from "prop-types";
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

Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   percentage: PropTypes.number.isRequired,
}

export default Statistics;