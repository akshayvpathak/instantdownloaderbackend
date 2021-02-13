const { Router } = require('express');
const bodyParser = require('body-parser');

const { corsWithOptions } = absoluteRequire('modules/cors');
const { FindDistanceByPincode, FindDistanceByLatLong } = absoluteRequire(
  'controller/distance'
);

const router = Router();
router.use(bodyParser.json());

router
  .route('/pincode/:pincode1/:pincode2')
  .get(corsWithOptions, FindDistanceByPincode);
router
  .route('/latlong/:lat1/:long1/:lat2/:long2')
  .get(corsWithOptions, FindDistanceByLatLong);
module.exports = router;
