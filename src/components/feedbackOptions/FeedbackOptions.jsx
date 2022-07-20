import PropTypes from "prop-types";
 import {Div,OptionButton} from"./FeedbackOptionsStyle"

const FeedbackOptions = ({options,onLeaveFeedback}) =>{
 return(
    <Div>
   {options.map((option)=>(<OptionButton key={option} type='button' onClick={onLeaveFeedback} name={option}>{option}</OptionButton>))}


</Div>
 )
};

FeedbackOptions.propTypes = {
   options: PropTypes.array.isRequired,
   onLeaveFeedback: PropTypes.func.isRequired
};
  export default FeedbackOptions;