import React, { useState, useEffect, useRef } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Compass, Users, Menu, X, LogOut, User as UserIcon, ChevronDown } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname]);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getHighResPhotoUrl = (url: string | null) => {
    if (!url) return null;
    if (url.includes('googleusercontent.com')) {
      if (url.includes('=s96-c')) return url.replace('=s96-c', '=s400-c');
      if (!url.includes('=')) return `${url}=s400-c`;
    }
    return url;
  };

  const navLinks = [
    { name: "Discover", path: "/discover", icon: Compass },
    { name: "Squad", path: "/squad", icon: Users },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans relative">
      {/* Top Navigation */}
      <nav id="main-nav" className="sticky top-0 z-40 border-b border-border glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors duration-200">
                Match Tech
              </span>
            </NavLink>

            {/* Desktop Nav Links */}
            {user && (
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                        ${isActive
                            ? 'text-accent bg-accent/10'
                            : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'}
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      {link.name}
                    </NavLink>
                  );
                })}
              </div>
            )}

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {user ? (
                <>
                  {/* Profile Dropdown */}
                  <div className="relative" ref={profileRef}>
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-bg-elevated transition-colors duration-200"
                    >
                      <div className="w-8 h-8 rounded-full border border-border overflow-hidden bg-bg-elevated flex items-center justify-center">
                        {user.photoURL ? (
                          <img
                            src={getHighResPhotoUrl(user.photoURL) || ""}
                            alt={user.displayName || "User"}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <UserIcon className="w-4 h-4 text-text-muted" />
                        )}
                      </div>
                      <ChevronDown className={`w-3.5 h-3.5 text-text-muted transition-transform duration-200 hidden sm:block ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isProfileOpen && (
                      <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-bg-card shadow-xl shadow-black/30 py-1 animate-in fade-in slide-in-from-top-2">
                        <div className="px-4 py-3 border-b border-border">
                          <p className="text-sm font-medium text-text-primary truncate">{user.displayName}</p>
                          <p className="text-xs text-text-muted truncate">{user.email}</p>
                        </div>
                        <NavLink
                          to="/onboarding"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors"
                        >
                          <UserIcon className="w-4 h-4" />
                          Meu Perfil
                        </NavLink>
                        <button
                          onClick={handleSignOut}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-danger hover:bg-danger/10 w-full text-left transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Sair
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Mobile Hamburger */}
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-elevated transition-colors"
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </>
              ) : (
                <NavLink
                  to="/onboarding"
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-accent text-white hover:bg-accent-hover transition-colors duration-200 shadow-sm shadow-accent/20"
                >
                  Criar Perfil
                </NavLink>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && user && (
            <div className="md:hidden pb-4 pt-2 flex flex-col gap-1 border-t border-border mt-2 animate-in fade-in slide-in-from-top-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                      ${isActive
                          ? 'text-accent bg-accent/10'
                          : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'}
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full flex-1">
        <Outlet />
      </main>
    </div>
  );
}
