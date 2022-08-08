import React from 'react'
import { ITodo } from '../../interfaces'
import TodoItem from '../Todo/Todo'
import cl from './TodoList.module.scss'

type TodoListProps = {
  todos: ITodo[]
  onRemove: (id: number) => void
  isOpenedTodo: (opened: boolean) => void
  setOpenedTodo: (todo: ITodo) => void
  onUpdate: (todos: ITodo) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onUpdate, isOpenedTodo, setOpenedTodo }) => {

  if (!todos.length) {
    return (<p className={cl.todos__empty}>Пока дел нет!</p>)
  }

  return (
    <ul className={cl.todos}>
      {todos && todos.map(todo => {
        return (
          <TodoItem
            setOpenedTodo={setOpenedTodo}
            isOpenedTodo={isOpenedTodo}
            onUpdate={onUpdate}
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
          />
        )
      })}
    </ul>
  )
}
