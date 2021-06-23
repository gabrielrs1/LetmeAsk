import {  BrowserRouter, Route } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />v
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
