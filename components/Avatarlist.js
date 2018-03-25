


import compose from 'recompose/compose'
import _shuffle from 'lodash/shuffle'
import _get from 'lodash/get'


import withWidth from 'material-ui/utils/withWidth';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';


import SubPageItem from './SubPageItem';

const styles = {



}

//xs, sm, md, lg, and xl.

class Avatarlist extends React.PureComponent {

render()
{

    const { filter, data, resource, classes, width, mobile }  = this.props;

    let featured  = filter ? data.filter(item => filter(item)) : data;

    if(width === "xs" && mobile && featured.length > mobile)
    {
      featured = featured.slice(0, mobile)
    }

    return  (
        <Grid container spacing={24}>
        {featured.map((company, i) =>
          <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <SubPageItem subpage="company" name={ _get(company, "profile.name") } id={ company.id } src={_get(company, "profile.logotype")} />
          </Grid>
        )}
        </Grid>
)

}

}

Avatarlist.defaultProps = {
  filter : null,
  resource : "",
  mobile : 6
}

const enhance = compose(
  withWidth(),
  withStyles(styles)
)

export default enhance(Avatarlist);
