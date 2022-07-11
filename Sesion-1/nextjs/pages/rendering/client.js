import { useEffect, useState } from "react";
import { PokemonCard } from "../../components/PokemonCard";
import { getPokemon } from "../../services/getPokemon";
import styles from "../../styles/Rendering.module.css";

export default function ClientSideRendering() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    setTimeout(() => {
      getPokemon(367).then(setPokemon);
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <PokemonCard
        name={pokemon.name}
        sprite={pokemon.sprite}
        types={pokemon.types}
      />
    </div>
  );
}
