import React, {Component} from 'react';

type ButtonProps = {
    text: string,
    onClick: (e: React.MouseEvent) => void,
    type: string,
    isDisabled: boolean
}

class Button extends Component<ButtonProps> {
    static defaultProps = {
        text: 'Click Me!',
        onClick: (e: React.MouseEvent) => {
            alert('Clicksdasded')
        },
        type: 'primary',
        isDisabled: false
    }

    render() {
        return <button
            onClick={this.props.onClick}
            disabled={this.props.isDisabled}
            aria-disabled={this.props.isDisabled}>
            {this.props.text}
        </button>
    }
}

export default Button;