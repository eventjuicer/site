

//https://github.com/zeit/next.js/issues/1852

import Raven from 'raven-js';


const options = {
  autoBreadcrumbs: true,
  captureUnhandledRejections: true,
};

let IsomorphicRaven = null;

if (process.browser === true) {
  IsomorphicRaven = Raven;
  IsomorphicRaven.config(SENTRY_PUBLIC_DSN, {
    ...options,
  }).install();
} else {
  // https://arunoda.me/blog/ssr-and-server-only-modules
  IsomorphicRaven = eval("require('raven')");
  IsomorphicRaven.config(
    SENTRY_DSN,
    options,
  ).install();
}

export default IsomorphicRaven;
