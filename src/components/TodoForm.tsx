import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface TodoFormProps {
  onAdd(title: string, body: string): void
}

type Inputs = {
  title: string,
  body: string
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
    onAdd(data.title.trim(), data.body.trim());
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-todos">
      <input
        className='form-todos__input'
        autoComplete="off"
        {...register('title', {
          required: 'This is required',
        })}
        placeholder="Введите название дела"
      />
      {errors.title && <div>{errors.title.message}</div>}
      <input
        className='form-todos__input'
        autoComplete="off"
        {...register('body', {
          required: 'This is required',
        })}
        placeholder="Введите описание дела"
      />
      {errors.body && <div>{errors.body.message}</div>}
      <button className='form-todos__btn' disabled={!isValid}>
        Добавить
      </button>
    </form>
  )
}

