import home from '../../assets/home.png';
import { useContextRecipe } from '../../context/useContextRecipe';
import RecipeTable from './RecipeTable';

const Home = () => {

  const { dishList, removeDishItem, priceTotal, averageReadyIn, averageHealtScore, clearDishMenu } = useContextRecipe();
  return (
    <div className="container">
      <div className="row">
        <div className='d-flex flex-column justify-content-center  col-sm-12 col-md-6'>
          <h1 className='mt-5'>Hotel Menu</h1>
          <h2 className='mt-2'>Selecciona el menu que mas te convenga</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ut unde eaque, minima repellat quaerat, sunt nihil officiis nesciunt vitae maiores atque perferendis rerum accusantium reiciendis delectus maxime esse expedita?</p>
        </div>
        <div className="col-sm-12 col-md-6">
          <img className='img-fluid' src={home} alt='Imagen de hamburguesa' />
        </div>
      </div>

      {dishList.length === 0
      ?
        <div className="alert alert-danger mt-5" role="alert">
          Aun no hay platos en el menu - Ingresa a Search Recipes para agregar platos...
        </div>
      :
      
        <RecipeTable 
          dishList={dishList} 
          removeDishItem={removeDishItem} 
          priceTotal={priceTotal} 
          averageReadyIn={averageReadyIn} 
          averageHealtScore={averageHealtScore} 
          clearDishMenu={clearDishMenu}
        />
      }
    </div>
  )
}

export default Home;
