import * as React from "React";

interface IBodyProps {
    content: string;
}

class Body extends React.Component<IBodyProps> {
    render() {
        return (
            <div className="body">
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Body;