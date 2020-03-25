import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Creators as TodoActions} from './store/duck/todos';
import {Text, Button} from 'react-native';

import {Container, Input} from './Style';

class TodoList extends Component {
  state = {txt: '', id: ''};

  handleEditTodo(todo) {
    this.setState({id: todo.id, txt: todo.txt});
  }

  handleChange = text => {
    this.setState({txt: text});
  };

  handleSubmit() {
    const {txt, id} = this.state;

    if (this.state.id) {
      this.props.editTodo(id, txt);
    } else {
      this.props.addTodo(txt);
    }
  }
  render() {
    const {todos} = this.props;
    console.log(this.state);
    return (
      <Container>
        <Text>Todo</Text>
        <Input
          value={this.state.txt}
          onChangeText={text => this.handleChange(text)}
        />
        <Button
          title={this.state.id ? 'editar' : 'adicionar'}
          onPress={() => this.handleSubmit()}
        />

        {todos.todos.map(todo => (
          <>
            <Text key={todo.id}>{todo.txt}</Text>
            <Button
              title="remover"
              onPress={() => this.props.removeTodo(todo.id)}
            />
            <Button title="Editar" onPress={() => this.handleEditTodo(todo)} />
          </>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos_state,
});

const mapDispatchToProps = TodoActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
