import './index.scss';
import LoadingIcon from '../loading/loading';
import { useEffect, useState } from 'react';

export function MealDetail() {
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php',
      );

      const responseBody = await response.json();

      setMeal(responseBody.meals[0]);
      setLoading(false);
    };

    fetchData();
  }, []);

  return loading ? (
    <LoadingIcon />
  ) : (
    <>
      <div className="meal-detail">
        <div className="meal-detail__information">
          <div className="detail__information__thumb">
            <h4>{`${meal.strArea}: ${meal.strMeal}`}</h4>
            <a href={meal.strYoutube} target="_blank" rel="noopener">
              <img
                src={meal.strMealThumb}
                alt="meal thumb"
                className="meal-detail__information__thumb__img"
              />
            </a>
          </div>
          <div className="meal-detail__information__material">
            <h4>Ingredients</h4>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  let index = 1;
                  const results = [];

                  do {
                    results.push(
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{meal[`strIngredient${index}`]}</td>
                        <td>{meal[`strMeasure${index}`]}</td>
                      </tr>,
                    );
                    index++;
                  } while (meal[`strIngredient${index}`] !== '');

                  return results;
                })()}
              </tbody>
            </table>
          </div>
        </div>

        <div className="meal-detail__instruction">
          <h4>Instruction</h4>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    </>
  );
}
