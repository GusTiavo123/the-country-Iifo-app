const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {children}
    </div>
  );
};

export default Layout;
