const persistRootKey = 'persist:root';
export const removeFromLocalStorage = (key: string) => {
  const persistRoot = localStorage.getItem(persistRootKey);

  if (persistRoot) {
    let root = JSON.parse(persistRoot);
    delete root[key];
    localStorage.setItem(persistRootKey, JSON.stringify(root));
  }
};
