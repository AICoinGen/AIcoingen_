import Head from "next/head";
import "../styles/globals.css";
import { Inter, Roboto } from "next/font/google";

import { StateContextProvider } from "../Context/index";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className="font-Poppins">
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
        rel="stylesheet"
      ></link> */}

      <link
        href="https://fonts.googleapis.com/css2?family=Poetsen+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>

      <script src="js/vendor/modernizr-3.5.0.min.js"></script>

      <script src="js/vendor/jquery-1.12.4.min.js"></script>

      <script src="js/bootstrap.min.js"></script>

      <script src="js/owl.carousel.min.js"></script>

      <script src="js/popper.min.js"></script>

      <script src="js/jquery.nice-select.min.js"></script>

      <script src="js/jquery.meanmenu.js"></script>

      <script src="js/wow.min.js"></script>

      <script src="js/plugins.js"></script>

      <script src="js/main.js"></script>
    </main>
  );
}
