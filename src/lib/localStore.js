// src/localStore.js

import { writable } from 'svelte/store';

export function localStore(key, initial) {
  const storedValue = localStorage.getItem(key);
  const data = storedValue ? JSON.parse(storedValue) : initial;
  const store = writable(data);

  store.subscribe(value => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return store;
}
