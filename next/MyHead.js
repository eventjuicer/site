

import NextHead from 'next/head';


import { string } from 'prop-types';
import { translate } from '../i18n'
import { fullUrl, prepareForTranslate, canonical } from '../helpers'

const GTM = "GTM-MRFVC8"


const MyHead = ({title, titleLabel, description, descriptionLabel, url, image, width, height, fb_appid, translate, children}) => {

  const titleLabelParams = prepareForTranslate(titleLabel)
  const descriptionLabelParams = prepareForTranslate(descriptionLabel)

  const tTitle = titleLabel && titleLabelParams.str ? translate(titleLabelParams.str, titleLabelParams.params) : title
  const tDescription = descriptionLabel && descriptionLabelParams ? translate(descriptionLabelParams.str, descriptionLabelParams.params) : description

  const prefixedUrl = fullUrl(url)

  return (
    <NextHead>

      <meta charSet="UTF-8" />

      <script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM}`} />

      <script  dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)};
              gtag('js', new Date());
              gtag('config', '${GTM}');
            `
      }} />

      <title>{ tTitle }</title>
      <meta name="description" content={ tDescription } />

      {/* <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" /> */}
      <meta property="og:url" content={ prefixedUrl } />
      <meta property="og:title" content={ tTitle || ''} />
      <meta property="og:description" content={ tDescription } />
      <meta name="twitter:site" content={ prefixedUrl } />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ image } />
      <meta property="og:image" content={ image } />

      <meta property="og:image:width" content={ width } />
      <meta property="og:image:height" content={ height } />

      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content={fb_appid} />

      <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
 
      <link rel="canonical" href={ canonical(prefixedUrl) } />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,300,400,500,700" />

     <meta name="google" content="notranslate" />

    {children}

    </NextHead>
  );
}

MyHead.defaultProps = {

  title: "",
  titleLabel : "event.opengraph.name",

  width : 960,
  height : 504,
  fb_appid : "222959121587772",

  description: "",
  descriptionLabel : "event.opengraph.description",

  image: fullUrl("/static/og_teh_default.png"),
  url : fullUrl("/")

}


MyHead.propTypes = {
//  title: string,
  description: string,
  url: string,
  image: string,
};

export default translate(MyHead);
