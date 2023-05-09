

function ProgramCard({ program }) {
  const { title, description, image, gradient } = program;

  return (
    <div
      className={`flex flex-col justify-center h-48 w-full bg-gradient-to-br from-${gradient.from} to-${gradient.to} rounded-3xl`}
    >
      <img src={image.url} alt={image.alt} className="w-24 h-24 mx-auto" />
      <h2 className="mt-2 text-lg text-white text-center">{title}</h2>
      <p className="mt-2 text-sm text-white text-center">{description}</p>
    </div>
  );
}

export default ProgramCard;