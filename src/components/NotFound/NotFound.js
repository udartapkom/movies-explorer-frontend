import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className = 'Not-found'>
      <h1 className = 'Not-found__text'>404</h1>
      <p className = 'Not-found__description'>Страница не найдена</p>
      <Link to = '/' className = 'Not-found__back'>Назад</Link>
    </section>
  );
}
export default NotFound;