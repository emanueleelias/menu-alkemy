import { Routes, Route } from "react-router-dom";
import React from 'react';
import DishItemDetail from "./components/search/DishItemDetail";


import Login from "./components/login/Login";
import Navbar from "./commons/Navbar";
import SearchRecipes from "./components/search/SearchRecipes";

import AuthProvider from "./context/useContextAuth";
import NoMatch from "./components/NoMatch";
import Home from "./components/home/Home";
import ProtectedRoute from "./components/login/ProtectedRoute";
import RecipeContextProvider from "./context/useContextRecipe";

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