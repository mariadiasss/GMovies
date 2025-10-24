import { View, Text, Dimensions, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
//import Carousel from '@react-native-reanimated-carousel';

var { width, height} = Dimensions.get('window');

export default function TrendingMovies({data}) {
    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('Movie', item);
    }

  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-3">Em Alta</Text>
      
    </View>
  )
}