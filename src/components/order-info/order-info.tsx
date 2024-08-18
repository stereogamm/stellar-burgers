import { FC, useMemo } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient, TOrder } from '@utils-types';
import { getIngredientsWithSelector } from '../../services/slices/IngredientsSlice';
import { getFeedOrders } from '../../services/slices/FeedDataSlice';
import { useSelector } from '../../services/store';
import { useParams } from 'react-router-dom';

export const OrderInfo: FC = () => {
  // Используем useParams для получения параметра (номер заказа) из URL
  const params = useParams();
  const orders = useSelector(getFeedOrders); // Получаем список заказов из состояния Redux

  const orderData: TOrder | undefined = orders.find(
    (item) => item.number === Number(params.number)
  );

  const ingredients: TIngredient[] = useSelector(getIngredientsWithSelector);

  /* Готовим данные для отображения. Используем мемоизацию для того, чтобы производить вычисление только если данные изменились */
  const orderInfo = useMemo(() => {
    if (!orderData || !ingredients.length) return; // Если данные о заказе или ингредиенты отсутствуют, ничего не возвращаем

    const date = new Date(orderData.createdAt); // Преобразуем дату создания заказа в объект Date

    type TIngredientsWithCount = {
      [key: string]: TIngredient & { count: number };
    };

    // Собираем информацию об ингредиентах из заказа, включая их количество
    const ingredientsInfo = orderData.ingredients.reduce(
      (acc: TIngredientsWithCount, item) => {
        if (!acc[item]) {
          // Если ингредиент еще не был добавлен, находим его в общем списке ингредиентов и добавляем
          const ingredient = ingredients.find((ing) => ing._id === item);
          if (ingredient) {
            acc[item] = {
              ...ingredient,
              count: 1
            };
          }
        } else {
          acc[item].count++; // Если ингредиент уже был добавлен, увеличиваем его количество
        }

        return acc;
      },
      {}
    );

    // Рассчитываем общую стоимость заказа
    const total = Object.values(ingredientsInfo).reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    // Возвращаем собранные данные: информацию о заказе, ингредиенты, дату и общую стоимость
    return {
      ...orderData,
      ingredientsInfo,
      date,
      total
    };
  }, [orderData, ingredients]);

  if (!orderInfo) {
    return <Preloader />;
  }

  return <OrderInfoUI orderInfo={orderInfo} />;
};
