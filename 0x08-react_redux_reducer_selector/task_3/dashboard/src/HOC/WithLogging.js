import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
    class WithLoggingComponent extends Component {
        componentDidMount() {
            console.log(`${this.getComponentName()} is mounted`);
        }

        componentWillUnmount() {
            console.log(`${this.getComponentName()} is going to unmount`);
        }

        getComponentName() {
            return WrappedComponent.displayName || WrappedComponent.name || 'Component';
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    WithLoggingComponent.displayName = `WithLogging(${WithLoggingComponent.name || 'Component'})`;
    return WithLoggingComponent;
};

export default WithLogging;