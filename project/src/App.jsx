import { useState } from "react";
import "./css/App.css";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([
    {
      title: "Headset",
      image:
        "https://imgs.search.brave.com/6qCVNhP7UmMSemfv3OEKLQldHV1NzQAoqfJRRwO-ARM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/Nzc4LzQ1MC9zbWFs/bC9zdHlsaXNoLWJs/YWNrLWhlYWRwaG9u/ZXMtb24tdmlicmFu/dC1vcmFuZ2UtYmFj/a2dyb3VuZC1wcm9k/dWN0Z3JhcGh5LXBo/b3RvLmpwZw",
      price: 1500,
    },
    {
      title: "Camera",
      image:
        "https://imgs.search.brave.com/c5bO-gJEWFGZAhndor5yvbCNYlnxFnEBqInQkHCWr8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ncmFw/aGljZGVzaWduZXll/LmNvbS9pbWFnZXMv/Q2Fub24tRU9TLVI1/LmpwZw",
      price: 155500,
    },
    {
      title: "Cycle",
      image:
        "https://imgs.search.brave.com/urU_Es8sx3P2Bz_PBApgTGPhELZ2q1vQU62AB6TzTb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaG9v/c2VteWJpY3ljbGUu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL2YzaV81/MDAweC5qcGc_dj0x/NzcyNTM2MjIy",
      price: 15000,
    },
    {
      title: "Headset",
      image:
        "https://imgs.search.brave.com/6qCVNhP7UmMSemfv3OEKLQldHV1NzQAoqfJRRwO-ARM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/Nzc4LzQ1MC9zbWFs/bC9zdHlsaXNoLWJs/YWNrLWhlYWRwaG9u/ZXMtb24tdmlicmFu/dC1vcmFuZ2UtYmFj/a2dyb3VuZC1wcm9k/dWN0Z3JhcGh5LXBo/b3RvLmpwZw",
      price: 1500,
    },
    {
      title: "Camera",
      image:
        "https://imgs.search.brave.com/c5bO-gJEWFGZAhndor5yvbCNYlnxFnEBqInQkHCWr8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ncmFw/aGljZGVzaWduZXll/LmNvbS9pbWFnZXMv/Q2Fub24tRU9TLVI1/LmpwZw",
      price: 155500,
    },
    {
      title: "Cycle",
      image:
        "https://imgs.search.brave.com/urU_Es8sx3P2Bz_PBApgTGPhELZ2q1vQU62AB6TzTb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaG9v/c2VteWJpY3ljbGUu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL2YzaV81/MDAweC5qcGc_dj0x/NzcyNTM2MjIy",
      price: 15000,
    },
  ]);

  return (
    <>
      <h1>Products</h1>
      <div className="productsContainer">
        {products.map((product, index) => {
          return <Product data={product} />;
        })}
      </div>
    </>
  );
}

export default App;
