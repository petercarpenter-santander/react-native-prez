import { useState} from 'react';

export interface Item {
  text: string;
  completed: boolean;
  id: string;
}

export const useTodo = () => {
  const [items, setItems] = useState<Item[]>([
    { completed: false, text: "Item 1", id: "1" },
    { completed: true, text: "Item 2", id: "2" },
  ]);

  const randomId = () => Date.now().toString();

  const addItem = (text: string) =>
    setItems((prevItems) => [
      { text, completed: false, id: randomId() },
      ...prevItems,
    ]);

  const removeItem = (id: string) =>
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));

  const markItemComplete = (id: string) =>
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );

  return {
    items,
    addItem,
    removeItem,
    markItemComplete,
  }
};