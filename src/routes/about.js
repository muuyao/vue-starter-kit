const aboutRoute = {
  path: '/about',
  component: (resolve) => {
    require.ensure(['../views/about'], () => {
      /* eslint global-require: "off" */
      resolve(require('../views/about'));
    });
  }
};

export default aboutRoute;
