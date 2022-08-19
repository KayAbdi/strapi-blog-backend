'use strict';

/**
 * `is-admin` policy.
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    const isEligibale = policyContext.state.user && policyContext.state.user.role.code == 'Adminstrator';  // Administrator


    if (isEligibale) {
      return true;
    }

    return false;
};
