import {createSlice,nanoid} from '@reduxjs/toolkit';
//creating reducer 
//nano id generate unique id
const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};// it can be either object or array
function sayHello(){
    console.log("Hello World");
}


export const todoSlice=createSlice({
    name:'todo',
    initialState, //its define above
    reducers:{
        // addTodo:sayHello
        // also we can write as
        addTodo:(state,action)=>{
            const todo = {
              id: nanoid(),
              text: action.payload.text, //here payload is object
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },

    } //inside this have propertties and function
})
// now create slice 

export const {addTodo,removeTodo}=todoSlice.actions;
export default todoSlice.reducer;