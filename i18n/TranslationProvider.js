import { Children } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'recompose';

import withPolyglot from './withPolyglot'

const TranslationProvider = ({ children }) => Children.only(children);

TranslationProvider.propTypes = {
    locale: PropTypes.string.isRequired,
    messages: PropTypes.object.isRequired,
    children: PropTypes.element,
};

const enhance = compose(
  connect(state => ({ locale: state.app.locale })),
  withPolyglot
)

export default enhance(TranslationProvider);
