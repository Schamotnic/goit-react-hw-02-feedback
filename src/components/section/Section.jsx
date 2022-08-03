import PropTypes from "prop-types";

 
import{H2} from "./SectionStyle"

const Section =  ({title,children}) => {
return <div>
   <H2>{title}</H2>
   {children} 
</div>

 }

 Section.propTypes ={
  title: PropTypes.string.isRequired,
   children:PropTypes.node.isRequired

 }


 export default Section;