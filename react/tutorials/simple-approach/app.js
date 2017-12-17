var MyComponent = React.createClass({
  displayName: 'MyComponent',

  render: function render() {
    return React.createElement(
      'div',
      null,
      'Hello'
    );
  }
});

ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('example'));