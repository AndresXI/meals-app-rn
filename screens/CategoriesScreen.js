import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CATEGORIES } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: { categoryId: itemData.item.id },
          })
        }}
      />
    )
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={(itemData) => renderGridItem(itemData)}
      numColumns={2}
    />
  )
}

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            console.log('press')
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default CategoriesScreen

const styles = StyleSheet.create({})
