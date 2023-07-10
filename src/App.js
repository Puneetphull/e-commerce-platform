import "./App.css";
import { ForgetPassword } from "./app/components/ForgetPassword";
import { Login } from "./app/components/Login";
import { NotFound } from "./app/components/NotFound";
import { ServerError } from "./app/components/ServerError";
import { SignUp } from "./app/components/SignUp";
import { SuperAdminRegister } from "./app/components/superAdmin/SuperAdminRegister";
import { VerifyEmail } from "./app/components/verfiyEmail";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { customRoutes } from "./app/routes/routes";
import { GuestHomePage } from "./app/components/guestUser/guestHomePage";
import { Dashboard } from "./app/components/dashboard/Dashboard";
import { CustomerHomePage } from "./app/components/customerUser/customerHomePage";
import { PrivateRouteSideBar } from "./app/components/PrivateRouteSideBar";
import { ProductList } from "./app/components/productPage/ProductListPage/ProductList";
import { Cart } from "./app/components/Cart/Cart";
import { ProductDetail } from "./app/components/productPage/ProductDetailPage/ProductDetail";
import { ShippingPage } from "./app/components/shippingPage/ShippingPage";
import { PaymentPage } from "./app/components/PaymentPage/PaymentPage";
import { HomePage } from "./app/components/home/homePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <Navigate to={customRoutes.adminLogin.path} replace={true} />
            }
          />
          <Route
            path={customRoutes.adminDetail.path}
            element={<SuperAdminRegister />}
          />
          <Route path={customRoutes.adminLogin.path} element={<Login />} />
          <Route path={customRoutes.staffLogin.path} element={<Login />} />
          <Route path={customRoutes.userLogin.path} element={<Login />} />
          <Route path={customRoutes.adminSignup.path} element={<SignUp />} />
          <Route path={customRoutes.userSignUp.path} element={<SignUp />} />
          <Route path={customRoutes.staffSignup.path} element={<SignUp />} />
          <Route path={customRoutes.guestSignup.path} element={<SignUp />} />

          <Route path={customRoutes.StaffHome.path} element={<Dashboard />} />
          <Route path={customRoutes.UserHome.path} element={<Dashboard />} />
          <Route
            path={customRoutes.guestHome.path}
            element={<GuestHomePage />}
          />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route
            path={customRoutes.serverError.path}
            element={<ServerError />}
          />
          <Route path="/reviewurl" element={<CustomerHomePage />} />
          <Route
            path={customRoutes.adminHome.path}
            element={<PrivateRouteSideBar component={<HomePage />} />}
          />
          <Route
            path="productListing"
            element={<PrivateRouteSideBar component={<ProductList />} />}
          />
          <Route
            path="/cart"
            element={<PrivateRouteSideBar component={<Cart />} />}
          />
           <Route
            path="/shipping"
            element={<PrivateRouteSideBar component={<ShippingPage />} />}
          />
           <Route
            path="/payment"
            element={<PrivateRouteSideBar component={<PaymentPage />} />}
          />
          <Route path="/productdetail"   element={<PrivateRouteSideBar component={<ProductDetail />} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
