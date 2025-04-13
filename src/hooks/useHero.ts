import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";


const useHeroId = () => {
    const { heroId = defaultHero } = useParams();
    const { changeHero } = useContext(SWContext);

    useEffect(() => {
        if (!characters[heroId]) return;
        changeHero(heroId);
    }, [heroId]);

    return {
        heroId,
        isValidHero: !!characters[heroId],
        changeHero,
    };
};

export default useHeroId;