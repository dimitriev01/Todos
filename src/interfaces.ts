

export interface ITodo {
  readonly id: number
  title: string
  body: string
  tag: string
  completed: boolean
  readonly date: Date
  period: Date
}

export interface IOption {
  label: string
  value: string
};

export interface IFilter {
  query: string,
  sort: string
}

export interface IQuote {
  body: string,
  author: string
}


