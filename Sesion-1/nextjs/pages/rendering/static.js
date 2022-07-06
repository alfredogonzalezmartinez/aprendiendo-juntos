import { PokemonCard } from "../../components/PokemonCard";
import { getPokemon } from "../../services/getPokemon";
import styles from "../../styles/Rendering.module.css";

export default function StaticSiteGeneration({ pokemon }) {
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

export async function getStaticProps() {
  const pokemon = await getPokemon();
  return {
    props: { pokemon },
  };
}
