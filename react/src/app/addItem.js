var React = require('react');

require('./css/addItem.css');

// add item Component
var AddItem = React.createClass({
    render: function(){
        return (
            <form id='add-todo' onSubmit={this.handleSubmit}> 
                <input type="text" ref="newItem" required />
                <input type="submit" value="Hit me" />
            </form>
        ); 
    }, //end render

    //Custome Functions
    handleSubmit: function(e){
        e.preventDefault();
        //console.log(this.refs.newItem.value); 
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = AddItem;
