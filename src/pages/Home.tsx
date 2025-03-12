import Cards from "../components/cards";
import Menubar from "../components/Menubar";

const Home = () => {
  return (
    <>
      {/* Only page-specific content */}
      <Menubar />
      <h1 className="text-emerald-900 text-3xl mt-20 ml-20">Fresh recomendations</h1>
      <Cards/>
    </>
  );
};

export default Home;
