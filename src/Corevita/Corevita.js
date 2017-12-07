import React from 'react';

import './Corevita.css';

const Corevita = ({ isHidden }) => (
  <iframe
    hidden={isHidden}
    title="Corevita google docs"
    className="Corevita-iframe"
    src="https://docs.google.com/document/d/e/2PACX-1vT3-V-geI1e0RaEVgiDNEqH80IGL2j8fXPRvG19oFk-_Hsy_npdjiRWw1LBAwU1c7z9hH8bLKMvRie-/pub?embedded=true"
  />
);

export default Corevita;
