import React from 'react';
import Link from "../Link";

const HeaderLinks = () => {
  return (
    <>
      {['LE COTÉ LUMINEUX', 'LE COTÉ OBSCUR', 'L’EMPIRE', 'LES DROÏDES', 'LES EWOKS', 'JABBA LE HUTT'].map(title =>
        <Link>{title}</Link>
      )}
    </>
  );
};

export default HeaderLinks;
