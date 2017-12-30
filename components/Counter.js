//Nie do końca rozumiem co mam tu zrobic:
//"dodaj do komponentu Counter wszystkie metody cyklu życia komponentu. W każdej z nich wypisz console.log ze swoimi pomysłami na ich użycie"

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
componentWillMount: function() {
        console.log('I\'m about to mount...');
        return {
            counter: 0
        };
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
        return React.createElement('div', {},
          React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+')
        );
    }
});

