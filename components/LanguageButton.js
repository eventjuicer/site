import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import classNames from 'classnames'
import Button from '@material-ui/core/Button';

import {translate, changeLocale, availableLocales} from '../i18n'

import Language from 'material-ui-icons/Language';

import { withStyles } from '@material-ui/core/styles';

import {
  dialogShow,
  dialogHide
} from './redux/actions';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});


const locales = []

const LanguageButton = ({ label, classes, locale, oldLocale, dialogShow, dialogHide, changeLocale, translate }) => (
  <Button
    variant="outlined"
    onClick={() => dialogShow({
        title: label,
        content: <div>{

          availableLocales.map( loc => <Button variant="outlined" onClick={() => {

            changeLocale(loc)
            dialogHide()

          }} color="inherit">{translate(`common.locales.${loc}`)} </Button>)

        }</div>,
        buttons: []
    })}
    color="inherit"
  >
  <Language className={classNames(classes.leftIcon, classes.iconSmall)} />  { translate(`common.locales.${locale}`) }
  </Button>
)



LanguageButton.defaultProps = {
  label: 'LANGUAGE'
};

const enhance = compose(
  withStyles(styles),
  connect(
    (state) => ({oldLocale : state.app.locale}),
    {dialogShow, dialogHide, changeLocale}
  ),
  translate
);

export default enhance(LanguageButton);
