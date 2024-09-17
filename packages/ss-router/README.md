# ss-router: A Simple Yet Flexible Router for React

(Super Simple Router)

## Introduction

**ss-router** is a lightweight routing solution designed to keep things simple and flexible. Whether you need basic routing or more complex setups, SS-Router gives you the tools you need without over-complicating things. Unlike other routers, it doesn't impose hooks for navigation, making it a perfect choice for those who want more control over how and when their components update.

## Installation

To install ss-router, run:

```npm
npm i @qsketch/ss-router
```

## Getting Started

### Basic Example

Here's a basic example of setting up SS-Router in your React application:

```ts
return render(
  <Router>
    <Route path={['/', '/main']}>
      <div>main</div>
    </Route>
    <Route path={'/profile/{profileId}/edit'}>
      <div>Edit profile</div>
    </Route>
    <Route path="*/wildPath">
      <div>wild</div>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Router>
);
```

### Explanation:

- **Multiple Routes**: You can navigate to the same component using multiple routes, normaly you want your main '/' to also have a named route.
- **Dynamic Route**: You can have a variable route by adding {someName} into your route and it will match what's in front and after. If this is a variable you can simply grab it from location.pathname. `location.pathname.split('/')[index]`
- **Wildcard**: _/wildPath matches any path ending in /wildPath or /wildPath/_ matches any path starting with /wildPath.

## Navigation with `navigateTo`

The `navigateTo` function allows you to programmatically change routes without needing a React hook. This function can be used anywhere, even outside the React ecosystem, making it extremely flexible.

### Example Usage

```ts
navigateTo({ path: '/' });
navigateTo({ path: `/profile/${profile.id}/edit` });
// do not use leading / on path when using base
navigateTo({ path: `edit`, base: `/profile/${profile.id}` });
navigateTo({ path: `view`, base: `/profile/${profile.id}` });

navigateTo({ path: '/', search: 'bar=1' });
navigateTo({ to: '/another-page' }); // Keeps the current search params
navigateTo({ to: '/another-page', search: '' }); // Removes any existing search params
```

## Hooks: `useRoutePath` & `useRouteSearch`

For cases where you want to listen to route changes and reload your components, you can use the built-in hooks:

- `useRoutePath`: Listens to the current route path.
- `useRouteSearch`: Listens to the current search query in the URL.

These hooks allow components to react to route changes as needed. However, if you simply want to fetch the current path when a component mounts, you can do so by accessing the location object directly.

```ts
const path = useRoutePath(); // Listen to path changes
const search = useRouteSearch(); // Listen to search param changes
```

If you don’t need to listen to changes, you can use:

```ts
const currentPath = window.location.pathname;
const currentSearch = window.location.search;
```

### License

ss-router is [MIT licensed](./LICENSE.MD)
