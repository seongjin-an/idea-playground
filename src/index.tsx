import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "react-query";

if (process.env.NODE_ENV === 'development') {
    console.log('development')
    const { worker } = require('./mocks/browser')
    worker.start()
}



const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 4,
            // refetchOnMount: false,
            // staleTime: Infinity
            // suspense: true
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
