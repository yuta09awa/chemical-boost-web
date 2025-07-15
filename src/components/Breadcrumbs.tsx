import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items = [] }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from path if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    pathSegments.forEach((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({ label, path });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();

  if (breadcrumbItems.length === 0) return null;

  return (
    <nav className="bg-gray-50 border-b py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="text-gray-500 hover:text-primary transition-colors flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
          </li>
          
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.label}</span>
              ) : (
                <Link 
                  to={item.path} 
                  className="text-gray-500 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};