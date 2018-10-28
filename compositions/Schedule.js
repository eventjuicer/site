import {
    Wrapper,
    Schedule
} from '../components';

import {
    Presenters,
    Exhibitors
} from '../datasources';

const WidgetSchedule = (props) => (

    <Wrapper
    label="presenters.schedule"
    secondaryLabel="presenters.list_description"
    links={[
    // <Link key="all" href="/presenters" label="common.menu.visitors.presenters" variant="flat" color="secondary" />,
    // <Link key="subjects" href="/schedule" label="common.menu.visitors.schedule" variant="flat" color="secondary" />
    ]}
    >
    {/**/}

    <Exhibitors>{
        (exhibitors) => (
            <Presenters  
       //     limit={20}
            random={false}
       //     filter={function(item){ return [77504, 77505, 77508, 77529, 77557, 77773, 78014, 78429].indexOf(item.id) > -1 }}  
            >{
            (presenters) => 
         
            <Schedule
                exhibitors={exhibitors}
                presenters={presenters}
                link={false} 
            />
    
            }</Presenters>
        )
    }
 
    
    </Exhibitors>

    </Wrapper> 


)


export default WidgetSchedule