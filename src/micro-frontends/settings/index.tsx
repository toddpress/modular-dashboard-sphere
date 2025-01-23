import singleSpaReact from 'single-spa-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Settings from './Settings';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Settings,
  errorBoundary(err: Error) {
    return (
      <div className="text-red-500">
        Settings MFE Error: {err.message}
      </div>
    );
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
export default lifecycles;