



const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
const {IgnorePlugin} = require('webpack')


module.exports = (phase, {defaultConfig}) => ({


  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {

      config.plugins.push(
        new IgnorePlugin(/^raven$/)
      )

      if (ANALYZE) {
        config.plugins.push(new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        }))
      }

      return config
  },

})



//
//
//
// const isProd = process.env.NODE_ENV === 'production'
//
// module.exports =  => {
//
//   const { parsed } = require('dotenv').config(
//     {
//       path : phase === PHASE_DEVELOPMENT_SERVER ? '.env' : '.env.production'
//     }
//   );
//
//   return {
//     serverRuntimeConfig : parsed,
//     publicRuntimeConfig : parsed,
// //    assetPrefix: isProd ? '' : ''
//   }
//
//
// }
