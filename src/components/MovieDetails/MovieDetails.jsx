export default function MovieDetails({ title, image, overview }) {
  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
}
