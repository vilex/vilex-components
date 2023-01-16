import { ViElement } from 'vilex';
export type FireContent = string | number | ViElement
export type FireStyled = { [key: string]: string }

export interface GlobalFireConf {
    delay?: number
    speed?: number
}

export interface FireData extends GlobalFireConf {
    content: FireContent,
    styled?: FireStyled
}

export interface FireComponent extends ViElement {
    move: (speed: number) => number
}
export interface FireListItemData {
    el: FireComponent
    data: FireData
}