var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('Getting default props...');
        return {counter: 0};
    },
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    componentWillMount: function () {
        console.log('I\'m about to mount...')
    },


    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    
    render: function() {
        console.log('Rendering...')
        return React.createElement('div', {},
          React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+')
        );
    },
    
    componentDidMount: function () {
        console.log('Did mount...')
    },
    
    componentWillReceiveProps: function () {
    console.log('Component will receive props...')
    },
    
    shouldComponentUpdate: function (nextProps, nextState) {
      console.log('Should component update...')
      return nextState.count === this.state.count
    },
    
    componentWillUpdate: function () {
      console.log('Component will update...')
    },
    
    componentDidUpdate: function () {
      console.log('Component did update...')
    },
    
    componentWillUnmount: function () {
      console.log('Component will unmount...')
    }
});

