import NewmeetupForm from "../components/meetups/NewmeetupForm";
import { useNavigate  } from 'react-router-dom';

function NewMeetupPage(){
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-getting-started-33a26-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type':'application/json'
                }
            }    
        ).then(() => {
            navigate('/', { replace: true });
        });
    }

    return <section>
            <h1>Add New Meetups</h1>
            <NewmeetupForm  onAddMeetup={addMeetupHandler} />
        </section>;
}

export default NewMeetupPage;