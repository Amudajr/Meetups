import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoriteContext from '../store/favorite-context';

function FavoritePage(){
    const favoriteCtx = useContext(FavoriteContext);

    let content;

    if(favoriteCtx.totalFavorites === 0){
        content = <p>You Have No Favorite Yet. Start Adding Some</p>
    } else {
        <MeetupList meetups={favoriteCtx.favorites} />
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>;
}

export default FavoritePage;