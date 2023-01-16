import { createElement, css, defineComponent, ref, span, ViElement } from 'vilex';

type CallChangeHandler = (checked: boolean) => any
interface RadioOptions {
    checked?: boolean
    name?: string
    label: string
    change?: CallChangeHandler
}

export interface ReturnRadio extends ViElement {
    checked: (checked: boolean) => void
    change: (call: CallChangeHandler) => any
}

export const Radio = defineComponent(
    (options?:RadioOptions) => {
        let { label, name, checked, change } = options || {
            checked: false,
            label: 'radio',
        }
        const changeHandlers: CallChangeHandler[] = []
        change && changeHandlers.push(change)
        const refChecked = ref(checked || false)

        const radio = RadioContainer(
            {
                onclick() {
                    refChecked.value = !refChecked.value
                    changeHandlers.forEach(call => call && call(refChecked.value))
                }
            },
            Selection(
                [
                    {checked: refChecked}
                ],
                '✓'
            ),
            span(label)
        ) as ReturnRadio

        radio.checked = (checked: boolean) => refChecked.value = checked
        radio.change = (call: CallChangeHandler) => changeHandlers.push(call)

        return radio
    }
)

const RadioContainer = createElement('div', css`
    display: inline-block;
    cursor: pointer;
    user-select: none;
`)

const Selection = createElement('div', css`
    display: inline-block;
    width: 0.8em;
    height: 0.8em;
    font-size: 0.9em;
    color: white;
    padding: 1px;
    line-height: 1;
    border-radius: 3px;
    text-align: center;
    background-color: white;
    border: 1px solid #c8c9cc;
    margin-right: 5px;
    &.checked {
        border-color: rgb(26, 179, 112);
        background-color: rgb(26, 179, 112);
    }
`)