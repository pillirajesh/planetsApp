// Write your code here

import './index.css'

const PlanetItem = props => {
  const {eachPlanetDetails} = props
  const {name, imageUrl, description} = eachPlanetDetails

  return (
    <div className="slider-container">
      <div className="text-container">
        <img src={imageUrl} alt={`planet ${name}`} className="image" />
        <h1 className="heading">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
