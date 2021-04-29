export function increment (count: number) {
  return {
    type: 'INCREMENT',
    payload: { count },
  }
}
