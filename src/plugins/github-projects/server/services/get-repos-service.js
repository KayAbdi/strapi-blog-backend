'use strict';

const { request } = require("@octokit/request");
const { axios } = require("axios");

module.exports = ({ strapi }) => ({
  getPublicRepos: async () => {
    const result = await request("GET /user/repos", {
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      type: "PUBLIC",
    });
    // id, name, shortDescription, url, longDescription
    // https://raw.githubusercontent.com/KayAbdi/strapi-blog-backend/master/README.md
    return Promise.all(
      result.data.map(async (item) =>{
        const {id,  name, description, html_url, owner, default_branch } =  item;
        const readmeUrl =  `https://raw.githubusercontent.com/${owner.login}/${name}/${default_branch}/README.md`;
        const longDescription = (await axios.get(readmeUrl)).data;
        return {
          id, 
          name, 
          shortDescription: description, 
          url: html_url, 
          longDescription,
        };
      })
    );
  },
});
