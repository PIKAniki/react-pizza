import React from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://63077dcec0d0f2b80131244e.mockapi.io/items/` + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className='loading-text'>Загрузка...</div>;
  }

  return (
    <div className="container pizzaPage">
      <img className="pizzaPage-img" src={pizza.imageUrl} alt="pizza" />
      <h2 className="pizzaPage-title">{pizza.title}</h2>
      <h4 className="pizzaPage-price">{pizza.price} ₽</h4>
      <Link to="/">
      <button className='button button--outline button--add'>
        <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
