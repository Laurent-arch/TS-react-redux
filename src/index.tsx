import * as ReactDOM from 'react-dom';
import { store } from "./state";
import App from "./state/components/App";

import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
