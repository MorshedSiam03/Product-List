import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProductList from "./Components/Product/ProductList";
import { CartProvider } from "./Provider/CartProvider";
import { ProductProvider } from "./Provider/ProductProvider";
import { SortFilterProvider } from "./Provider/SortFilterProvider";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <CartProvider>
        <ProductProvider>
          <SortFilterProvider>
            <ProductList />
          </SortFilterProvider>
        </ProductProvider>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
