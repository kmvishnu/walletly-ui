import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish(); 
    }, 2000); // 

    return () => clearTimeout(timer); 
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      
      <div className="text-center">
        <img
          src="/icons/web-app-manifest-512x512.png" 
          alt="Walletly Logo"
          className="w-32 h-32 mx-auto"
        />
        <h1 className="mt-4 text-2xl font-bold text-gray-800">Walletly</h1>
        <p className="mt-2 text-gray-500">Loading your finances...</p>
      </div>
    </div>
  );
};

export default SplashScreen;