import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="text">
        <div className="title">
          <span>
            <span className="letter">N</span>athan
          </span>
          <span>Caron</span>
        </div>

        <p>
          Bonjour, et Bienvenue sur mon portfolio.
          <br />
          Ici vous pourrez retrouver l'ensemble de mes compétences que j'ai
          acquis durant mes années de BTS SIO.
        </p>
      </div>

      <div className="logo">
        <span>N</span>
      </div>
    </>
  );
};

export default Home;
