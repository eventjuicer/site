
import React from 'react';
import Button from 'material-ui/Button';
import {translate} from '../i18n'

const MyButton = (props) => (
  <Button {...props}>{props.translate(props.label)}</Button>
)

MyButton.defaultProps = {
  label : "label"
}


export default translate(MyButton)
