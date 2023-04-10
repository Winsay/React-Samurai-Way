import SamuraiJSApp from './App';
import { createRoot } from 'react-dom/client';


test('renders without crashing', () => {
    const root = createRoot(document.createElement('div'))
    root.render(<SamuraiJSApp />);
    root.unmount();
});
