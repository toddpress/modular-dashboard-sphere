import { registerApplication, start } from 'single-spa';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Shell from './components/Shell';

// Register micro-frontends
registerApplication({
  name: '@mfe/dashboard',
  app: () => import('./micro-frontends/dashboard').then(module => module.default),
  activeWhen: location => location.pathname === '/' || location.pathname.startsWith('/dashboard')
});

registerApplication({
  name: '@mfe/settings',
  app: () => import('./micro-frontends/settings').then(module => module.default),
  activeWhen: location => location.pathname.startsWith('/settings')
});

// Start single-spa
start();

const App = () => (
  <TooltipProvider>
    <Shell />
    <Toaster />
    <Sonner />
  </TooltipProvider>
);

export default App;