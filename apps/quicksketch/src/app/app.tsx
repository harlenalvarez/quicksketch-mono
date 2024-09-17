// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { navigateTo, Route, Router } from '@qsketch/ss-router';
import styles from './app.module.css';
export function App() {
  return (
    <Router>
      <Route path={['/', '/home']} >
        <div>
          <h1>Welcome to QuickSketch!</h1>
          <button onClick={() => navigateTo({ path: '/about' })}>Go into About</button>
        </div>
      </Route>
      <Route path="/about">
        <h1>About</h1>
        <button onClick={() => navigateTo({ path: '/' })}>Go back to Home</button>
      </Route>
    </Router>
  );
}

export default App;
