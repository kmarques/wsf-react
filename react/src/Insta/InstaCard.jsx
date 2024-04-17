import "./InstaCard.css";

export default function InstaCard({ item }) {
  return (
    <div className="insta-card">
      <h2 className="user">{item.user}</h2>
      <img src={item.src} alt={"Photo de " + item.user + " #" + item.id} />
      <div className="insta-card-body">
        {item.views && <div>{item.views} vues</div>}
        <p>
          <strong>{item.user}</strong> {item.description}
        </p>
        <div className="insta-tag">
          {item.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
