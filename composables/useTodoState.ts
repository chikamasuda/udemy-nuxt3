export const useTodoState = () => {
  //refの記述をuseStateでかくと下記のようになる。
  const todo = useState<string[]>('todo', () => [])
  const complete = useState<string[]>('complete', () => [])
  return {
    todo,
    complete
  }
}