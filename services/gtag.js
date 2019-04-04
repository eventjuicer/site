export const GA_TRACKING_ID = 'GTM-MRFVC8';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

export const conversion = ({ label }) => {

  const callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };

  window.gtag('event', 'conversion', {
    'send_to': 'AW-842805719/twaXCK3M0nMQ1-PwkQM',
    'event_callback': callback
  });
};
