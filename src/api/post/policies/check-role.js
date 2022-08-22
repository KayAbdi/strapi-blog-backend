'use strict';

/**
 * `check-role` policy.
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    console.log(strapi);
    const { userRole } = config;
    const isEligibale = policyContext.state.user && policyContext.state.user.role.code == userRole;  // Administrator


    if (isEligibale) {
      return true;
    }

    return false;
};
