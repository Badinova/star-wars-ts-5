import Friend from "./Friend.tsx";
import {friends} from "../utils/constants.ts";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream Team</h2>
            {friends.map((friend, i) => <Friend picture={friend} pos={i + 1} key={i} />)}
        </section>
    );
};

export default DreamTeam;