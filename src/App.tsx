import { useState } from 'react';
import './App.css';
import Input from './components/input';
import Message from './components/message';
import { Todos } from './types/Type';

const App:React.FC = () => {
 // let name: string = "Sezin";
 // let age: number = 30;
 // let done: boolean = true;
 // let trial: number | string = 5 

 // let trial: any = "deneme"
 // let trial2: number | string = "deneme" ıkı turlu de atansa hata almaz
 // let trial3: number | string = 5

  /*type Obj = {
    name: string,
    age: number,
    done?: boolean
  }

  type ObjTwo extends Obj= {
    //name: string, 
    //age: number,
    //done?: boolean,
    accept?: boolean
  }*/

  /*interface Obj {
    name: string,
    age: number,
    done?: boolean
  }

  interface ObjTwo extends Obj{
    accept?: boolean
  }

  let obj: Obj = {
    name: "Sezin",
    age: 30,
    //done: true
  }*/

  /*return (
    <div className="App">
      {name + " - " + age}
    </div>
  );*/

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todos[]>([])

/*  Todos yapısı bunlardan birsürü de olabilir
[  
  {
  message:"sezin",
  id:1
  }
]*/

    console.log(todos,"todos")

    const addMessage = () => {
      if(todo){
        setTodos([...todos,{message: todo,id: todos.length+1}])
        setTodo('')
      }
    }

    const deleteMessage = (id: number) => {
      setTodos(todos.filter(todo => todo.id != id))
    }

  return (
    <div className="App">
        <Input addMessage={addMessage} todo ={todo} setTodo = {setTodo}/>    
        <Message deleteMessage ={deleteMessage} todos ={todos}/>
    </div>
  );
}

export default App;
