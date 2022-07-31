

export interface ITodo {
  id: number
  title: string
  body: string
  tag: string
  completed: boolean
  date: Date
  period: Date
}

export interface IOption {
  name: string
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


