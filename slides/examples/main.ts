import { Item } from './item';
import { createApp, div, img, span } from 'vilex'
import { Slides } from '../src'

function App() {
    return div(
        span('slides demo'),
        Slides(
            {
                width: '100%',
                height: '200px',
                interval: 5000,
            },
            [
                Item({ width: '100%', height: '200px', color: 'red', text: '1' }),
                Item({ width: '100%', height: '200px', color: 'skyblue', text: '2' }),
                Item({ width: '100%', height: '200px', color: 'green', text: '3' }),
                Item({ width: '100%', height: '200px', color: 'yellow', text: '4' }),
                Item({ width: '100%', height: '200px', color: 'red', text: '1' }),
            ]
        )
    )
}

createApp(App).mount('#app');

