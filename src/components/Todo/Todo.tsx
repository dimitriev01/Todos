import React, { useEffect, useState } from 'react';
import { ITodo } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faBookOpen, faEdit } from '@fortawesome/free-solid-svg-icons'
import cl from './Todo.module.scss'
import { today } from '../../hooks/UseTodos';
import Input from '../Input/Input';
import Select from '../Select/Select';


interface TodoItemProps {
    todo: ITodo
    onRemove: (id: number) => void
    isOpenedTodo: (opened: boolean) => void
    setOpenedTodo: (todo: ITodo) => void
    onUpdate: (todos: ITodo) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onRemove, isOpenedTodo, setOpenedTodo, onUpdate }) => {

    const [todoEdit, setTodoEdit] = useState<ITodo>(todo)

    const nameTaskRef = React.useRef<HTMLInputElement>(null);
    const descriptionTaskRef = React.useRef<HTMLInputElement>(null);
    const tagTaskRef = React.useRef<HTMLInputElement>(null);
    const periodRef = React.useRef<HTMLInputElement>(null);
    const inputsRefs = [nameTaskRef, descriptionTaskRef, tagTaskRef, periodRef];

    const classes = [cl.todo]
    if (todo.status === 'done') {
        classes.push(cl['todo_completed'])
    } else
        if (todo.status === 'inWork') {
            classes.push(cl['todo_in-work'])
        }

    const giveEdit = () => {
        setTodoEdit({ ...todoEdit, disabled: !todoEdit.disabled })
        inputsRefs.map(input => {
            return input.current!.disabled = !todoEdit.disabled;
        })
    }

    const todoOpenHandler = () => {
        isOpenedTodo(true)
        setOpenedTodo(todo)
    }

    const selectHandler = (selectedStatus: string) => {
        setTodoEdit({ ...todoEdit, status: selectedStatus })
    }

    useEffect(() => {
        onUpdate({ ...todo, ...todoEdit })
    }, [todoEdit])

    useEffect(() => {
        setOpenedTodo(todo)
    }, [todo.status])

    return (
        <li className={classes.join(' ')} key={todo.id}>

            <span>Название:</span>
            <Input
                disabled={todoEdit.disabled}
                ref={nameTaskRef}
                className={cl.todo__input}
                value={todoEdit.title.trim()}
                onChange={e => setTodoEdit({ ...todoEdit, title: e.target.value })}
            />

            <span> Описание:</span>
            <Input
                disabled={todoEdit.disabled}
                ref={descriptionTaskRef}
                className={cl.todo__input}
                value={todoEdit.body.trim()}
                onChange={e => setTodoEdit({ ...todoEdit, body: e.target.value })}
            />

            <span> Тег:</span>
            <Input
                disabled={todoEdit.disabled}
                ref={tagTaskRef}
                className={cl.todo__input}
                value={todoEdit.tag.trim()}
                onChange={e => setTodoEdit({ ...todoEdit, tag: e.target.value })}
            />

            <span> Срок:</span>
            <Input
                disabled={todoEdit.disabled}
                ref={periodRef}
                min={today}
                type='date'
                className={cl.todo__input}
                value={new Date(todoEdit.period).toLocaleDateString().split('.').reverse().join('-')}
                onChange={e => setTodoEdit({ ...todoEdit, period: new Date(e.target.value) })}
            />

            <span> Дата добавления:</span>
            <Input
                disabled
                className={cl.todo__input}
                value={new Date(todoEdit.date).toLocaleDateString()}
            />

            <div className={cl.todo__tools}>
                <span
                    className={cl.todo__open}
                    onClick={todoOpenHandler}
                >
                    <FontAwesomeIcon icon={faBookOpen} />
                </span>

                <Select
                    disabled
                    id={`status${todo.id}`}
                    className={cl.todo__select}
                    value={todo.status}
                    onChange={selectedStatus => selectHandler(selectedStatus)}
                    options={[
                        { value: 'new', label: "Новая" },
                        { value: 'inWork', label: "В работе" },
                        { value: 'done', label: "Завершена" },
                    ]}
                />

                <span
                    className={cl.todo__edit}
                    onClick={giveEdit}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </span>

                <span
                    className={cl.todo__delete}
                    onClick={e => onRemove(todo.id)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </span>
            </div>

        </li>
    );
};

export default TodoItem;