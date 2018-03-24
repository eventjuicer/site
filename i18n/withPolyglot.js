


import PropTypes from 'prop-types';
import { withContext } from 'recompose';
import Polyglot from 'node-polyglot';
import defaultMessages from './messages';

const withI18nContext = withContext(
    {
        translate: PropTypes.func.isRequired,
        locale: PropTypes.string.isRequired,
    },
    ({ locale, messages = {} }) => {
        const userMessages = messages[locale] || {};
        const polyglot = new Polyglot({
            locale,
            phrases: { ...defaultMessages, ...userMessages },
        });

        return {
            locale,
            translate: polyglot.t.bind(polyglot),
        };
    }
);


export default withI18nContext;
