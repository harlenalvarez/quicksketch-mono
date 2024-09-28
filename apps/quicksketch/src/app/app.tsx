// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { navigateTo, Route, Router } from '@qsketch/ss-router';
import styles from './app.module.css';
import { CanvasPage } from './pages';
export function App() {
  return (
    <Router>
      <Route path={['/', '/home']} >
        <CanvasPage />
      </Route>
      <Route path="/about">
        <h1>About</h1>
        <button onClick={() => navigateTo({ path: '/' })}>Go back to Home</button>
      </Route>
    </Router>
  );
}

export default App;
