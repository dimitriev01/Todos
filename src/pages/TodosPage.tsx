import React, { useState, useEffect } from 'react'
import FilterTodos from '../components/FilterTodos'
import Modal from '../components/Modal'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { useSortedAndSearchedTodos, useSortedTodos } from '../hooks/UseTodos'
import { IFilter, ITodo,  } from '../interfaces'

interface TodosPageProps {
  // todoForIdPage(todo: ITodo): void;
  todosForIdPage( todos: ITodo[]) : void;
}

export const TodosPage: React.FC<TodosPageProps> = ({ /*todoForIdPage*/ todosForIdPage }) => {

  const [todos, setTodos] = useState<ITodo[]>([])
  const [filter, setFilter] = useState<IFilter>({ sort:'', query: '' })
  const [modal, setModal] = useState<boolean>(false)
  const sortedTodos = useSortedTodos(todos, filter.sort);
  const sortedAndSearchedTodos = useSortedAndSearchedTodos(todos, filter.sort, filter.query);
  const [isChoosedTodo, setIsChoosedTodo] = useState<boolean>(false)
  const [openedTodo, setOpenedTodo] = useState<ITodo>(null!)

  const getTodos = (todos: ITodo[]) => {
    todosForIdPage(todos);
  }

  // const getTodo = (todo: ITodo) => {
  //   todoForIdPage(todo);
  // }

  const addTodo = (title: string, body: string) => {
    const newTodo: ITodo = {
      title,
      body,
      id: Date.now(),
      completed: false
    }
    const isHasTheSameTodo = todos.find(todo => todo.title === newTodo.title && todo.body === newTodo.body);
    if (isHasTheSameTodo) {
      alert('Такая задача уже добавлена')
      return;
    }
    setTodos(prev => [newTodo, ...prev])
    // setTodos([newTodo, ...todos])
    setModal(false)
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm('Вы уверены, что хотите удалить задачу?')
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  function changeTask(todo: ITodo) {
    const index = todos.findIndex(tsk => {
      return tsk.id === todo.id
    })
    setTodos(Object.assign([...todos], { [index]: todo }))
  }

  useEffect(() => {
    const saved: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(saved)
    setIsChoosedTodo(false);
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    // getTodo(openedTodo)
    getTodos(todos)
  }/*, [isChoosedTodo, openedTodo]*/);

  return (
    <>
      <button className='add-item__btn' onClick={() => setModal(true)}>
        Добавить задачу
      </button>

      <Modal
        visible={modal}
        setVisible={setModal}
      >
        <TodoForm
          onAdd={addTodo}
        />
      </Modal>

      <FilterTodos
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList
        onUpdate={changeTask}
        setOpenedTodo={setOpenedTodo}
        sendOpened={setIsChoosedTodo}
        todos={sortedAndSearchedTodos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  )
}
