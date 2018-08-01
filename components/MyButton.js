import React from 'react';
import Button from 'material-ui/Button';
import { translate } from '../i18n';

const MyButton = ({ label, translate, ...rest }) => (
  <Button {...rest}>{translate(label)}</Button>
);

MyButton.defaultProps = {
  label: 'label'
};

export default translate(MyButton);
