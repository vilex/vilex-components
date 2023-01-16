import { createElement, css, defineComponent, div, Ref, watch } from 'vilex'
import { ReturnRadio } from './radio'

interface RadioGroupOptions {
    checkedIndex: Ref<number> | number,
    radios: ReturnRadio[]
}

export const RadioGroup = defineComponent(
    (options: RadioGroupOptions) => {
        const { radios, checkedIndex } = options
        let currentItem = radios[(checkedIndex as Ref<number>).value]

        const setItemChecked = (index: number) => {
            if (currentItem) {
                currentItem.checked(false)
            }
            currentItem = radios[index]
            currentItem.checked(true)
        }
        radios.forEach((radio, index) => {
            radio.change((checked) => {
                setItemChecked(index)
            })
        })

        currentItem.checked(true)
        watch(options.checkedIndex, setItemChecked)

        return RadioGroupContainer(
            radios
        )
    }
)

const RadioGroupContainer = createElement('div', css`
    display: flex;
    flex-direction: row;
    column-gap: 16px;
`)

