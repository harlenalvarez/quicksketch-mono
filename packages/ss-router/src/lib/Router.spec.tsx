import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Route } from './Route';
import { Router } from './Router';

const renderTest = () => {
  return render(
    <Router>
      <Route path={['/', '/main']}>
        <div>main</div>
      </Route>
      <Route path={'/canvas/systemdesign/{sketchId}'}>
        <div>canvas</div>
      </Route>
      <Route path='*/wildPath'>
        <div>wild</div>
      </Route>
      <Route path='*'>
        <div>404</div>
      </Route>
    </Router>
  )
}

describe('Router', () => {
  test('Should render main on empty path', () => {
    window.history.pushState({}, '', '/');
    const { unmount } = renderTest();
    screen.getByText('main');
    expect(screen.queryByText('canvas')).toBeNull();
    unmount();
  });

  test('Should render main on /main path', () => {
    window.history.pushState({}, '', '/main');
    const { unmount } = renderTest();
    screen.getByText('main');
    expect(screen.queryByText('canvas')).toBeNull();
    unmount();
  });

  test('Should render canvas', () => {
    window.history.pushState({}, '', '/canvas/systemdesign/1232312');
    const { unmount } = renderTest();
    screen.getByText('canvas');
    expect(screen.queryByText('main')).toBeNull();
    unmount();
  });

  test('Should render wild path', () => {
    window.history.pushState({}, '', '/foo/wildPath');
    const { unmount } = renderTest();
    screen.getByText('wild');
    unmount();
  })

  test('Should render 404 page', () => {
    window.history.pushState({}, '', '/bad');
    const { unmount } = renderTest();
    screen.getByText('404');
    unmount();
  })
})