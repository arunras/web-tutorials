var React = require('react');
var ReactDOM = require('react-dom');
<<<<<<< HEAD
import { Router, Route, browserHistory, Link } from 'react-router';
=======
import {Router, Route, browserHistory, Link} from 'react-router';
require('./css/index.css');

>>>>>>> lesson-1

//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

<<<<<<< HEAD
//CSS requires
require('./css/index.css');


//SETUP ROUTING
var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={TodoComponent}></Route>
                <Route path={"/about"} component={About}></Route>
            </Router>
        );
    }
});

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
                <Link to={"/about"}>About</Link>
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
=======
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
>>>>>>> lesson-1
        });
    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
<<<<<<< HEAD
            todos: updatedTodos
        })
    }

});

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
=======
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




>>>>>>> lesson-1
