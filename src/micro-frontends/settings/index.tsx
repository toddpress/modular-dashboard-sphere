import singleSpaReact from 'single-spa-react';
import Settings from './Settings';

const lifecycles = singleSpaReact({
  React: require('react'),
  ReactDOM: require('react-dom'),
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