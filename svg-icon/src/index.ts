import { use } from './use';
import { defineComponent } from 'vilex';
import { svg } from './svg';


export const SvgIcon = defineComponent(
    (iconName: string) => svg(
        use({
            'xlink:href': `#${iconName}`
        })
    )
)