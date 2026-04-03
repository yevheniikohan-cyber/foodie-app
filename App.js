import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Button } from "react-native";

export default function App() {
  const categories = [
    "Breakfast","Lunch","Dinner","Dessert","Vegan",
    "Keto","Snacks","Drinks","Seafood","My Food"
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const sampleRecipe = {
    name: "Pasta",
    ingredients: "Noodles, Sauce",
    instructions: "Cook and mix",
    time: "20 min",
    servings: 2,
    calories: 400,
    difficulty: "Easy"
  };

  return (
    <View style={{ marginTop: 50 }}>

      {/* Categories */}
      <ScrollView horizontal>
        {categories.map((cat, i) => (
          <TouchableOpacity key={i} onPress={() => setSelectedCategory(cat)}>
            <Text style={{ margin: 10 }}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recipe */}
      <TouchableOpacity
        onPress={() =>
          setFavorites(prev =>
            prev.includes(sampleRecipe)
              ? prev.filter(r => r !== sampleRecipe)
              : [...prev, sampleRecipe]
          )
        }
      >
        <Text>{sampleRecipe.name} ❤️</Text>
      </TouchableOpacity>

      {/* Details */}
      <View>
        <Text>Ingredients: {sampleRecipe.ingredients}</Text>
        <Text>Instructions: {sampleRecipe.instructions}</Text>
        <Text>Time: {sampleRecipe.time}</Text>
        <Text>Servings: {sampleRecipe.servings}</Text>
        <Text>Calories: {sampleRecipe.calories}</Text>
        <Text>Difficulty: {sampleRecipe.difficulty}</Text>
      </View>

      {/* Favorites */}
      <Text>Favorites: {favorites.length}</Text>

      {/* Add recipe button */}
      <Button title="Add New Recipe" onPress={() => alert("Coming soon")} />

    </View>
  );
}
