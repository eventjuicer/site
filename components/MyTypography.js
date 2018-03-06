import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames'

const styles = theme  => ({


  h2 : {
    fontSize : '3rem',
    textTransform: 'uppercase',
    fontWeight : 100,
    marginBottom: '2rem',
  //  textAlign: 'center'
  },

  centered : {
    textAlign: 'center'
  },

  section : {

    marginTop : '1rem',
    marginBottom : '1rem'

  }

});


export const H1C = withStyles(styles)((props) => (<Typography variant="headline" component="h2" className={classNames(props.classes.h2, props.classes.centered)}>{props.children}</Typography>))

export const H1 = withStyles(styles)((props) => (<Typography variant="headline" component="h2" className={props.classes.h2}>{props.children}</Typography>))

export const H2 = withStyles(styles)((props) => (<Typography variant="headline" component="h2" className={props.classes.h2}>{props.children}</Typography>))

export const H3 = withStyles(styles)((props) => (<Typography variant="title" component="h3">{props.children}</Typography>))

export const H4 = withStyles(styles)((props) => (<Typography>{props.children}</Typography>))

export const H5 = withStyles(styles)((props) => (<Typography>{props.children}</Typography>))

export const P = withStyles(styles)((props) => (<Typography component="p">{props.children}</Typography>))

export const P1 = withStyles(styles)((props) => (<Typography component="p">{props.children}</Typography>))

export const P2 = withStyles(styles)((props) => (<Typography component="p">{props.children}</Typography>))

export const Section = withStyles(styles)((props) => (<div className={props.classes.section}>{props.children}</div>))
