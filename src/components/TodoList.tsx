import React from 'react'
import { ITodo } from '../interfaces'
import TodoItem from './TodoItem'

type TodoListProps = {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
  sendOpened: (opened: boolean) => void
  setOpenedTodo: (todo: ITodo) => void
  onUpdate: (todos: ITodo) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle, onUpdate, sendOpened, setOpenedTodo }) => {

  if (!todos.length) {
    return <p className='todos-empty'>Пока дел нет!</p>
  }

  return (
    <ul className='todos'>
      {todos && todos.map(todo => {

        return (
          <TodoItem
            setOpenedTodo={setOpenedTodo}
            sendOpened={sendOpened}
            onUpdate={onUpdate}
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        )
      })}
    </ul>
  )
}
