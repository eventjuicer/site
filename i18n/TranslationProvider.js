import React, {Children} from 'react';
import PropTypes from 'prop-types';
import Polyglot from 'node-polyglot';
import { connect } from 'react-redux';


export const Context = React.createContext({translate : key => key });


const TranslationProvider = ({locale, messages, children}) => {

  const polyglot = new Polyglot({
        locale,
        phrases: locale in messages ? messages[locale] : {}
        //onMissingKey : () => ()
  });

  return (
    <Context.Provider value={{locale : locale, translate : polyglot.t.bind(polyglot) }}>
      {Children.only(children)}
    </Context.Provider>
  )

}

TranslationProvider.defaultProps = {
  locale : "pl"
}

const mapStateToProps = state => ({ locale: state.app.locale });

export default connect(mapStateToProps)(TranslationProvider)









//
//
// const withI18nContext = withContext(
//     {
//         translate: PropTypes.func.isRequired,
//         locale: PropTypes.string.isRequired,
//     },
//     ({ locale, messages = {} }) => {
//
//       console.log("state locale", locale)
//
//         /*children, dispatch*/
//         const userMessages = messages[locale] || {};
//
//
//
//         return {
//             locale,
//             translate: polyglot.t.bind(polyglot),
//         };
//     }
// );
//
// const TranslationProvider = ({children}) => Children.only(children)
//
// TranslationProvider.propTypes = {
//     locale: PropTypes.string.isRequired,
//     messages: PropTypes.object,
//     children: PropTypes.element,
// };
//
// // TranslationProvider.contextTypes = {
// //   translate: PropTypes.func.isRequired,
// //   locale: PropTypes.string.isRequired,
// // }
//
//
// export default compose(connect(mapStateToProps), withI18nContext)(
//     TranslationProvider
// );
