import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import Drawer from "../components/sidebar/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Drawer>
      <Component {...pageProps} />
    </Drawer>
  );
}

export default MyApp;
