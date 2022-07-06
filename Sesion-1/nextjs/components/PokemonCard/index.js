import styles from "./PokemonCard.module.css";

const DEFAULT_POKEMON = {
  name: "ditto",
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
  types: ["normal"],
};

const formatTypes = (types) =>
  types instanceof Array ? types.join(" / ") : "";

export function PokemonCard({
  name = DEFAULT_POKEMON.name,
  sprite = DEFAULT_POKEMON.sprite,
  types = DEFAULT_POKEMON.types,
}) {
  return (
    <div className={styles.pokemonCard}>
      <img src={sprite} alt={`${name} sprite`} width="300" />
      <h3>{name}</h3>
      <p>{formatTypes(types)}</p>
    </div>
  );
}
