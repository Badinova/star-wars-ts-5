import {NavLink} from "react-router";
import {Item} from "../utils/types";

interface Props {
    item: Item
}

const NavItem = ({item}: Props) => {

    return (
        <NavLink
            to={item.path}
            className="nav-item btn btn-danger mx-1"
        >{item.title}</NavLink>
    );
};

export default NavItem;