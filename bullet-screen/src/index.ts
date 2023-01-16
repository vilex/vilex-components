import { ViElement, span } from 'vilex';
import { Fire } from './fire';
import { FireComponent, FireContent, FireData, FireListItemData, FireStyled, GlobalFireConf } from './types'


export class BulletScreen {
    globalFireConf: GlobalFireConf = {}
    private intervalId = -1
    private fireList: FireListItemData[] = []
    parentElement: ViElement
    pageWidth: number = window.innerWidth
    constructor(el: ViElement, conf?: GlobalFireConf) {
        this.parentElement = el
        const { delay, speed} = conf || {}
        this.globalFireConf.delay = delay ?? 0
        this.globalFireConf.speed = speed || 3
        window.addEventListener('resize', () => this.pageWidth = window.innerWidth)
        setTimeout(() => this.intervalId = setInterval(() => {
            for(let i = this.fireList.length -1; i >= 0; i--) {
                const item = this.fireList[i]
                const x = item.el.move(item.data.speed as number)
                if (x < -this.pageWidth) {
                    this.parentElement.remove(item.el)
                    this.fireList.shift()
                }
            }
        }, 16))

    }

    fire(fireData: FireData) {
        fireData.delay = fireData.delay ?? this.globalFireConf.delay
        fireData.speed = fireData.speed ?? this.globalFireConf.speed
        setTimeout(() => {
            const el = Fire(fireData.content, this.pageWidth, fireData.styled)
            this.fireList.push({el, data: fireData})
            this.parentElement.add(el)
        }, fireData.delay)
    }
}