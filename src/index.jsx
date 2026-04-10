import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import App from './App';

// Note: We intentionally do NOT wrap in <React.StrictMode> — the legacy
// class-based LandingPage wires up a single three.js renderer in
// componentDidMount that isn't idempotent under StrictMode's double-invoke.
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
