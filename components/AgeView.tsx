import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'


export default function AgeView() {
   const age: number = useSelector(
      (state: any) => {
         return state.ageReducer.age
      }
   )
   return <View style={{ flex: 1, marginTop: 300 }}>
         <Text >Your Age {age}</Text>
      </View>
}