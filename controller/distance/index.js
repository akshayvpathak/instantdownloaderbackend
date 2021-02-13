/* eslint-disable no-use-before-define */
const { StateName } = absoluteRequire('modules/utilis/pincode');
const { LocationInfo } = absoluteRequire('repositories/pincode');
const { GetDistance } = absoluteRequire('modules/utilis/distancefinder');
exports.FindDistanceByPincode = (req, res, next) => {
  FindDistanceByPincode(req, res, next);
};
exports.FindDistanceByLatLong = (req, res, next) => {
  FindDistanceByLatLong(req, res, next);
};

async function FindDistanceByPincode(req, res, next) {
  const { pincode1, pincode2 } = req.params;
  try {
    const state1 = await StateName(pincode1);
    const state2 = await StateName(pincode2);
    if (state1 === 'WrongPinCode' || state2 == 'WrongPinCode') {
      const err = new Error('Pincode is Wrong');
      throw err;
    }
    const location1 = await LocationInfo(pincode1, state1);
    const location2 = await LocationInfo(pincode2, state2);
    if (location1.length === 0 || location2.length === 0) {
      const err = new Error('Sorry Data is Not Available');
      throw err;
    }
    const totalloaction1 = location1.length;
    const totallocation2 = location2.length;
    const lat1 = location1[totalloaction1 - 1].location.coordinates[1];
    const long1 = location1[totalloaction1 - 1].location.coordinates[0];
    const lat2 = location2[totallocation2 - 1].location.coordinates[1];
    const long2 = location2[totallocation2 - 2].location.coordinates[0];
    const distance = await GetDistance(lat1, long1, lat2, long2);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      distance,
    });
  } catch (err) {
    next(err);
  }
}

async function FindDistanceByLatLong(req, res, next) {
  // eslint-disable-next-line object-curly-newline
  const { lat1, long1, lat2, long2 } = req.params;
  try {
    const distance = await GetDistance(lat1, long1, lat2, long2);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      success: true,
      distance,
    });
  } catch (err) {
    next(err);
  }
}
