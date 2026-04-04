

export default function ProductCard({title, description, id, image}){
  return (
    <>
    <div className="flex flex-col">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <span>{description}</span>
    </div>
    </>
  )
}