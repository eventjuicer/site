import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import {dialogHide} from './redux/actions'

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';


class ResponsiveDialog extends React.PureComponent {

  render() {

    const { fullScreen, dialog, dialogHide } = this.props;

    const open = dialog && "title" in dialog;

    return open ? (

      <Dialog
          fullScreen={fullScreen}
          fullWidth={true}
          maxWidth="md"
          open={ open }
          onClose={dialogHide}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{dialog.title}</DialogTitle>
          <DialogContent>



    {dialog.content}
        <DialogContentText>
          asd
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={dialogHide} color="primary" autoFocus>
              Agree
            </Button>
            <Button onClick={dialogHide} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

    ) : null;
  }
}

ResponsiveDialog.defaultProps = {
  dialog: {},
};


ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

const enhance = compose(
  withMobileDialog(),
  connect(state => ({dialog : state.dialog}), {dialogHide} )
);

export default enhance(ResponsiveDialog);
