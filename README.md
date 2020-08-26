                              ######   ########   ######     ##      ##     ##   ##
                              ##  ###  ##         ##    ##   ##      ##      ## ##
                              ######   ########   ##     ##  ##      ##       ##
                              ##  ##   ##         ##    ##   ##      ##     ##  ##
                              ##   ##  ########   ######      #######      ##    ##

                     what is Redux?
                        Redux is a JavaScript state management library for JavaScript application
                        which was inspired by flux.

                     So what is flux?
                           flux is an "application architechure for React that utilize a unidirectional
                           data flow"

# Simple Redux implementation

# How Redux Works

There are three big pilar of Redux

--There is a single source of truth for the data.
   That basically means there is only one store that keeps track of our application data.

--The only way we can update the store is by an action that triggers a recomputation of the State.

--Update are made using a pure functions,
   By pure i mean a function that takes arguments and will always return the same things for this arguments.
   meaning given the same arguments will return the same answer.
   And it doesn't look anywhere else other than those arguments for the computation that it gives.


--Action ---> Reducer ---> Update Store

# The diagram for the redux architechure 

 <img style="max-width: 50%;" src="https://res.cloudinary.com/practicaldev/image/fetch/s--m5BdPzhS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://i.imgur.com/riadAin.gif" />

# Store 
   A store is a container which is responsible for maintaining the state/data of our app,
   which is a class with some method like getState() and dispatch() etc.
   --The store should receive two or more arguments in this example it only cares about
     reducer and initialState/preloadingState
   [getState()] is a function which allow you to retrive data for the State,
   [dispatch()] function is the only way that the store can be updated.
   And last you can add listeners that get invoked when the state changes but this is not implemented in 
   this example.

# Reducer
   --This is a pure function that takes a pervious state and an update and applies the update and return new a state.
   --The result of the reducer is deterministic and it's determined exclusively by those arguments.
   --And lastly there are no side effects
      which means no logging or changing variable outside of it's scope.
   --The reducer should be immutable,
      which basically means it should always return a new object

# Actions
  An action is a piece of data that contains all of the information required to make a state update.
   --usually it an object with a key call type and payload,
      --The type describe what the action should be doing
      --And the payload contains what the state should be updated with.

   --Function that create actions are called action creators

   checkout this link for more about actions [https://github.com/redux-utilities/flux-standard-action]


## Requirements  

--`node`
--`redux`

## If you don't have Node

## Node installation

1.You should have node installed in your computer or your machine. If you don't have node installed head over to [www.node.org] and download the lastest stable version of node for your operating system.
After installing node, to check if it's installed successfully, so if your using mac OS open Terminal and if your using
windows OS open command prompt and type this command `node -v` or `node --version` to see the version you're running. If it doesn't show up, that means there was a problem with your installation process. Simply try to reinstall it again.

The important package which allows you to install the require dependencies is [npm] which is ship with node. So you don't have to worry about installing it sparately
To check the version of npm type this command on your Terminal if your running mac OS and command prompt if your running windows `npm -v` or `npm --version`.


# Redux installation

if You're running sparate application

Open your Terminal on mac or command prompt on windows and type this command `npm install --save redux` or `npm i --save redux` if your running node version 5 and below.
If your running node version 10 and above type this command `npm install redux` or `npm i redux` this will automatically save it into your package.json file. You can also use yard if you prefer by `yard add redux`

If you want to learn more about redux head over to [redux docs](https://redux.js.org).

# Finially to run this program

1.First you should install all the dependencies needed, by running this comand `npm install` or short hand for that `npm i` in the root directory of the project.
2.cd into the director [simple-redux-implementation], if you change the directory name then cd [directory name]()
3.Then run this script `node test-store.js` or `node test-store` either one will work just fine.

# How Redux Work

Author: Charles Elloit
Email: aciforcharles@gmail.com
Twitter: @CharlesElloit
