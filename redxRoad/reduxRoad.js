const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
}



const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather':
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1
       
      };
      
       case 'travel':
      return {
        ...state,
        supplies: state.supplies - (action.payload * 20),
        distance: state.distance + (action.payload * 10),
        days: state.days + action.payload
      };

      case 'tippedWagon':
      return {
       ...state,
       supplies: state.supplies - 30,
       days: state.days + 1
      }

    default:
      return state;
  }
};

let wagon = reducer(undefined, {} )
console.log(wagon);//{ supplies: 100, distance: 0, days: 0 }

const action1 = {
  type: 'travel',
  payload: 1
}
wagon = reducer(wagon, action1 )
console.log(wagon); // { supplies: 80, distance: 10, days: 1 }

const action2 = {
  type: 'gather',
}
wagon = reducer(wagon, action2)
console.log(wagon); // { supplies: 95, distance: 10, days: 2 }

const action3 = {
  type: 'tippedWagon'
}

wagon = reducer(wagon, action3)
console.log(wagon); // { supplies: 65, distance: 10, days: 3 }

const action4 = {
  type: 'travel',
  payload: 3
}
wagon = reducer(wagon, action4)
console.log(wagon); // { supplies: 5, distance: 40, days: 6 }


/*

Yes, both values are stored in variables:

- The initial state is stored in `wagon`.
- The new state after traveling is stored in `traveller`.

If you want to keep updating the same variable, you can reassign it like this:

```js
wagon = reducer(wagon, action1);
```

This way, `wagon` always holds the latest state. If you use a new variable like `traveller`, the old state stays in `wagon` and the new state is in `traveller`. Both approaches are valid, depending on what you want to do.


 Yes, the days are already in the state. When you travel, you want to **add** the number of days traveled to the existing days. 

If you only use `days: action.payload`, you overwrite the total days with just the new days, losing the previous value. 

Using `days: state.days + action.payload` keeps a running total, which matches how time passes in the game. This is a common pattern in reducers: update the value based on the previous state, not just replace it.*/