import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Settings } from 'lucide-react';

const Shell = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-800">My App</h1>
        </div>
        
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              location.pathname.startsWith('/dashboard') 
                ? 'bg-accent text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          
          <Link
            to="/settings"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              location.pathname.startsWith('/settings') 
                ? 'bg-accent text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <main id="single-spa-application:@mfe/dashboard"></main>
        <main id="single-spa-application:@mfe/settings"></main>
      </div>
    </div>
  );
};

export default Shell;