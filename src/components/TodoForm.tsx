import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface TodoFormProps {
  onAdd(title: string, body: string, tag: string, period: Date ): void
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
    mode: 'all'
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    onAdd(data.title.trim(), data.body.trim(), data.tag.trim(), data.period);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-todos">
      <input
        className='form-todos__input'
        autoComplete="off"
        {...register('title', {
          required: 'Название обязательно к заполнению',
        })}
        placeholder="Введите название задачи"
      />
      {errors.title && <div>{errors.title.message}</div>}
      <input
        className='form-todos__input'
        autoComplete="off"
        {...register('body', {
          required: 'Описание обязательно к заполнению',
        })}
        placeholder="Введите описание задачи"
      />
      {errors.body && <div>{errors.body.message}</div>}
      <input
        className='form-todos__input'
        autoComplete="off"
        {...register('tag', {
          required: 'Тег обязателен к заполнению',
        })}
        placeholder="Введите тег задачи"
      />
      {errors.tag && <div>{errors.tag.message}</div>}
      <input
        type='date'
        className='form-todos__input'
        {...register('period', {
          required: 'Срок задачи обязателен к заполнению',
        })}
        placeholder="Введите срок задачи"
      />
      {errors.period && <div>{errors.period.message}</div>}
      <button className='form-todos__btn' disabled={!isValid}>
        Добавить
      </button>
    </form>
  )
}

