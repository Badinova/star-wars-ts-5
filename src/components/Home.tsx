import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import useHeroId from "../hooks/useHero.ts";
import ErrorPage from "./ErrorPage";

const Home = () => {
    const { isValidHero } = useHeroId();

    if (!isValidHero) return <ErrorPage />;

    return (
        <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    );
};

export default Home;
