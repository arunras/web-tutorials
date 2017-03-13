var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Link } from 'react-router';
require('./css/index.css');


//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

//Router
var App = React.createClass({
    render: function(){
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        ); 
    }
});

//Create componet
var TodoComponent = React.createClass({
    getInitialState: function(){
        return ({
            todos: ['wash up', 'eat some cheese', 'take a nape', 'buy flowers'],
            age: 30
        });    
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return (
                //<li>{item}</li> 
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            ); 
        }.bind(this));
        /*
        var ager = setTimeout(function(){
            this.setState({
                age: 35 
            }); 
        }.bind(this), 5000);
        */

        return (
            <div id='todo-list'>
                <p>The busiest people have the most leisur...</p>
                <p>{this.state.age}</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />
            </div>
        ); 
    }, //end render
    
    //Custome functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val; 
        });
        this.setState({
            todos: updatedTodos
        });
    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
        todos: updatedTodos 
        });
    }, 

    // lifecycle functions
    componentWillMount: function(){
        console.log('componentWillMount'); 
    },

    componentDidMount: function() {
        console.log('componentDidMount'); 
        // any grabbing of external data
    },

    componentWillUpdate: function() {
        console.log('componentWillUpdate'); 
    }


});



//Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));

