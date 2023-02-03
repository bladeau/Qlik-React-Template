import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import embed from "./configure";
import connect from "./connect";
export const QDocContext = React.createContext();

const nebulaPromise = async () => {
  //Establish the Qlik Sense engine session connection. IApp
  const app = await connect({
    webIntegrationId: "vK7J44nRiKAbEvuKfhP9LIq-mOE7nZVr",
    url: "alalmaktoum.ap.qlikcloud.com",
    appId: "bf6b6f93-c574-4f68-aaed-2cee21794d30",
  });

  return embed(app); //Initiates a new Embed instance using the specified enigma app.
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
    <QDocContext.Provider
      value={{
        nebula,
      }}
    >
      {children}
    </QDocContext.Provider>
  );
};

QDocProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
QDocProvider.defaultProps = [];

export default QDocProvider;
