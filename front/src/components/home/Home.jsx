import Cards from "../cards/Cards";
export default function Home({ characters, onClose }) {
  return (
    <>
      <Cards characters={characters} onClose={onClose} />
    </>
  );
}
