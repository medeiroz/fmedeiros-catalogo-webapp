interface ICounter {
  count: number;
}

type CounterState = {
  count: ICounter
}

type CounterAction = {
  type: string
  counter: ICounter
};

type DispatchType = (args: CounterState) => CounterAction
