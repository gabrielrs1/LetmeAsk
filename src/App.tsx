import {  BrowserRouter, Route, Switch } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext";
import { StylePageContextProvider } from "./context/StylePageContext";
import { AdminRoom } from "./pages/AdminRoom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <StylePageContextProvider>
            <Switch> {/* Para não carregar mais de 1 rota */}
              <Route path="/" exact={true} component={Home} />
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />
              <Route path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
          </StylePageContextProvider>
        </AuthContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}

export default App;
