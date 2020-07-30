import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

        checkNumInputs('#width');
        checkNumInputs('#height');

        function bindActionToElems(event, elem, prop) {
            elem.forEach((item, i) => {
                item.addEventListener(event, () => {
                    switch (item.nodeName) {
                        case 'SPAN':
                            state[prop] = i;
                            break;
                        case 'INPUT':
                            if(item.getAttribute('type') === 'checkbox') {
                                i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warm';
                                elem.forEach((box, n) => {
                                    if(i !==n) {
                                        box.checked = false;
                                    }
                                    if(i == n) {
                                        box.cheked = true;
                                    }
                                });
                            } else {
                                state[prop] = item.value;
                            }
                            break;
                        case 'SELECT':
                            state[prop] = item.value;
                            break;
                    }
                    console.log(state);
                    setDefaultProp('form', 0);
                    setDefaultProp('type', 'tree');
                    for(let key in state) {
                        if(!deleteEmptyProps(key, state)){
                            delete state[key];
                        }
                    }
                });
            });
        }

        function setDefaultProp(prop, value) {
                if (!(prop in state)) {
                    state[prop] = value;
                }
        }

        function deleteEmptyProps(key, obj) {
                for(key in obj) {
                    return true;
                }
                return false;
        }

        bindActionToElems('click', windowForm, 'form');
        bindActionToElems('input', windowWidth, 'width');
        bindActionToElems('input', windowHeight, 'hegiht');
        bindActionToElems('change', windowType, 'type');
        bindActionToElems('change', windowProfile, 'profile');
}



export default changeModalState;
