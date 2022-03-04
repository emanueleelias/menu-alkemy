import { Routes, Route } from "react-router-dom";
import React from 'react';
// import Auth from "./components/Auth";
import DishItemDetail from "./components/DishItemDetail";
// import Footer from "./components/Footer";

import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SearchRecipes from "./components/SearchRecipes";
import RecipeContextProvider from './context/RecipeContext';
import AuthProvider from "./context/useContextAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import NoMatch from "./components/NoMatch";

function App() {

  return (
      <RecipeContextProvider>
        <AuthProvider>

          <Navbar />

          <Routes>

            <Route index element={<Login />} />

            <Route path="/login" element={<Login />} />
            
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <SearchRecipes />
                </ProtectedRoute>
              }
            />

            <Route
              path="/detalle/:dishId"
              element={
                <ProtectedRoute>
                  <DishItemDetail /> 
                </ProtectedRoute>
              }
            />        

            <Route path="*" element={<NoMatch />} />

          </Routes>
        </AuthProvider>    
      </RecipeContextProvider>
  )
}

export default App






{/* <RecipeContextProvider>
<BrowserRouter >
  <Navbar />

  <Routes>
    <Route path="/login" element={<Login />}  />
    
    <Route element={<Auth />}>
      <Route path="/" element={<Home />} /> 
      <Route path='/search' element={<SearchRecipes />}/>
      <Route path='/detalle/:dishId' element={<DishItemDetail />}/>
    </Route>
  </Routes>
</BrowserRouter>
</RecipeContextProvider> */}