import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Product from './pages/Product'
import ProductUpload from './pages/ProductUpload';

const MyContext = createContext();

function App() {
    const [isToggleSidebar, setIsToggleSidebar] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
    const [themeMode,setThemeMode] = useState(null);

    useEffect(()=>{
      if(themeMode === true){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('themeMode','light');
      }
      else{
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('themeMode','dark');
      }
    },[themeMode]);

    const values = {
        isToggleSidebar,
        setIsToggleSidebar,
        isLogin,
        setIsLogin,
        isHideSidebarAndHeader,
        setIsHideSidebarAndHeader,
        themeMode,
        setThemeMode
    };

    return (
        <BrowserRouter>
            <MyContext.Provider value={values}>
                {isHideSidebarAndHeader !== true && <Header />}
                <div className="main d-flex">
                    {isHideSidebarAndHeader !== true && (
                        <div
                            className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}
                        >
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={`content ${isHideSidebarAndHeader === true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}
                    >
                        <Routes>
                            <Route
                                path="/"
                                exact={true}
                                element={<Dashboard />}
                            />
                            <Route
                                path="/dashboard"
                                exact={true}
                                element={<Dashboard />}
                            />
                            <Route
                                path="/login"
                                exact={true}
                                element={<Login />}
                            />
                            <Route
                                path="/signUp"
                                exact={true}
                                element={<SignUp />}
                            />
                            <Route
                                path="/product"
                                exact={true}
                                element={<Product/>}
                            />
                            <Route
                                path="/product/details"
                                exact={true}
                                element={<ProductDetails />}
                            />
                            <Route
                                path="/product/upload"
                                exact={true}
                                element={<ProductUpload />}
                            />
                        </Routes>
                    </div>
                </div>
            </MyContext.Provider>
        </BrowserRouter>
    );
}

export default App;
export { MyContext };
