import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="nf-text">
        <span className="nf-title">404</span>
        <span className="nf-desc">Il me semble que vous vous êtes égaré</span>
      </div>

      <Link to="/" className="nf-button">
        Retour en lieu sûr
      </Link>
    </div>
  );
};

export default NotFound;
