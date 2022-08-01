import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { today } from '../../hooks/UseTodos';
import Select from '../Select/Select'
import cl from './Form.module.scss'

interface TodoFormProps {
  onAdd(title: string, body: string, tag: string, period: Date): void
}

type Inputs = {
  title: string,
  body: string
  tag: string
  period: Date
};

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {

  const { register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<Inputs>({
    mode: 'onBlur'
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    onAdd(data.title.trim(), data.body.trim(), data.tag, data.period);
    reset();
  }

  // const [tag, setTag] = useState<string>('')
  // const tagOptions = [
  //   { value: 'work', name: 'Работа' },
  //   { value: 'study', name: 'Учёба' },
  //   { value: 'personal', name: 'Личное' }
  // ]


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <input
        className={cl.form__input}
        autoComplete="off"
        {...register('title', {
          required: 'Название обязательно к заполнению',
        })}
        placeholder="Введите название задачи"
      />
      {errors.title && <div>{errors.title.message}</div>}
      <input
        className={cl.form__input}
        autoComplete="off"
        {...register('body', {
          required: 'Описание обязательно к заполнению',
        })}
        placeholder="Введите описание задачи"
      />
      {errors.body && <div>{errors.body.message}</div>}
      <input
        className={cl.form__input}
        autoComplete="off"
        {...register('tag', {
          required: 'Тег обязателен к заполнению',
        })}
        placeholder="Введите тег задачи"
      />
      {/* <Select
        {...register("tag")} 
        options={tagOptions}
      >
      </Select> */}

      {errors.tag && <div>{errors.tag.message}</div>}
      <input
        type='date'
        min={today}
        className={cl.form__input}
        {...register('period', {
          required: 'Срок задачи обязателен к заполнению',
        })}
        placeholder="Введите срок задачи"
      />
      {errors.period && <div>{errors.period.message}</div>}
      <button className={cl.form__btn} disabled={!isValid}>
        Добавить
      </button>
    </form>
  )
}

