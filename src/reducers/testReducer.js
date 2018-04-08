



const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
      default:
        return state;
  }
};


// Testing


const testAddToDo = () => {
  const initialState = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'learn'
  }

  const newState = [
    {
      id: 0,
      text: 'learn',
      completed: false
    }
  ]
}

// Expect todos(initialState, action).toEqual(newState)
