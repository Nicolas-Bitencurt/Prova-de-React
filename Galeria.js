import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Galeria.css';

function GaleriaPage({ setPage }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-black-800 mb-4">Galeria de pets</h2>
      <p className="text-lg text-black-700 mb-8">Total de pets disponiveis: 15</p>
      <div className="space-x-4">
      </div>
    </div>
  );
}
export default function Galeria() {
    const { id } = useParams();
    const [comp, setComp] = useState(null);

const pets = [
    { id: 1, nome: "Tobby", especie: "Cachorro", idade: 4 },
    { id: 2, nome: "Mia", especie: "Gato", idade: 2 },
    { id: 3, nome: "Luna", especie: "Cachorro", idade: 1 },
    { id: 4, nome: "Nino", especie: "Gato", idade: 3 },
    { id: 5, nome: "Bolt", especie: "Cachorro", idade: 5 },
    { id: 6, nome: "Frajola", especie: "Gato", idade: 6 },
    { id: 7, nome: "Pipoca", especie: "Cachorro", idade: 2 },
    { id: 8, nome: "Tom", especie: "Gato", idade: 3 },
    { id: 9, nome: "Mel", especie: "Cachorro", idade: 1 },
    { id: 10, nome: "Bidu", especie: "Cachorro", idade: 7 },
    { id: 11, nome: "Salem", especie: "Gato", idade: 2 },
    { id: 12, nome: "Max", especie: "Cachorro", idade: 3 },
    { id: 13, nome: "Amora", especie: "Gato", idade: 5 },
    { id: 14, nome: "Nina", especie: "Cachorro", idade: 4 },
    { id: 15, nome: "Simba", especie: "Gato", idade: 2 }
  ];

  useEffect(() => {
    const lista = JSON.parse(localStorage.getItem('pets')) || [];
    const achado = lista.find(c => c.id === Number(id));
    setComp(achado);
  }, [id]);

  if (!comp) return <p>Nenhum pet encontrado.</p>;
}

