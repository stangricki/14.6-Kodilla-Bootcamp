var MultiplyDivider = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
    },

    multiply: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },

    divide: function() {
        this.setState({
            counter: this.state.counter / 2
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.divide}, '/2'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
          React.createElement('button', {onClick: this.multiply}, '*2')
        );
    }
});
