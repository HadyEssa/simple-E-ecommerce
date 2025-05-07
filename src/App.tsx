import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import  Sidebar  from "./components/Sidebar/Sidebar";
import MainContent from "./components/Main Content/MainContent";
import ProductPage from "./components/Product Page/ProductPage";
import TopSellers from "./components/Top Sellers & Blogs/TopSellers";
import PopularBlogs from "./components/Top Sellers & Blogs/PopularBlogs";



function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="rounded w-full  flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <div>
            <TopSellers />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
