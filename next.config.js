

const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

const isProd = process.env.NODE_ENV === 'production'

module.exports = (phase, {defaultConfig}) => {

  const { parsed } = require('dotenv').config(
    {
      path : phase === PHASE_DEVELOPMENT_SERVER ? '.env' : '.env.production'
    }
  );

  return {
    serverRuntimeConfig : parsed,
    publicRuntimeConfig : parsed,
//    assetPrefix: isProd ? '' : ''
  }


}
