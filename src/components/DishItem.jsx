import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';

const InputAdd = ({onAdd}) => {
  return (
      <button
          className='mt-2 w-100 btn btn-primary'
          onClick={() => onAdd()}>
          Add to menu
      </button>
  );
};

const InputRemove = ({onAdd}) => {
  return (
    <button
      className='mt-2 w-100 btn btn-primary'
      onClick={() => onAdd()}>
      Remove From Menu
    </button>
  );
};


const DishItem = ({receta}) => {
  const {id, image, title, vegan, glutenFree, veryHealthy} = receta;
  const { addDishMenu, removeDishItem } = useRecipeContext();
  const [inputType, setInputType] = useState('add');

  const onAdd =() => {
    addDishMenu(receta)
  }

  const onRemove = () => {
    removeDishItem(id)
  }

  const handleInterchangeability = (e) => {
    setInputType('remove');
  };

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
            <div onClick={handleInterchangeability}>
              {inputType === 'add' 
                ? 
                  <InputAdd onAdd={onAdd}/>
                : 
                  <InputRemove onAdd={onRemove}/>
              }
            </div>
            
            <Link to={`/detalle/${id}`}>
              <button className="mt-2 w-100 btn btn-primary">Ver detalles</button>
            </Link> 
        </div>
    </div>
  )
}

export default DishItem;
