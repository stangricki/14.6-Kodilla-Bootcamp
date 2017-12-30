var CounterPower = React.createClass({
    getInitialState: function() {
        return {
            counter: 2
        };
    },

    power: function() {
        this.setState({
            counter: Math.pow(this.state.counter, 2)
        });
    },

    sqrt: function() {
        this.setState({
            counter: Math.sqrt(this.state.counter, 2)
        });
    },

    render: function() {
        return React.createElement('div', {},
          React.createElement('button', {onClick: this.sqrt}, 'sqr'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.power}, 'pow')
        );
    }
});

