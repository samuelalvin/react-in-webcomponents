import * as React from "React";

interface IHeaderProps {
    title: string;
}

class Header extends React.Component<IHeaderProps> {
    render() {
        return (
            <div className="header">
                <p>Welcome to {this.props.title}!</p>
            </div>
        );
    };
}

export default Header;