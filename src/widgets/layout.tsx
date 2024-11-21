import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/auth/sign-in');
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <header className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center justify-between px-5 z-50">
        <h1>프로젝트 관리 시스템</h1>
      </header>
      <main className="mt-20 p-5">
        <Outlet />
      </main>
    </div>
  );
};
