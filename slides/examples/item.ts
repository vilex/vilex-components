import { css } from 'vilex';
import { createElement } from 'vilex';
import { ItemOptions } from './item.d';
import { defineComponent } from 'vilex';

export const Item = defineComponent(
    (itemOptions: ItemOptions) => {
    return ItemRoot(
        {
            width: itemOptions.width,
            height: itemOptions.height,
            backgroundColor: itemOptions.color
        },
        itemOptions.text
    )
})


const ItemRoot = createElement('div', css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    user-select: none;
`)