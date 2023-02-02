import { Auth, AuthType, Config } from "@qlik/sdk";

const enigma = require("enigma.js");
const schema = require("enigma.js/schemas/12.20.0.json");
const SenseUtilities = require("enigma.js/sense-utilities");


// Qlik Core:  ws://<host>:<port>/app/<data-folder>/<app-name>
// QCS:       wss://<tenant-url>.<region>.qlikcloud.com/app/<app-GUID>
// QSEoK:     wss://<host>/app/<app-GUID>
// QSEoW:     wss://<host>/<virtual-proxy-prefix>/app/<app-GUID>


export const getAuthInstance = async ({ webIntegrationId, host }) => {
  const authInstance = new Auth({
    authType: AuthType.WebIntegration,
    host: host,
    isSecure: true,
    webIntegrationId: webIntegrationId,
    autoRedirect: true, // default false
  });
  const isAuth = await authInstance.isAuthenticated();
  if (!isAuth) await authInstance.authenticate();
  return authInstance;
};


























// const config = {
//   host: tenantUrl,
//   secure: true,
//   port: 443,
//   prefix: "",
//   appId: "bf6b6f93-c574-4f68-aaed-2cee21794d30",
// };



// //const url = SenseUtilities.buildUrl(config);
// const session = enigma.create({ schema, url, suspendOnClose: true });

// // open doc and return promise which will resolve to doc
// export const openDoc = (paramAppID) => session.open().then((global) => global.openDoc(paramAppID));

// // close session
// export const closeSession = () => session.close();
