import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import AddComment from '../../../AddComment'
import Todos from '../../../Todos';
import AddTodo from '../../../AddTodo';

// Code for embedded YouTube Videos inspired by https://www.cluemediator.com/embed-youtube-video-in-reactjs

class TutorialExamplePage extends Component {

    state = {
        todos: [
          {id: 1, content: "FakeUser1: Thanks for the tutorial! - 9 hours ago"},
          {id: 2, content: "FakeUser2: Liked and subscribed! - 54 minutes"},
        ]
      }
    
      deleteTodo = (id) => {
        //console.log(id);
    
        const todos = this.state.todos.filter(todo => {
          return todo.id !== id
        });
    
        this.setState({
          // because key and value have the same name, todos:todos can be replaced with just todos;
          todos
        })
      }
    
      addTodo = (todo) =>{
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
          todos
        })
      }
    
    render(){
        return(
            <div className="tutorial">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/community">Community</a></li>
                <li class="breadcrumb-item"><a href="/community/tutorials">Tutorials</a></li>
                <li class="breadcrumb-item"><a href="/community/tutorials/hairstyling">Hair Styling Tutorials</a></li>
                <li class="breadcrumb-item active">HOW TO: Fake a Blowout Using a Hair Straightener</li>
              </ol>
              <div class="dropdown-divider"></div>
              <div class="jumbotron">
                <h4><strong>HOW TO: Fake a Blowout Using a Hair Straightener</strong></h4>
                <p>Posted By: BeanBeauty - 9 hours ago.</p>
                <hr class="my-4"/>
                <div className="post-content">
                        <ReactPlayer controls className="tutorial-video" url="https://www.youtube.com/watch?v=OpDWYTFiZC0"/>
                </div>

                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#summary">Summary</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#equipment">Equipments</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#steps">Steps</a>
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane fade active show" id="summary">
                    <p>Hey guys, today i'm going to show you how to imitate a blow out hair style using only a hair straightener! </p>
                    <p>Make sure to like and subscribe if you liked the tutorial.</p>
                  </div>
                  <div class="tab-pane fade" id="equipment">
                  <p>Here is the list of the equipment(s) needed: </p>
                    
                    <ul>
                            <li className="dot">Hair Straightener</li>
                      </ul>
                  </div>
                  <div class="tab-pane fade" id="steps">
                    <p>Here is a breakdown of the steps taken in the tutorial: </p>
                    <ol>
                        <li className="dec">Plug in hair straightener and warm up.</li>
                        <li className="dec">Watch the video.</li>
                        <li className="dec">Student Note: I did not actually watch the video.</li>
                    </ol> 
                  </div>
                </div>

                <div class="card border-secondary mb-3">
                  <div class="card-header">Comments</div>
                  <div class="card-body">
                    <div className="post-comment">
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                    <AddTodo addTodo={this.addTodo}/>
                </div>
                  </div>
                </div>
              </div>
        </div>
        )
    }
}

export default TutorialExamplePage;