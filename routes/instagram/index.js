const { Router } = require('express');
const bodyParser = require('body-parser');

const { GetVideoUrl } = absoluteRequire('controller/Instagram');
const { corsWithOptions } = absoluteRequire('modules/cors');
const router = Router();
router.use(bodyParser.json());

router.route('/reel').post(corsWithOptions, GetVideoUrl);
module.exports = router;
