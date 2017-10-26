import * as React from "React";

interface IActionProps {
    onDispose: any
}

class Action extends React.Component<IActionProps> {
    constructor(props) {
        super(props);
        this.dispose = this.dispose.bind(this);
    }

    dispose() {
        this.props.onDispose();
    }

    render() {
        return (
            <div className="action">
                <button type="button" onClick={this.dispose}>
                    Close
                </button>
            </div>
        );
    }
}

export default Action;