import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <div className="home-title">
          <span>
            <span className="home-letter">N</span>athan
          </span>
          <span>Caron</span>
        </div>

        <p className="home-p">
          Bonjour, et Bienvenue sur mon portfolio.
          <br />
          Ici vous pourrez retrouver l'ensemble de mes compétences que j'ai
          acquis durant mes années de BTS SIO.
        </p>
      </div>

      <div className="home-logo">
        <span>N</span>
      </div>
    </div>
  );
};

export default Home;
