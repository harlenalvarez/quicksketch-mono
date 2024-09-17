import { useCallback, useEffect, useState } from 'react';

const getPath = (basePath?: string) => {
  let path = window.location.pathname
  if (basePath) {
    path = path.replace(basePath, '');
    path ||= '/';
  }
  return path.toLowerCase();
}

// only use if you want to reload on path changes
export const useRoutePath = (basePath?: string) => {
  const [path, setPath] = useState(getPath(basePath));
  const onPopState = useCallback(() => {
    const newPath = getPath(basePath);
    setPath(newPath);
  }, [basePath]);

  useEffect(() => {
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, [onPopState]);
  return path;
}

// only use if you want to reload on search changes
export const useRouteSearch = () => {
  const [search, setSearch] = useState(window.location.search);
  const onPopState = useCallback(() => {
    setSearch(window.location.search);
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, [onPopState]);
  return search;
}