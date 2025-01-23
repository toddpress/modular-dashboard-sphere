import React from 'react';
import SvelteWrapper from './SvelteWrapper';
// This import would come from your Svelte component build
// import SvelteCounter from './svelte-components/Counter.svelte';

const ExampleUsage = () => {
  return (
    <div>
      <h2>Svelte Component in React</h2>
      {/* 
      This is how you would use it if we had Svelte:
      <SvelteWrapper 
        Component={SvelteCounter}
        props={{ initialCount: 0 }} 
      /> 
      */}
    </div>
  );
};

export default ExampleUsage;