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
  // console.log(allInfos);

  // const getLayout = await app.getObject({ NCtK: allInfos[0].qId }).then((item) => {
  //   return item.getLayout();
  // });
  // console.log(typeof getLayout);
  //Enigma App is a QIX instance //Enigma App is a QIX instance

  return baseConfig(app); //Initiates a new Embed instance with base configuration.
};
export const QDocProvider = ({ children }) => {
  const [nebula, setNebula] = useState(null);

  const init = async () => {
    const _nebula = await nebulaPromise();

    setNebula(_nebula);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {!QDocContext && <div>Connecting to Qlik...</div>}
      {QDocContext && <QDocContext.Provider value={nebula}>{children}</QDocContext.Provider>}
    </>
  );
};

QDocProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
QDocProvider.defaultProps = [];

export default QDocProvider;
