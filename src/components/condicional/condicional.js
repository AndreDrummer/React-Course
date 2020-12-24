export default props => {
    if (props.test) {
        return props.children.slice(0, props.children.length - 1);
    } else {
        return props.children[props.children.length - 1];
    }
}

export const Else = props => props.children;