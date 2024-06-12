import "./App.css";
import Login from "./Compos/Auth/Login";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Statistics from "./Compos/pages/Statistics/Statistics";
import DepaPage from "./Compos/pages/CouriDep/DepaPage";
import ArrPage from "./Compos/pages/CouriArr/ArrPage";
import { AuthProvider } from "./services/authC";
import { RequiredLog } from "./services/RequiredLog";
import Home from "./Home";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AuthProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/couriers_de_depart"
              element={
                <RequiredLog>
                  {" "}
                  <DepaPage />
                </RequiredLog>
              }
            />
            <Route
              path="/couriers_d_arrive"
              element={
                <RequiredLog>
                  <ArrPage />
                </RequiredLog>
              }
            />
            <Route
              path="/statistics"
              element={
                <RequiredLog>
                  <Statistics />
                </RequiredLog>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
