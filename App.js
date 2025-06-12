import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/" element={<Galeria />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Header({ setPage }) {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold">PetFinder</h1>
        <nav className="flex space-x-6">
          <button onClick={() => setPage({ name: 'inicio' })} className="text-lg hover:text-blue-200 transition-colors">Inicio</button>
          <button onClick={() => setPage({ name: 'galeria' })} className="text-lg hover:text-blue-200 transition-colors">Galeria</button>
        </nav>
      </div>
    </header>
  );
}

function HomePage({ setPage }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-green-800 mb-4">Bem-vindo ao PetFinder</h2>
      <p className="text-lg text-gray-700 mb-8">Conectamos você a pets incriveis que estão procurando um novo lar!</p>
      <div className="space-x-4">
        {/* Botões para navegar para a lista de produtos ou página de cadastro */}
        <button onClick={() => setPage({ name: 'galeria' })} className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all shadow-lg">
          Ver galeria
        </button>
      </div>
    </div>
  );
}