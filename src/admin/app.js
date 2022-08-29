import Favicon from './extensions/favicon.png';

export default {
  config: {
    locales: [
      'ar',
      'ru',
      'sk',
      'sv',
      'th',
      'tr',
    ],
    head: {
      favicon: Favicon,
    },
  },
  
  bootstrap(app) {
    console.log(app);
  },
};
