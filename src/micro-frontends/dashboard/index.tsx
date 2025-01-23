import Dashboard from './Dashboard';

const lifecycles = {
  bootstrap: () => Promise.resolve(),
  mount: (props: any) => {
    const container = document.querySelector('#single-spa-application\\:@mfe\\/dashboard');
    if (container) {
      container.innerHTML = '<div>Dashboard MFE Mounted</div>';
    }
    return Promise.resolve();
  },
  unmount: () => Promise.resolve()
};

export const { bootstrap, mount, unmount } = lifecycles;
export default lifecycles;