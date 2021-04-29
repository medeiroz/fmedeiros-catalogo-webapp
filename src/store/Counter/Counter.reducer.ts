export default function (state: number = 1, action: any) {
  switch(action.type) {
    case 'INCREMENT':
      return action.payload.count + 1
    case 'DECREMENT':
      return action.payload.count - 1
    default:
      return state
  }
}

