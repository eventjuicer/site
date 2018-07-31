import {Component} from 'react'
import fetch from 'isomorphic-unfetch'
import {connect} from "react-redux";

class Api extends Component {

  static async getInitialProps ({ req, query }) {

    const isServer = !!req

    console.log('getInitialProps called:', isServer ? 'server' : 'client')

    if (isServer) {
      // When being rendered server-side, we have access to our data in query that we put there in routes/item.js,
      // saving us an http call. Note that if we were to try to require('../operations/get-item') here,
      // it would result in a webpack error.
      return { texts: query.texts }
    } else {
      // On the client, we should fetch the data remotely
      const res = await fetch('/_data/texts', {headers: {'Accept': 'application/json'}})
      const json = await res.json()
      return { texts: json }
    }
  }

  render () {

    const { texts } = this.props

    return (

      <div className='item'>
        {Object.keys(texts).map(lang => <div key={lang}><h1>{lang}</h1>

          {Object.keys(texts[lang]).map(key => <p key={key}>{key}{texts[lang][key]}</p>)}

        </div>)}
      </div>


    )
  }
}

export default connect(null, null)(Api)
