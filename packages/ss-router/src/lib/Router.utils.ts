import { Need } from '@practicaljs/ts-kit';

export const generateLink = (
  path: string,
  basePath = '/',
  search?: string,
): URL => {
  if (path.toLocaleLowerCase().startsWith('http')) {
    return new URL(path);
  }

  const navigatePath = !path
    ? basePath
    : path[0] === '/'
      ? path
      : `${basePath}/${path}`;
  return new URL(
    `${navigatePath}${search ?? window.location.search}`,
    window.location.origin,
  );
};

type navigateProps = {
  path: string,
  basePath: string,
  search?: string,
  data?: object
}
export const navigateTo = ({ path, basePath = '/', search, data }: Need<navigateProps, 'path'>): URL => {
  const url = generateLink(path, basePath, search);
  window.history.pushState(data, '', url.href);
  window.dispatchEvent(new PopStateEvent('popstate'));

  return url;
};