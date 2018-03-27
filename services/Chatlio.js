
import {translate} from '../i18n'
import Button from 'material-ui/Button';

//https://chatlio.com/docs/api-v1/


class Chatlio extends React.PureComponent {

  componentDidMount(){

    if(window.__CHATLIO_CUSTOM_EVENT_SET__)
    {
      return;
    }

    document.addEventListener( 'chatlio.firstMessageSent', this.handleChatlioFirstMessage );
    document.addEventListener( 'chatlio.ready', this.handleChatlioFirstMessage );

    window.__CHATLIO_CUSTOM_EVENT_SET__ = true;

  }

  componentWillUnmount() {

    if(!window.__CHATLIO_CUSTOM_EVENT_SET__)
    {
      return;
    }

    document.removeEventListener( 'chatlio.firstMessageSent', this.handleChatlioFirstMessage );
    document.removeEventListener( 'chatlio.ready', this.handleChatlioFirstMessage );
  }

  chatlioShow = () => {

    const {hello, translate} = this.props;

    if(!window._chatlio)
    {
      return;
    }

    // window._chatlio.fullScreen();
    window._chatlio.show({expanded: true});

    if(hello)
    {
      window._chatlio.send(translate(hello));
    }

  }

  handleChatlioFirstMessage = event => {
    // window._chatlio.identify(getUserData('id'), {
    //   name: getCompanyName(),
    //   email: getUserData('email'),
    //   representative: getUserFullName()
    //   // plan: 'king',
    //   // favoriteColor: 'black'
    // });
  };

  render() {

    const {button, translate} = this.props;

    if(!button)
    {
      return null;
    }

    return <Button variant="raised" onClick={() => this.chatlioShow()} color="primary">{translate("common.chat")}</Button>;
  }
}

Chatlio.defaultProps = {
  hello : "services.chatlio.hello",
  button : true
}

export default translate(Chatlio);
