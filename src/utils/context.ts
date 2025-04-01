import {createContext} from "react";
import {SWContextValue} from "./types";
import {navItems} from "./constants.ts";

export const SWContext = createContext<SWContextValue>({
    page: navItems[0],
    changePage: (page: string) => console.log(page)
});