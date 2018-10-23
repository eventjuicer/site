


import {
    Wrapper,
    People,
   // Schedule
  } from '../components';

const Presenters = (props) => (

    <Wrapper
    label="presenters.list_featured"
    secondaryLabel="presenters.list_description"
    links={[
    // <Link key="all" href="/presenters" label="common.menu.visitors.presenters" variant="flat" color="secondary" />,
    // <Link key="subjects" href="/schedule" label="common.menu.visitors.schedule" variant="flat" color="secondary" />
    ]}
    >
    {/* <Schedule /> */}
    <People 
    limit={20}
    random={false} 
    link={false} 
    filter={function(item){ return [77504, 77505, 77508, 77529, 77557, 77773, 78014, 78429].indexOf(item.id) > -1 }}  
    />
    </Wrapper> 


)


export default Presenters