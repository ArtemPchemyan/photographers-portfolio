import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Outfit } from "next/font/google";

const font = Outfit({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
