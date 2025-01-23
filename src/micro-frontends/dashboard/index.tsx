import { singleSpaReact } from 'single-spa-react';
import Dashboard from './Dashboard';

const lifecycles = singleSpaReact({
  React: require('react'),
  ReactDOM: require('react-dom'),
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
export default lifecycles;