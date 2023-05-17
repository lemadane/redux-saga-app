import React from 'react'
import { Button, View } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ActionType } from '../constants'


export default function AgeControl() {
   const dispatch = useDispatch()
   const age: number = useSelector((state: any) => {
      return state.ageReducer.age
   })
   console.log({ age })
   return <View style={{ flex: 1 }}>
      <View style={{ margin: 5, padding: 5 }}>
         <Button
            title='Age Up'
            onPress={
               () => dispatch(
                  {
                     type: ActionType.AGE_UP
                  }
               )
            }
         />
      </View>
      <View style={{ margin: 5, padding: 5 }}>

         <Button
            title='Age Down'

            onPress={
               () => dispatch(
                  {
                     type: ActionType.AGE_DOWN
                  }
               )
            } />
      </View>
   </View>
}