import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import classNames from 'classnames'
import Button from '@material-ui/core/Button';

import {translate} from '../i18n'

import Icon from '@material-ui/icons/VpnKey';

import { withStyles } from '@material-ui/core/styles';
import AccountForm from '../formik/AccountForm'

import {
  dialogShow
} from './redux/actions';


const styles = theme => ({
  selectors : {
    margin : 40,
  },
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


const AccountLogin = ({ label, classes, locale, oldLocale, dialogShow, dialogHide, changeLocale, translate }) => (
  <Button
  //  variant="outlined"
    onClick={() => dialogShow({
        title: translate(label),
        content: <div style={{marginTop: 40}}>
        <AccountForm 
          data={{}}
          fields={{"email" : 1}}
          url="https://api.eventjuicer.com/v1/public/hosts/targiehandlu.pl/qrlogin"
        />
        </div>,
        buttons: []
    })}
    color="inherit"
  >
  <Icon className={classNames(classes.leftIcon, classes.iconSmall)} />
  {/* { translate(`common.locales.${locale}`) } */}
  </Button>
)



AccountLogin.defaultProps = {
  label: 'exhibitors.account.title'
};

const enhance = compose(
  withStyles(styles),
  connect(
    (state) => ({oldLocale : state.app.locale}),
    {dialogShow}
  ),
  translate
);

export default enhance(AccountLogin);
