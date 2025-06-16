import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="text-blue-400">Детектив</span> Александр Петров
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-blue-400 bg-slate-800"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/services")
                  ? "text-blue-400 bg-slate-800"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              Услуги
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-blue-400 bg-slate-800"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              О себе
            </Link>
            <Link
              to="/work-process"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/work-process")
                  ? "text-blue-400 bg-slate-800"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              Порядок работы
            </Link>
            <Link
              to="/terms"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/terms")
                  ? "text-blue-400 bg-slate-800"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              Условия
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-white font-semibold">+7 (999) 123-45-67</div>
              <div className="text-gray-400 text-sm">Работаю 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
