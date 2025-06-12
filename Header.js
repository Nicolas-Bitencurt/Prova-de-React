import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h1>PetFinder</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/galeria">Galeria</Link>
      </nav>
    </header>
  );
}
