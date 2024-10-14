import HeroCraousel from "./HeroCraousel";
import HeroItem from "./HeroItem";

const MainHero: React.FC = () => {
  return <div className="grid w-full grid-cols-1 gap-5 p-5 md:grid-cols-3 max-w-[1100px] mx-auto">
    <HeroCraousel />
    <HeroItem />
  </div>;
};

export default MainHero;
