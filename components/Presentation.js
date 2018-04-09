
 // <Tags tags={_get(company.profile, "keywords")} />



import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose'
import classNames from 'classnames'


import Typography from './MyTypography'
import Tags from './Tags'

/*

avatar: "https://d3vv6lp55qjaqc.cloudfront.net/items/012C1Q403J3d0D0y2H2Z/fot_a-kiedrowska.jpg"
bio : "Badaczka user experience z wieloletnim doświadczeniem w projektach jakościowych i ilościowych. Po godzinach podróżuje, biega na nartach i stepuje. Współpracowała z takimi klientami jak Bank ING, BZ WBK, Credit Agricole, Grant Thornton, Tauron, oraz Aviva."
cname2 : "Edisonda"
fname : "Anna"
id : 71840
lname : "Kiedrowska"
ns : "presenter"
position : ""
presentation_description : ""
presentation_time : ""
presentation_title : ""
presentation_venue : ""

*/





import Card, { CardContent, CardHeader } from 'material-ui/Card';
//import Button from 'material-ui/Button';


const styles = {

}

const Presentation = ({data}) => {

  const {
    bio,
    cname2,
    fname,
    lname,
    position,
    presentation_description,
    presentation_time,
    presentation_venue,
    presentation_title
  } = data;

  return (

<div>

    {presentation_venue && <Tags tags={[presentation_venue]} />}

    <div>

      <Typography>{presentation_title}</Typography>

      <Typography>{presentation_description}</Typography>

    </div>

    <div>

      <Typography>{`${fname} ${lname}`}</Typography>

      <Typography>{`${position} ${cname2}`}</Typography>

      <Typography>{bio}</Typography>

    </div>

  </div>)
}



Presentation.defaultProps = {
  data : {}
}


const enhance = compose(
  withStyles(styles)
)

export default enhance(Presentation)
