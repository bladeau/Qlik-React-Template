import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import baseConfig from "./configure";
import connect from "./connect";

export const QDocContext = React.createContext();

const nebulaPromise = async () => {
  //Establish the Qlik Sense engine session connection. IApp
  const app = await connect({
    webIntegrationId: "vK7J44nRiKAbEvuKfhP9LIq-mOE7nZVr",
    url: "alalmaktoum.ap.qlikcloud.com",
    appId: "bb400ee5-db11-4a9c-b2b6-4f8d47a49cab",
  });

  // //Enigma App is a QIX instance //Enigma App is a QIX instance//
  // const allInfos = await app.getAllInfos();

  //Enigma App is a QIX instance //Enigma App is a QIX instance

  return baseConfig(app); //Initiates a new Embed instance with base configuration and preloaded types.
};
export const QDocProvider = ({ children }) => {
  const [nebula, setNebula] = useState(null);

  const init = async () => {
    const _nebula = await nebulaPromise();
    // createsession object - get layout - see onenote Layout
    setNebula(_nebula);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {!QDocContext && <div>Connecting to Qlik...</div>}
      {QDocContext && <QDocContext.Provider value={nebula}>ContextTop{children}ContextBottom</QDocContext.Provider>}
    </>
  );
};

QDocProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
QDocProvider.defaultProps = [];

export default QDocProvider;
