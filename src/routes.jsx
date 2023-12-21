import App from "./App";
import InstaFlux from "./Insta/InstaFLux";
import Layout from "./layouts/Layout";
import Components from "./pages/Components";
import Gallery from "./pages/Gallery";

export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <App /> },
      { path: "insta", element: <InstaFlux /> },
      { path: "gallery", element: <Gallery /> },
      { path: "components", element: <Components /> },
    ],
  },
];
