import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.js";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
          </>
        }
      />

      <Route
        path="/grades"
        element={
          <>
            <Navbar />
            <Grades />
          </>
        }
      />

      <Route
        path="/shop"
        element={
          <>
            <Navbar />
            <Shop />
          </>
        }
      />

      <Route
        path="/counter"
        element={
          <>
            <Navbar />
            <Counter />
          </>
        }
      />

      <Route
        path="/triangle"
        element={
          <>
            <Navbar />
            <Triangle />
          </>
        }
      />

      <Route
        path="/order"
        element={
          <>
            <Navbar />
            <Order />
          </>
        }
      />

      <Route
        path="/name"
        element={
          <>
            <Navbar />
            <Name />
          </>
        }
      />

      <Route
        path="/anim"
        element={
          <>
            <Navbar />
            <Anim />
          </>
        }
      />
    </Routes>
  );
}

export default App;
