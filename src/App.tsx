import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRouter";
import { useState } from "react";
import SplashScreen from "./components/Home/SplashScreen";

function App() {
    const [isLoading, setIsLoading] = useState(true);
  
    const handleSplashFinish = () => {
      setIsLoading(false);
    };
  return (
    <>
    {isLoading && <SplashScreen onFinish={handleSplashFinish} />}
    {!isLoading && (
    <Router>
      <AppRoutes />
    </Router>
    )}
    </>
  );
}

export default App;
