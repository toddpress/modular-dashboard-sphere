import { registerApplication, start } from 'single-spa';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Shell from './components/Shell';

// Register micro-frontends
registerApplication({
  name: '@mfe/dashboard',
  app: () => import('./micro-frontends/dashboard/index.tsx'),
  activeWhen: location => location.pathname === '/' || location.pathname.startsWith('/dashboard')
});

registerApplication({
  name: '@mfe/settings',
  app: () => import('./micro-frontends/settings/index.tsx'),
  activeWhen: location => location.pathname.startsWith('/settings')
});

// Start single-spa
start();

const App = () => (
  <Router>
    <TooltipProvider>
      <Shell />
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </Router>
);

export default App;