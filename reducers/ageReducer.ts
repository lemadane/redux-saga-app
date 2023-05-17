import { ActionType } from '../constants'
import { Action, AgeState } from '../types'

const initialState = { age: 20 } as AgeState

export default function ageReducer(
   state: AgeState = initialState,
   action: Action
) {
   switch (action.type) {
      case ActionType.AGE_UP_ASYNC:
         return {
            ...state,
            age: state.age + action.payload,
         }
      case ActionType.AGE_DOWN_ASYNC:
         return {
            ...state,
            age: state.age - action.payload,
         }
      default:
         return state
   }
}
