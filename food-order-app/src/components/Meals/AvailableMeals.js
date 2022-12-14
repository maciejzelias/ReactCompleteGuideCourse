import React, { useEffect, useState } from "react";

import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

export default function AvailableMeals() {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-f1f33-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p> loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.MealsError}>
        <p> {httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
