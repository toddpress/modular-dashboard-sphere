import React, { useEffect, useRef } from 'react';

interface SvelteWrapperProps {
  // The Svelte component constructor
  Component: any;
  // Props to pass to the Svelte component
  props?: Record<string, any>;
}

const SvelteWrapper: React.FC<SvelteWrapperProps> = ({ Component, props = {} }) => {
  const svelteHost = useRef<HTMLDivElement>(null);
  const svelteInstance = useRef<any>(null);

  useEffect(() => {
    if (svelteHost.current && !svelteInstance.current) {
      // Create new Svelte component instance
      svelteInstance.current = new Component({
        target: svelteHost.current,
        props: props
      });
    }

    // Update props when they change
    if (svelteInstance.current) {
      Object.entries(props).forEach(([key, value]) => {
        svelteInstance.current.$set({ [key]: value });
      });
    }

    // Cleanup on unmount
    return () => {
      if (svelteInstance.current) {
        svelteInstance.current.$destroy();
      }
    };
  }, [Component, props]);

  return <div ref={svelteHost} />;
};

export default SvelteWrapper;