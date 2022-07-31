import React, { useEffect, useMemo, useState } from 'react';
import { IQuote } from '../../interfaces';
import cl from './QuoteOfDay.module.scss'

const QuoteOfDay = () => {
  const api = 'https://favqs.com/api/qotd';
  const [quote, setQuote] = useState<IQuote>({ body: '', author: '' })
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await (await fetch(api)).json();
        setQuote({ body: response.quote.body, author: '—' + response.quote.author })
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(true)
      }
    }

    fetchData();
  }, [api])

  useMemo(() => {
    localStorage.setItem('quote', JSON.stringify(quote))
  }, [quote])

  if (error) {
    return (
      <div className={cl['quote-error']}>Невозможно получить цитату дня. Сервер не отвечает</div>
    )
  }

  return (
    <div className={cl.quote}>
      <div className={cl.quote__title}>
        Цитата дня:
      </div>
      {
        isLoading ?
        <p>Идет загрузка...</p>
        :
          <>
            <i className={['fa-solid', 'fa-quote-left', cl.quote__icon].join(' ')}></i>
            <div className={cl.quote__text}>
              {quote.body}
            </div>
            <div className={cl.quote__autor}>
              {quote.author}
            </div>
          </>
      }

    </div>
  );
};

export default QuoteOfDay;