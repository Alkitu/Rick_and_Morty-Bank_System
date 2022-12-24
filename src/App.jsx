import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import NavBar from './components/navbar/NavBar'
import { AuthProvider } from "./context/AuthContext";
import {ApiContext} from "./context/ApiContext";
import './App.css'
import { useContext } from "react";
import { Info } from "./pages/Info";
import ParticlesBackground from "./components/particles/particlesBackground";

function AuthGuard({ children }) {
  const  {apiData}  = useContext(ApiContext);

  if (!apiData) {
    console.log('muere en la condicion')
    return <p> loading...</p>;
  }

  console.log('no muere en la condicion')

  return children;
}

function App() {

  return (
    
    <AuthGuard>
      <div className="h-screen  fixed -z-50">
        <ParticlesBackground/>
      </div>
      <NavBar/>
      <div className="bg-slate-black h-screen pt-20 flex text-white z-50">
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/info"
              element={
                <ProtectedRoute>
                  <Info />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<Register />} />
            
          </Routes>
        </AuthProvider>
      </div>
    </AuthGuard> 
  )
}

export default App
