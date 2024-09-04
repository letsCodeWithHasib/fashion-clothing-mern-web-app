import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Login from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrders from "./pages/admin-view/orders";
import AdminProducts from "./pages/admin-view/products";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component */}

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="c" element={<AdminFeatures />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
