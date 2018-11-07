//  HIGHER ORDER COMPONENT (HOC) 
//      - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const adminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Private and sensitive information. Please DO NOT SHARE!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentification = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthentificated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

const AdminInfo = adminWarning(Info);
const AuthInfo = requireAuthentification(Info);

ReactDOM.render(<AuthInfo info="some details" isAuthentificated={true} />, document.getElementById('app'));