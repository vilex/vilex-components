import { createApp, ref } from "vilex";
import { Radio, RadioGroup } from "../src";

createApp(() => {
    const checkedIndex = ref(0)
    return RadioGroup(
        {
            checkedIndex,
            radios: [
                Radio({label: 'haha'}),
                Radio({label: 'lsdjfkjewfj'})
            ]
        }
    )
}).mount('#app')