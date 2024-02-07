const clientID = "Acuy17p2LcOf9RMv8SUVBb3wic3FPEP2NHFFqfSCBRFrNFdmbC1JQ0w8HIKRxW3RDy2R8QTL93eptFYl";
const merchantIDOrEmail = "identity_seller@paypal.com";
const auth1 = Buffer.from('{"alg":"none"}').toString("base64");
const auth2 = Buffer.from(`{"iss":${clientID},"payer_id":${merchantIDOrEmail}}`).toString("base64");
const authAssertionHeader = `${auth1}.${auth2}.`
