



import _chunk from 'lodash/chunk'
import _get from 'lodash/get'

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import withWidth from 'material-ui/utils/withWidth';


import SubPageItem from './SubPageItem';



//xs, sm, md, lg, and xl.

class Avatarlist extends React.Component {

render()
{

    const { filter, data }  = this.props;

    const featured  = Array.isArray(data) ? data.slice(0, 4) : [];



    return   <Grid container spacing={24}>{featured.map((company, i) =>
      <Grid key={i} item xs={6} sm={6} md={4} lg={3} xl={2}>
        <SubPageItem subpage="company" name={ _get(company, "profile.name") } id={ company.id } src={_get(company, "profile.logotype")} />
      </Grid>
    )}</Grid>

}

}

Avatarlist.defaultProps = {
  filter : null
}

export default withWidth()(Avatarlist);
