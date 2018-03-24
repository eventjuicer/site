

import dynamic from 'next/dynamic'
import { connect } from 'react-redux';


import RoleWrapper from './RoleWrapper'


const Visitor = dynamic(import("./Visitor"))
const Exhibitor = dynamic(import("./Exhibitor"))




const Roles = ({role, classes}) => {

  switch(role)
  {
    case "exhibitor":
      return  <RoleWrapper><Exhibitor /></RoleWrapper>

    case "visitor":
      return <RoleWrapper><Visitor /></RoleWrapper>
  }

  return null;
}


export default connect( (state) => ({role : state.app.role}) )(Roles)
