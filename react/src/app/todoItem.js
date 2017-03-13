var React = require('react');
<<<<<<< HEAD
var ReactDom = require('react-dom');

//CSS requires
require('./css/todoItem.css');

//Create TodoItem component
=======
require('./css/todoItem.css');

//Create TodoItem Component
>>>>>>> lesson-1
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
<<<<<<< HEAD
                    <span className="item-name" ref="thisItem">{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
=======
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    }, //end render
    
    //Custome functions
    handleDelete: function(){
        this.props.onDelete(this.props.item); 
>>>>>>> lesson-1
    }
});

module.exports = TodoItem;
