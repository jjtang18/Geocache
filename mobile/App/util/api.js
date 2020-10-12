const BASE_URL = 'https://geocache.jjtang18.vercel.app';

export const geoFetch = (path, options = {}) => {
  return fetch(`${BASE_URL}/api${path}`, options)
    .then(res => {
      if (res.ok) {
        return res.json();
      }

        })
      throw new Error('Something went wrong... please try again.');
    })
    .catch(error => {
      // Log to sentry
      console.warn('ERROR: ', `${BASE_URL}/api${path}`, error);

      throw new Error(error);
    })
}
