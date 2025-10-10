import React from 'react';
import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3BottomLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import { styles } from '../theme'

const ios = Platform.OS == "ios";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? "mb-2" : "mb-3"}>
        <StatusBar style='light' />
        <View className='flex-row justify-between items-center mx-4 mt-2'>
          <TouchableOpacity>
            <Bars3BottomLeftIcon size={30} strokeWidth={2} color="white"/>
          </TouchableOpacity>
          <Text className="text-white text-3x1 font-bold">
            <Text style={styles.text}>GM</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white"/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
      ></ScrollView>
    </View>
  )
}