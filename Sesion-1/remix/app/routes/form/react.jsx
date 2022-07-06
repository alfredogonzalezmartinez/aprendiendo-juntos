import { useState } from "react";

export default function FormReact() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState(null);

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      setGreeting(`Hello ${name}!`);
      setName("");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleNameChange}
          value={name}
        />
        <button type="submit">Greet</button>
      </form>

      {greeting && <p className="greeting">{greeting}</p>}
    </div>
  );
}
