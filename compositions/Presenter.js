
import { MyHead as Head } from '../next';
import Divider from '@material-ui/core/Divider';
import _get from 'lodash/get';

import {
    MyTypography as Typography,
    TwoColsLayout as Section,
    Wrapper,
    Presentation,
    Presenter as PresenterName,
    Sharer,
    MyAvatar as Avatar,
    Speaker
  } from '../components';


import {Presenters} from '../datasources'

import { 
    getPresenterOgImage, 
    getSpeakerName,
    getSpeakerAvatar,
    getSpeakerLogotype
 } from '../helpers';



const Presenter = ({id, asPath, ...rest}) => (


    <Presenters id={id}>{

        (filtered, all, record) => {
                    
            return (

            <React.Fragment>

            <Head
            image={getPresenterOgImage(record)}
            url={asPath}
            titleLabel={['presenters.opengraph.title', { presentation_title : _get(record, 'presentation_title') }]}
            descriptionLabel={[
            'presenters.opengraph.description',
            {
                name: getSpeakerName(record),
                cname2: _get(record, 'cname2')
            }
            ]}
            />

            <Wrapper first={true} {...rest}>
            <Section
            leftSize={5}
            left={
            <div
            style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20
            }}
            >
            <Avatar src={getSpeakerAvatar(record, [])} minimal={false} grayscale={false} />

            <img
            src={getSpeakerLogotype(record, [])}
            alt=""
            style={{ maxWidth: 300, maxHeight: 200, marginTop: 30 }}
            />
            </div>
            }
            leftCentered={true}
            right={
            <div>
            <Presentation
            title={record.presentation_title}
            description={record.presentation_description}
            />

            <Divider />

            <PresenterName data={record} />

            <Sharer url={asPath} />
            </div>
            }
            />
            </Wrapper>

            </React.Fragment>
        )
    }

    }</Presenters>

   
)

Presenter.defaultProps = {
    label : "common.do_you_want_to_hear_about_it"
}

export default Presenter

