import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetups";
import NewMeetUpsPage from "./pages/NewMeetUps";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpsPage />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
