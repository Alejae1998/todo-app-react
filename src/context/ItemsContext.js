import { createContext, useEffect, useState } from 'react';
import { getListItems } from '../services/items.js';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
};
