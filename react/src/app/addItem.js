var React = require('react');

require('./css/addItem.css');

<<<<<<< HEAD
var AddItem = React.createClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Hit me" />
            </form>
        );
    },

    //Custom functions
    handleSubmit: function(e){
        e.preventDefault();
=======
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
>>>>>>> lesson-1
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = AddItem;
