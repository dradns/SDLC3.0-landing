import { Search, Moon, Sun, Settings } from "lucide-react";

const Navigation = () => {
  return (
    <header className="w-full bg-background border-b border-border px-6 py-3">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and Brand */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm"></div>
            <span className="text-lg font-semibold text-foreground">SDLC 3.0</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Updates
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              API
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Extensions
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-muted rounded-md px-3 py-1.5 text-sm text-muted-foreground">
            <Search className="w-4 h-4" />
            <span>Search Docs</span>
            <span className="text-xs bg-background px-1.5 py-0.5 rounded border text-muted-foreground">
              Ctrl+Shift+P
            </span>
          </div>
          
          {/* Theme toggle */}
          <button className="p-2 hover:bg-muted rounded-md transition-colors">
            <Sun className="w-4 h-4 text-muted-foreground" />
          </button>
          
          {/* Settings */}
          <button className="p-2 hover:bg-muted rounded-md transition-colors">
            <Settings className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;