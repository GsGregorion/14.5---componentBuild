var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {className: 'contactItem'},
          React.createElement('img', {
            className: 'contactImage',
            src: 'data:image/png;base64,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'
          }),
          React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
            this.props.item.email
          )
        )
      )
    },
  });