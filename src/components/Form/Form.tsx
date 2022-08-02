import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { today } from '../../hooks/UseTodos';
import ReactSelect from 'react-select'
import cl from './Form.module.scss'
import { IOption } from '../../interfaces';
import Btn from '../Btn/Btn';
import Input from '../Input/Input'

interface TodoFormProps {
  onAdd(title: string, body: string, tag: string, period: Date): void
}

type Inputs = {
  title: string,
  body: string
  tag: string
  period: Date
};

const tagOptions: IOption[] = [
  { value: 'work', label: 'Работа' },
  { value: 'study', label: 'Учёба' },
  { value: 'personal', label: 'Личное' }
]

const getValue = (value: string) => value ? tagOptions.find(option => option.value === value) : ''

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {

  const { register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<Inputs>({
    mode: 'onSubmit'
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    onAdd(data.title.trim(), data.body.trim(), data.tag.trim(), data.period);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <Input
        className={cl.form__input}
        autoComplete="off"
        {...register('title', {
          required: 'Название обязательно к заполнению',
        })}
        placeholder="Введите название задачи"
      />
      {errors.title && <div className={cl['form__field-error']}>{errors.title.message}</div>}
      <Input
        className={cl.form__input}
        autoComplete="off"
        {...register('body', {
          required: 'Описание обязательно к заполнению',
        })}
        placeholder="Введите описание задачи"
      />
      {errors.body && <div className={cl['form__field-error']}>{errors.body.message}</div>}

      <Controller
        rules={{
          required: 'Тег обязателен к заполнению'
        }}
        render={
          ({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <ReactSelect
                className={cl['form__custom-select']}
                classNamePrefix='custom-select'
                placeholder='Тег'
                options={tagOptions}
                value={getValue(value)}
                onChange={(newValue) => onChange((newValue as IOption).label)}
              />
              {error && <div className={cl['form__field-error']}>{error.message}</div>}
            </div>
          ) }
        control={control}
        name='tag'
      />

      <Input
        type='date'
        min={today}
        className={cl.form__input}
        {...register('period', {
          required: 'Срок задачи обязателен к заполнению',
        })}
        placeholder="Введите срок задачи"
      />
      {errors.period && <div className={cl['form__field-error']}>{errors.period.message}</div>}
      <Btn className={cl['form__btn']}>
        Добавить
      </Btn>
    </form>
  )
}

