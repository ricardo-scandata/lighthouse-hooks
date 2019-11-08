/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';


const AuthContext = React.createContext([{}, () => {}]);

const AuthProvider = (props) => {
  const [state, setState] = useState(false);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
