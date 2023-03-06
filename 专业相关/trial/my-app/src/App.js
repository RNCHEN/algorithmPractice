import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useRef } from 'react';
import { useState } from 'react';
// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 10,
//       dataType: 'student',
//     }
//     this.click = this.click.bind(this)
//   }


//   onClick = () => {
//     this.setState(
//       { dataType: 'teacher' }, 
//       // 解决方法：
//       // 第二个参数：回调函数，用改变后的state值do something
//       () => {
//           console.log('dataType',this.state.dataType); // fetchData('teacher');
//       });

//   };


//   click() {
//     this.setState(
//       (state, props) => {
//         console.log('in the click', state)
//         return {
//           count: state.count
//         }
//       },
//       () => {
//         this.setState({ count: this.state.count })
//         console.log('in the callback', this.state.count)
//       }
//     )
//     console.log('here', this.state.count)
//   }
//   componentDidMount() {
//     console.log('count = ', this.state.count)
//   }



//   render() {
//     return (
//       <>
//         <button type="button" onClick={this.click}>异步</button>
//         <button type="button" id='btn' onClick={this.onClick}>尝试同步</button>
//       </>
//     )
//   }



// }


// function App() {

//     const [flag, setFlag] = useState(0);
//     // 第一次使用
//     const { state, setState } = useState(false);
//     // 第二次使用
//     const { state: counter, setState: setCounter } = useState(0)


//     console.log('1111=',state,setState)
//     console.log('2222=',counter,setCounter)

//     const add = () => {
//         console.log('before onClick flag=', flag)
//         setFlag((flag) => {
//             console.log('in the set Function flag =', flag)
//             return flag + 1
//         });
//         console.log('after thatflag', flag)


//     }

//     const user = {
//         id: 888,
//         name: "xiaoxin"
//     };

//     const { id, name } = user;
//     console.log('123', id);	// 888
//     console.log('321', name);	// "xiaoxin"

//     return (
//         <div>
//             <button onClick={add}>  {flag} </button>

//         </div>
//     )

// }


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//     // 这俩删一个好像也可以啊
//     componentDidMount() {
//         console.log('componentDidMount', document.title)
//         console.log('componentDidMount  this.state.count', this.state.count)
//         document.title = `You clicked ${this.state.count} times`;
//         console.log('componentDidMount2', document.title)
//         console.log('componentDidMount  this.state.count', this.state.count)

//     }

//     // componentDidUpdate() {
//     //     console.log('componentDidUpdate  this.state.count', this.state.count)
//     //     console.log('componentDidUpdate', document.title)
//     //     document.title = `You clicked ${this.state.count} times`;
//     //     console.log('componentDidUpdate2', document.title)
//     //     console.log('componentDidUpdate2  this.state.count', this.state.count)
//     // }


//     render() {
//         console.log('RENDER  document.title', document.title)
//         console.log('RENDER  this.state.count', this.state.count)
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                     Click me
//                 </button>
//             </div>
//         );
//     }
// }


function App() {
  const [a, setA] = useState(0)
const [b, setB] = useState(0)
const [c,setC] = useState(0)
const tmp = useRef(0)
  // const addTwice1 = () => {
  //   setA(a => a + 1)
  //   setA(a => a + 1)
  // }

  //   const addTwice2 = () => {
  //   setB(b + 1)
  //   setB(b + 1)
  // }
  useEffect(()=>{   //
    console.log('init only once')
  },[])

  const subF = ()=>{
      console.log('in the func c = ',c)
      console.log('in the func tmp = ',  tmp.current)

  }

  const sysfunc = ()=>{

    setC(c+1);
    console.log('c = ',c);
  }

    return (
    <div>
      {/* <button onClick={addTwice1}>a: {a}</button>
      <button onClick={addTwice2} >b: {b}</button> */}
      <button onClick={sysfunc} >c: {c}</button>

    </div>

    )
}


// context 传值
// const BatteryContext = createContext();

// //  子组件的子组件 
// class GrandChild extends Component {
//     render(){
//         return (
//             <BatteryContext.Consumer>
//                 {
//                     color => <h1 style={{"color":color}}>我是红色的:{color}</h1>
//                 }
//             </BatteryContext.Consumer>
//         ) 
//     }
// }

// //  子组件
// const Child = () =>{
//     return (
//         <GrandChild/>
//     )
// }
// // 父组件
// class Parent extends Component {
//       state = {
//           color:"red"
//       }
//       render(){
//           const {color} = this.state
//           return (
//           <BatteryContext.Provider value={color}>
//               <Child></Child>
//           </BatteryContext.Provider> 
//           )
//       }
// }


export default App;
