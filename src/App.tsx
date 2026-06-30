import { RouterProvider } from "react-router-dom";

import Routes from "./routes/Routes";

// Pages are lazy loaded — each page is only downloaded when the user visits it

function App() {
  return <RouterProvider router={Routes} />;
}

export default App;
