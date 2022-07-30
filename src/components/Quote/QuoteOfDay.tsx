import React, { useEffect, useMemo, useState } from 'react';
import cl from './QuoteOfDay.module.scss'

const QuoteOfDay = () => {
  const api = 'https://favqs.com/api/qotd';
  const [quote, setQuote] = useState({ body: '', author: '' })
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await (await fetch(api)).json();
        setQuote({ body: response.quote.body, author: '—' + response.quote.author })
      } catch (err) {
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
      <i className={['fa-solid', 'fa-quote-left', cl.quote__icon].join(' ')}></i>
      <div className={cl.quote__text}>
        {quote.body}
      </div>
      <div className={cl.quote__autor}>
        {quote.author}
      </div>
    </div>
  );
};

export default QuoteOfDay;