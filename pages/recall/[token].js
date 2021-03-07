import React, {useEffect} from 'react'
import {
    connect,
    reduxWrapper,
    configure,
    getUserByToken,
    Wrapper,
    Loading,
    useDispatch,
    setUserToken
  } from 'eventjuicer-site-components';
  
import {useRouter} from 'next/router'

  import settings from '../../settings';
  
  const Recall = ({token, goto}) => {

    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(()=>{
    
        if(token){
            dispatch(setUserToken(token))
            router.push(goto)
        }
    })

     return  (
     <Wrapper style={{paddingTop: 100, paddingBottom: "80vh"}}>
         {token ? <Loading /> : <h1>Error. Bad URL.</h1>}
    </Wrapper>
    )

  }

Recall.defaultProps = {
    token: ""
}

Recall.disableLayout = true;

export const getServerSideProps = reduxWrapper.getServerSideProps(async (props) => {

    const {query: {token, goto}} = props;

    const user = await getUserByToken(settings.system.service_api, token)

    await configure(props, {
        settings: settings
    })
    return {
        props: {
            token: token+"",
            goto: goto+""
        },
    }  
})
  
  
export default connect()(Recall);
  
  
  
  