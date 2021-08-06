import { useContext } from "react";
import FavouritesContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";

function Favourites() {
  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet. Start Adding More</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}
export default Favourites;
