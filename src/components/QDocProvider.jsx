import React, { useEffect, useState } from "react";

import connect from "./connect";

export const QDocContext = React.createContext();

const enigmaPromise = async () => {
  //Establish the Qlik Sense engine session connection. IApp
  const enigmaApp = await connect({
    webIntegrationId: "vK7J44nRiKAbEvuKfhP9LIq-mOE7nZVr",
    url: "alalmaktoum.ap.qlikcloud.com",
    appId: "bb400ee5-db11-4a9c-b2b6-4f8d47a49cab",
  });

  // //Enigma App is a QIX instance //Enigma App is a QIX instance
  // const allInfos = await app.getAllInfos();
  return enigmaApp; //Initiates a new Embed instance with base configuration and preloaded types.
};
export const QDocProvider = ({ children }) => {
  const [enigma, setEnigma] = useState(null);

  const init = async () => {
    const _enigma = await enigmaPromise();
    // createsession object - get layout - see onenote Layout
    setEnigma(_enigma);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {enigma && (
        <div>
          <QDocContext.Provider value={enigma}>{children}</QDocContext.Provider>
        </div>
      )}
    </>
  );
};

export default QDocProvider;
