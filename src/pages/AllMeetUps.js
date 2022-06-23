import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

// const kman = [
//     {
//         id: 'm1',
//         title: 'This is first meet up',
//         image: 'https://www.goodcore.co.uk/blog/wp-content/webp-express/webp-images/uploads/2019/08/coding-vs-programming-2.jpg.webp',
//         address: 'Ajanaku Tanke',
//         description: 'This is the first meet up of react'
//     },
//     {
//         id: 'm2',
//         title: 'This is second meet up',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6efUXDlJSYLXuPoDRt0o9Trz4HmplXyvzCkkxVLUGxkU2AF7SeG4luDNvP8Jg0LrD8wU&usqp=CAU',
//         address: 'Ajanaku Tanke',
//         description: 'This is the second meet up of react'
//     },
//     {
//         id: 'm3',
//         title: 'This is third meet up',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPqXFPYA1nDBIE241lhhe2rkWPMS0-ccXOW6oceGkeY4rQPXveXooJKYxS9VhpxUvfXY&usqp=CAU',
//         address: 'Ajanaku Tanke',
//         description: 'This is the third meet up of react'
//     },
//     {
//         id: 'm4',
//         title: 'This is fourth meet up',
//         image: 'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
//         address: 'Ajanaku Tanke',
//         description: 'This is the fourth meet up of react'
//     }

// ];

function AllMeetUpsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, SetLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-getting-started-33a26-default-rtdb.firebaseio.com/meetups.json'
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const meetups = [];

            for (const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }

            setIsLoading(false); 
            SetLoadedMeetups(meetups);
        });    
    }, []);

    if (isLoading){
        return(
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return(
        <section>
            <h1>
                ALL MEETUPS
            </h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
        );
}

export default AllMeetUpsPage;