
import dynamic from 'next/dynamic'
import { connect } from 'react-redux';
const Visitor = dynamic(import("./Visitor"))
const Exhibitor = dynamic(import("./Exhibitor"))
import RoleSelect from './RoleSelect'


const RoleContainer = ({role}) => (

  <div>

    {role === "visitor" && <Visitor />}
    {role === "exhibitor" && <Exhibitor />}

    <RoleSelect items={[
      {role: "exhibitor", text : "Chcę zostać wystawcą"},
      {role : "visitor", text : "Chcę zwiedzać targi"}
    ]} />

  </div>
)


export default connect((state) => ({role : state.app.role}), {})(RoleContainer);
