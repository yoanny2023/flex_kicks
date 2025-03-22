import { CartContextProvider } from "@/data/context/CartContext";
import { MenuBarContextProvider } from "@/data/context/MenuBarContext";
import { ProductProvider } from "@/data/context/ProductContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <MenuBarContextProvider>
       <ProductProvider>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
       </ProductProvider>
    </MenuBarContextProvider>
  );
}
