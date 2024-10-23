import { useState } from "react";
import "../styles/section-main.css";
import { getFood } from "../libs/getFood";
import type { Food } from "../types/types";
import { objFood } from "../libs/objFood";

export default function SectionMain(): JSX.Element {
  const [food, setFood] = useState(objFood);

  const selectFood = () => {
    const newFood: Food = getFood();
    setFood(newFood);
  };

  return (
    <section className="section-main">
      <button className="btn-select-main" onClick={selectFood}>
        Elegir comida
      </button>
      <section>
        {food && (
          <div className="card-food">
            <h2 className="title-card">{food.name}</h2>
            <p className="detail-card">{food.detail}</p>
            {food.prepare.map((item, index) => (
              <p className="prepare-card" key={index}>
                {item}
              </p>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
