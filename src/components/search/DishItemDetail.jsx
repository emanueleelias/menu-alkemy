import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Spinner from "../../commons/Spinner";



const DishItemDetail = () => {
    const [dishData, setDishData] = useState({});
    const [loading, setLoading] = useState(false);
    const { dishId } = useParams();
    const keyApi = "917f4d91107f4f17ba39cb595415a3a8";
    const urlApi = "https://api.spoonacular.com/recipes/";

    useEffect(() => {
        setLoading(true);
        axios.get(`${urlApi}${dishId}/information?apiKey=${keyApi}`)
        .then(function (response) {
            setDishData(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(setTimeout(() => {
            setLoading(false);
        }, 2200))
    }, [dishId])
    
    const { title, image, summary, instructions, dairyFree, glutenFree, vegan, vegetarian, veryHealthy } = dishData;
    return (
        <>
            {
                loading 
                ?
                    <div className="position-relative vh-100">
                        <div className='position-absolute top-50 start-50 translate-middle'>
                            <Spinner  />
                        </div>
                    </div>
                :
                    <div className="container">
                        <h1 className="text-center mt-5">{title}</h1>
                        <div className="text-center">
                            <img className="img-fluid rounded border" src={image} alt={title} />
                        </div>

                        <h2 className="text-center mt-5">Dish Summary</h2>
                        <p className="m-auto mt-3" dangerouslySetInnerHTML={{ __html: summary }}></p>

                        <h2 className="text-center mt-5">Recipe Instructions</h2>
                        <div className="mt-3" dangerouslySetInnerHTML={{__html: instructions}}></div>

                        <h2 className="mt-5">Other data</h2>
                        <ul className="mt-3">
                            <li><span className="fw-bold">Dairy Free:</span> {dairyFree ? " Yes." : " No."}</li>
                            <li><span className="fw-bold">Gluten Free:</span> {glutenFree ? " Yes." : " No."}</li>
                            <li><span className="fw-bold">Vegan:</span> {vegan ? " Yes." : " No."}</li>
                            <li><span className="fw-bold">Vegetarian:</span> {vegetarian ? " Yes." : " No."}</li>
                            <li><span className="fw-bold">Very Healthy:</span> {veryHealthy ? " Yes." : " No."}</li>
                        </ul>
                    </div>
            }
        </>
    )
}

export default DishItemDetail;