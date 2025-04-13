import { starWarsInfo } from "../utils/constants";
import useHeroId from "../hooks/useHero.ts";
import ErrorPage from "./ErrorPage";

const StarWars = () => {
    const { isValidHero } = useHeroId();

    if (!isValidHero) return <ErrorPage />;

    return (
        <div className="farGalaxy">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;
