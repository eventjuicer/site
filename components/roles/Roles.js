

import dynamic from 'next/dynamic'
import { connect } from 'react-redux';




const Visitor = dynamic(import("./Visitor"))
const Exhibitor = dynamic(import("./Exhibitor"))




const Roles = ({role, classes}) => {

  switch(role)
  {
    case "exhibitor":
      return  <Exhibitor />

    case "visitor":
      return <Visitor />
  }

  return null;
}


export default connect( (state) => ({role : state.app.role}) )(Roles)
