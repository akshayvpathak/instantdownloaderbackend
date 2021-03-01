/* eslint-disable no-use-before-define */
const axios = require('axios');

exports.InstagramReelInfo = async (url) => await InstagramReelInfo(url);

async function InstagramReelInfo(url) {
  try {
    const res = await axios.get(url, {
      params: {
        __a: 1,
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
}
