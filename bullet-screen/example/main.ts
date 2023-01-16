import { div, createApp, useMounted } from 'vilex'
import { BulletScreen } from '../src'

console.log(div())


createApp(() => {
    
    const onDivMounted = (vn) => {
        const bs = new BulletScreen(vn)
        

        setInterval(() => {
            bs.fire({
                content: 'dljdlkjfsldjf'
            })
        }, 500)
    }
    return div(useMounted(onDivMounted))
}).mount('#app')