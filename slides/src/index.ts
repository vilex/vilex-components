import { SlidesOptions } from './index.d';
import { createElement, css, defineComponent, ViElement } from "vilex";

export const Slides = defineComponent(
    (options: SlidesOptions, childs:ViElement[]) => {
        const children = childs.map((item, index) => SlideItem(item, {transform: `translateX(${index * 100}%)`}))
        let currentIndex = 1
        const childLen = children.length
        const aniTime = 800
        
        setInterval(() => {
            children.forEach((item, index) => item.set({
                transition: `transform ${aniTime}ms`,
                transform: `translateX(${(index - currentIndex) * 100}%)`
            }))
            currentIndex++
            if (currentIndex >= childLen) {
                setTimeout(() => {
                    children.forEach((item, index) => {
                        item.set({
                            transition: `transform 0ms`,
                            transform: `translateX(${index * 100}%)`
                        })
                    })
                }, aniTime);
                currentIndex = 1
            }
        }, options.interval)

        return SlideRoot(
            {
                width: options.width,
                height: options.height,
            },
            children
        )
    }
)

const SlideRoot = createElement('div', css`
    overflow: hidden;
    position: relative;
`)

const SlideItem = createElement('div', css`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
`)