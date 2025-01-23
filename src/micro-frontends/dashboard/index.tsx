import singleSpaReact from 'single-spa-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Dashboard,
  errorBoundary(err: Error) {
    return (
      <div className="text-red-500">
        Dashboard MFE Error: {err.message}
      </div>
    );
  }
});

export const { bootstrap, mount, unmount } = lifecycles;