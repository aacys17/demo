// const jwt = require('jsonwebtoken');

// async function generateAuthToken(payload) {
//   const token = await jwt.sign(payload, process.env.JWT_SECRET, {
//     expiresIn: parseInt(process.env.ACCESS_TOKEN_EXPIRATION),
//   });
//   return token;
// }

// // async function refreshToken(payload) {
// //   const token = await jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
// //     expiresIn: parseInt(process.env.REFRESH_TOKEN_EXPIRATION),
// //   });
// //   return token;
// // }

// module.exports = {
//   generateAuthToken,
//   // refreshToken,
// };
