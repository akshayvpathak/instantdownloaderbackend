/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
const { InstagramReelInfo } = absoluteRequire('repositories/API');
exports.GetVideoUrl = (req, res, next) => {
  GetVideoUrl(req, res, next);
};

async function GetVideoUrl(req, res, next) {
  try {
    const { url } = req.body;
    const newurl = url.split('?');
    const reelinfo = await InstagramReelInfo(newurl[0]);
    console.log(reelinfo);
    if (!reelinfo.data) {
      throw FailureMessage();
    }
    const {
      display_url,
      video_url,
      is_video,
    } = reelinfo.data.graphql.shortcode_media;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      display_url,
      video_url,
      is_video,
    });
  } catch (err) {
    next(err);
  }
}

function FailureMessage() {
  return new Error('Sorry! Unable to Process Request!');
}
