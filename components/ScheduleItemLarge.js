import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Presentation from './Presentation';
import Presenter from './Presenter';
import PresentationLabel from './PresentationLabel';

import { dialogShow } from './redux/actions';

import { 
    //changeLimitForScreen, 
    getSpeakerName,
    //getSpeakerAvatar,
    getSpeakerAvatar
  } from '../helpers';

import ScheduleItemPresenter from './ScheduleItemPresenter';

const styles = theme => ({
  item: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection : 'row',
    flexWrap : 'nowrap',
    minWidth: 1000,
    maxWidth: 1300
  },

  label : {
    flexGrow : 1
  },
  presentation : {
    flexGrow : 4
  },
  presenter : {
    flexGrow : 2,
    minWidth: 400
  }
});

//const getFullName = data => `${data.fname} ${data.lname}`;
const getFullJobInfo = data => `${data.position} @ ${data.cname2}`;

const ScheduleItemLarge = ({ data, selected, classes, first, dialogShow }) => {
  return (
    <div className={classes.item}>

      {first && <div className={classes.label}>
        <PresentationLabel
          time={data.presentation_time}
          venue={data.presentation_venue}
          enlarge={true}
        />
      </div>}

      {first && 
        <div className={classes.presentation}><Presentation
          title={data.presentation_title}
          description={`${data.presentation_description.substr(0, 500)}...`}
          hideDescriptionOnMobile={true}
          enlarge={true}
        /></div>}

      <div className={classes.presenter}><ScheduleItemPresenter
        title={getSpeakerName(data)}
        text={getFullJobInfo(data)}
        imageSrc={getSpeakerAvatar(data, [], 1000)}
        enlarge={true}
      /></div>

    </div>
  );
};

ScheduleItemLarge.defaultProps = {
  selected: false,
  first: true
};

const enhance = compose(
  withStyles(styles),
  connect(
    null,
    { dialogShow }
  )
);

export default enhance(ScheduleItemLarge);
