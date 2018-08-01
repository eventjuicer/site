import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import find from 'lodash/find';
import _get from 'lodash/get';

//import {translate} from '../i18n'
import Person from './PersonSlim';

import Card from './MyCardSlim';

import { resourceFetchRequest as resourceFetchRequestAction } from './redux/actions';

const styles = theme => ({
  root: {}
});

class BoothInfo extends React.Component {
  // componentDidMount()
  // {
  //   this.props.resourceFetchRequest("tickets");
  // }

  render() {
    const { formdata } = this.props;
    const cname2 = _get(formdata, 'company.profile.name');

    return (
      <div>
        {cname2 ? (
          <Card
            primary={false}
            title={cname2}
            text={
              <div
                dangerouslySetInnerHTML={{
                  __html: _get(formdata, 'company.profile.about')
                }}
              />
            }
            imageSrc={_get(formdata, 'company.profile.logotype')}
          />
        ) : null}

        <Person />
      </div>
    );
  }
}

const enhance = compose(
  //  translate,
  withStyles(styles),
  connect(
    state => ({
      boothsSelected: state.boothsSelected
    }),
    { resourceFetchRequest: resourceFetchRequestAction }
  )
);

export default enhance(BoothInfo);
