import React from 'react';
import PropTypes from 'prop-types';
import _sample from 'lodash/sample';
import _random from 'lodash/random';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import IconQuote from '@material-ui/icons/FormatQuote';

import Typography from './MyTypography';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    maxWidth: 800,
    padding: 30,
    backgroundColor: 'transparent'
  },

  icon: {
    width: 100,
    height: 100,
    display: 'inline-block',
    position: 'relative',
    top: 30,
    color: 'rgb(255,255,255,0.6)'
  },

  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 150,
    height: 150
  },

  person: {
    color: 'rgba(255, 255, 255, 0.67)',
    fontSize: '1.275rem'
    //     fontWeight: 500,
    //     lineHeight: '1.71429em',
  }
};

const opinions = [
  {
    text: `After speaking to several local e-commerce industry players in the CEE region and asking which is the top event in the CEE region, Targi eHandlu came up from pretty much anyone we spoke to.
  (...) Event itself is the best event in the CEE region to our knowledge, looking forward to be visiting and sponsoring next year.`,
    mobileText: `event itself is the best event in the CEE region to our knowledge, looking forward to be visiting and sponsoring next year.`,
    person: 'Jussi Lindberg, Adyen',
    avatar:
      'https://d3vv6lp55qjaqc.cloudfront.net/items/3D3b2X0C253a2x0t0F2C/jl.jpg'
  },

  {
    text: `...fantastyczne wydarzenie, zarówno biorąc pod uwagę jego tematykę i uczestników (...)
Dobrze zaplanowana część targowa w połączeniu z sesjami eksperckimi sprawiają, że całe wydarzenie zyskuje na atrakcyjności (...)
Nasz udział w tym wydarzeniu uważam za świetną inwestycję`,
    mobileText: `...fantastyczne wydarzenie, zarówno biorąc pod uwagę jego tematykę i uczestników, których gromadzi, jak również poziom samej imprezy`,
    person: 'Katarzyna Baranowska',

    avatar:
      'https://d3vv6lp55qjaqc.cloudfront.net/items/1y1Q0i093C1h221T100B/kb.jpg'
  },
  {
    text: `Polecamy zaopatrzyć się w hektolitry wody, bo po kilku godzinach intensywnych rozmów łatwo stracić głos ;)
A tak na serio - Targi eHandlu to świetna okazja do skonfrontowania swojego biznesu z oczekiwaniami klientów i doświadczeniami osób z branży. Rozmowy (i te kuluarowe, i te bardziej oficjalne) przyniosły realne efekty. Do dziś "zbieramy żniwo" ;) po Targach. `,
    mobileText: `...świetna okazja do skonfrontowania swojego biznesu z oczekiwaniami klientów`,
    person: 'Hanna Zaborska',
    avatar:
      'https://d3vv6lp55qjaqc.cloudfront.net/items/0O0F1G3c0p2A3g3s0D0U/hz.jpg'
  },

  {
    text: `Z Targami e-Handlu jestem od pierwszej edycji, kiedy to siedzieliśmy przy okrągłych stolikach w Iglicy MTP w Poznaniu.
  Od tamtej pory każda kolejna edycja jest bardziej dojrzała, a co najważniejsze poza samymi targami jest również potężna dawka merytorycznej wiedzy podczas prezentacji.`,
    mobileText: `...potężna dawka merytorycznej wiedzy podczas prezentacji.`,
    person: 'Błażej Abel, Landingi',
    avatar:
      'https://d3vv6lp55qjaqc.cloudfront.net/items/2R2T2f0U231X213j3v3g/ba.jpg'
  }
];

class Reviews extends React.PureComponent {
  state = {
    opinion: {}
  };

  isBigScreen() {
    const { width } = this.props;
    return width === 'xl' || width === 'lg';
  }

  componentDidMount() {
    const opinion = _sample(opinions);
    this.setState({ opinion });
  }

  render() {
    const { classes, width } = this.props;
    const { opinion } = this.state;

    return (
      <div className={classes.row}>
        {'text' in opinion ? (
          <Card className={classes.card} elevation={0}>
            <CardContent>
              <Typography
                template="heroOpinion"
                icon={<IconQuote className={classes.icon} />}
                //    iconAfter={ <IconQuote className={classes.icon} /> }
              >
                {this.isBigScreen() ? opinion.text : opinion.mobileText}
              </Typography>
            </CardContent>
            <CardHeader
              avatar={
                <Avatar
                  alt={opinion.person}
                  src={opinion.avatar}
                  className={classNames(classes.avatar, classes.bigAvatar)}
                />
              }
              //  action={
              // <IconButton>
              //   <MoreVertIcon />
              // </IconButton>
              //    }
              title={opinion.person}
              classes={{ title: classes.person }}
              //  subheader="September 14, 2016"
            />
          </Card>
        ) : null}
      </div>
    );
  }
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired
};

const enhance = compose(
  withStyles(styles),
  connect(state => ({ width: state.app.width }))
);

export default enhance(Reviews);
