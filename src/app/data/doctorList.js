import { faCalendarCheck, faComment } from '@fortawesome/free-solid-svg-icons';

import Profile1 from  "../assets/doctor/profile-picture-1.jpg"
import Profile2 from "../assets/doctor/profile-picture-2.jpg"
import Profile3 from "../assets/doctor/profile-picture-3.jpg"
import Profile4 from "../assets/doctor/profile-picture-4.jpg"

export const DoctorList = [
    {
        "id": 1,
        "image": Profile1,
        "name": "Dr.Christopher Wood",
        "statusKey": "online",
        "icon": faCalendarCheck,
        "btnText": "View"
    },
    {
        "id": 2,
        "image": Profile2,
        "name": "Dr.Jose Leos",
        "statusKey": "inMeeting",
        "icon": faComment,
        "btnText": "View"
    },
    {
        "id": 3,
        "image": Profile3,
        "name": "Dr.Bonnie Green",
        "statusKey": "offline",
        "icon": faCalendarCheck,
        "btnText": "View"
    },
    {
        "id": 4,
        "image": Profile4,
        "name": "Dr.Neil Sims",
        "statusKey": "online",
        "icon": faComment,
        "btnText": "View"
    }
]