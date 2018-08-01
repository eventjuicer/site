import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { dialogHide } from './redux/actions';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from 'material-ui/Dialog';

class ResponsiveDialog extends React.PureComponent {
  render() {
    const { fullScreen, forcefs, dialog, dialogHide } = this.props;

    const open = dialog && 'title' in dialog;

    return open ? (
      <Dialog
        fullScreen={fullScreen || dialog.forcefs}
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={dialogHide}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{dialog.title}</DialogTitle>
        <DialogContent>
          {dialog.intro && (
            <DialogContentText>{dialog.intro}</DialogContentText>
          )}

          {dialog.content}
        </DialogContent>
        <DialogActions>
          {dialog.buttons &&
            dialog.buttons.map((item, idx) => (
              <Button key={idx} onClick={item.action} color="primary" autoFocus>
                {item.label}
              </Button>
            ))}

          <Button onClick={dialogHide} color="secondary">
            Zamknij
          </Button>
        </DialogActions>
      </Dialog>
    ) : null;
  }
}

ResponsiveDialog.defaultProps = {
  dialog: {
    intro: null,
    buttons: [],
    forcefs: false
  }
};

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
  //  name : PropTypes.string.isRequired
};

const enhance = compose(
  withMobileDialog(),
  connect(
    state => ({ dialog: state.dialog }),
    { dialogHide }
  )
);

export default enhance(ResponsiveDialog);
