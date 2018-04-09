

import compose from 'recompose/compose'
import _get from 'lodash/get'
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';


import SubPageItem from './SubPageItem';
import {Logotype} from './Loaders'
import {processArrayData, getCompanyLogotype} from '../helpers'

const styles = {



}

//xs, sm, md, lg, and xl.

const GridCellContent = ({company}) => (

  <SubPageItem subpage="company" name={ _get(company, "profile.name") } id={ company.id } src={getCompanyLogotype(company)} />

)


class Avatarlist extends React.PureComponent {

render()
{

    const { filter, data, random, classes, width, mobile, limit }  = this.props;

    let featured = processArrayData(data, {filter, random, limit})

    if(width === "xs" && mobile && featured.length > mobile)
    {
      featured = featured.slice(0, mobile)
    }

    return  (
        <Grid container spacing={24}>
        {featured.map((company, i) =>
          <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>

            <GridCellContent company={company} />

          </Grid>
        )}
        </Grid>
)

}

}

Avatarlist.defaultProps = {
  assume : 8,
  filter : null,
  mobile : 6,
  limit : 12,
  random : true
}

const enhance = compose(
  connect((state) => ({width : state.app.width})),
  withStyles(styles)
)

export default enhance(Avatarlist);
