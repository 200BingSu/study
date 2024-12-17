import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/Order/OrderPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import MenuList from "./pages/Order/MenuList";
import MenuDetail from "./pages/Order/MenuDetail";
import Bucket from "./pages/Order/bucket";
import Payment from "./pages/Order/payment";
import CompleteOrder from "./pages/Order/CompleteOrder";
import { LoginProvider } from "./contexts/LoginContext";

const App = ({ children }) => {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Header></Header>
        <Routes>
          {/* 홈 */}
          <Route path="/" element={<HomePage />} />
          {/* 로그인 */}
          <Route path="/login" element={<LoginPage />} />
          {/* 주문 */}
          <Route path="/order">
            <Route index element={<OrderPage />} />
            <Route path="menu-list" element={<MenuList />} />
            <Route path="menu-detail" element={<MenuDetail />} />
            <Route path="bucket" element={<Bucket />} />
            <Route path="payment" element={<Payment />} />
            <Route path="complete-order" element={<CompleteOrder />} />
          </Route>
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
};
export default App;
