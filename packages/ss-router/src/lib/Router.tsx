import { Children, useMemo } from 'react';
import { Route } from './Route';
import { useRoutePath } from './Router.hooks';

type RouterProps = {
  children: React.ReactElement<typeof Route> | Array<React.ReactElement<typeof Route>>;
  basePath?: string;
};


// Simple router, if we get more complex routes we should use a library
export const Router = ({ children, basePath }: RouterProps) => {
  const path = useRoutePath(basePath);
  const filterChildren = useMemo(() => {
    const childs: React.ReactNode[] = [];
    Children.forEach(children, (child) => {
      if (!child) return;
      if (typeof child !== 'object') {
        childs.push(child);
        return;
      }
      if ('props' in child && 'path' in child.props) {
        const childPaths: string[] = Array.isArray(child.props.path) ? child.props.path : [child.props.path];
        for (const childPath of childPaths) {
          const hasWildCardStart = childPath.startsWith('*');
          const hasWildCardEnd = childPath.endsWith('*');
          const rawPath = childPath.replace(/\*/g, '').toLowerCase();
          const hasVariablePaths =
            rawPath.includes('{') && childPath.includes('}');

          if (
            hasWildCardStart &&
            hasWildCardEnd &&
            path.includes(rawPath)
          ) {
            childs.push(child);
            break;
          } else if (hasWildCardEnd && path.startsWith(rawPath)) {
            childs.push(child);
            break;
          } else if (hasWildCardStart && path.endsWith(rawPath)) {
            childs.push(child);
            break;
          } else if (rawPath === path) {
            childs.push(child);
            break;
          } else if (hasVariablePaths) {
            const pathParts = path.split('/');
            const childPathParts = rawPath.split('/');
            if (pathParts.length !== childPathParts.length) continue;
            let match = true;
            for (let i = 0; i < pathParts.length; i++) {
              if (
                childPathParts[i].startsWith('{') &&
                childPathParts[i].endsWith('}')
              )
                continue;
              if (pathParts[i] !== childPathParts[i]) {
                match = false;
                break;
              }
            }
            if (match) {
              childs.push(child);
              break;
            }
          }
        }
      }
    });
    // for now we only want the first one to allow for a fallback route
    return childs[0];
  }, [path, children]);

  return filterChildren;
};