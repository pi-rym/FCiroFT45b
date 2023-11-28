import Card from "../card/Card";

export default function Cards({ characters, onClose }) {
  // props -> {characters : [{},{},{}]}
  return (
    <div>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={onClose}
          />
        )
      )}
    </div>
  );
}
