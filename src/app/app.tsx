import * as React from "react";
import Header from "./components/header";
import Body from "./components/body";
import Action from "./components/action";
import appService from "./app.service";

interface IAppProps {
    onDispose: any
}

export class App extends React.Component<IAppProps> {
    constructor(props) {
        super(props);
        this.dispose = this.dispose.bind(this);
    }

    dispose() {
        this.props.onDispose();
    }

    render() {
        return (
            <div className="app-container">
                <Header title={appService.getTitle()}></Header>
                <Body content={appService.getContent()}></Body>
                <Action onDispose={this.dispose}></Action>
            </div>
        );
    }
}