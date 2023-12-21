import { Link } from "react-router-dom";
import Button from "../components/Button-pro";

export default function Header() {
  return (
    <nav>
      <span>Mon site</span>
      <span>
        <Button component={Link} to="/insta">
          Mon flux
        </Button>
        <Link to="/gallery">Gallery photo</Link>
        <Link to="/components">Components</Link>
      </span>
    </nav>
  );
}
