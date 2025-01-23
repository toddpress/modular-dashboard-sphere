import Settings from './Settings';

const lifecycles = {
  bootstrap: () => Promise.resolve(),
  mount: (props: any) => {
    const container = document.querySelector('#single-spa-application\\:@mfe\\/settings');
    if (container) {
      container.innerHTML = '<div>Settings MFE Mounted</div>';
    }
    return Promise.resolve();
  },
  unmount: () => Promise.resolve()
};

export const { bootstrap, mount, unmount } = lifecycles;
export default lifecycles;