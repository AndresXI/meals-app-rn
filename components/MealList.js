import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import MealItem from './MealItem'

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals)

  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.some(
      (meal) => meal.id === itemData.item.id
    )

    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFavorite,
            },
          })
        }}
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: '100%', padding: 5 }}
        data={props.listData}
        KeyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealList
