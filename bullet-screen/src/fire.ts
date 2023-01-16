import { ViElement, span, css, ref, computed, createElement} from 'vilex';
import { FireComponent, FireContent, FireStyled } from "./types";

export const Fire = (content: FireContent, width: number, styled?: FireStyled) => {
    const left = ref(0)
    const _styled = styled || { color: 'white' }
    _styled.position = 'absolute'
    _styled.left = '100%' //computed(left, () => left.value + 'px') as unknown as string
    _styled.top =  Math.round(Math.random() * 200) + 20 + 'px'
    _styled.transform = computed(left, () => `translateX(${left.value}px)`) as unknown as string

    let _content = content as FireComponent
    if (_content.isVilexNode) {
        _content.move = move
        return _content.set(_styled)
    }

    function move(speed: number) {
        return left.value -= speed
    }
    
    _content = FireText(content, _styled) as FireComponent
    _content.move = move
    return _content
}

const FireText = createElement('span', css`
    white-space: nowrap;
`)