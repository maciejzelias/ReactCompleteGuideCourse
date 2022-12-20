import MeetupList from "../components/meetups/MeetupList";
import { useEffect } from "react";

const dummy_meetups = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://commons.wikimedia.org/wiki/File:Lionel_Messi_20180626.jpg#/media/Plik:Lionel_Messi_20180626.jpg",
    adress: "some addres 5, 12131 cityname",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://commons.wikimedia.org/wiki/File:Lionel_Messi_20180626.jpg#/media/Plik:Lionel_Messi_20180626.jpg",
    adress: "some addres 4, 12131 cityname",
    description: "this is a second meetup",
  },
];

export default function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //send http req
    setLoadedMeetups(dummy_meetups);
  }, []);
  return <MeetupList meetups={dummy_meetups} />;
}
