import { Link } from 'react-router-dom';
import { useContextRecipe } from '../../context/useContextRecipe';


const DishItem = ({receta}) => {
  const {id, image, title, vegan, glutenFree, veryHealthy} = receta;
  const { addDishMenu, removeDishItem, dishList } = useContextRecipe();

  const onAdd =() => {
    addDishMenu(receta);
  }

  const onRemove = () => {
    removeDishItem(id)
  }

  return (
    <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {vegan ? "Vegan": "Not vegan"}
                {glutenFree && " - Gluten FREE"}
                {veryHealthy && " - Healthy"}
            </p>

            {dishList.some(recipe => recipe.id === receta.id) 
            ?
              <button
                className='mt-2 w-100 btn btn-warning'
                onClick={() => onRemove()}>
                Remove From Menu
              </button>
            :
              <button
                className='mt-2 w-100 btn btn-primary'
                onClick={() => onAdd()}>
                Add to menu
              </button>
            }
                    
            <Link to={`/detalle/${id}`}>
              <button className="mt-2 w-100 btn btn-primary">Ver detalles</button>
            </Link> 
        </div>
    </div>
  )
}

export default DishItem;
