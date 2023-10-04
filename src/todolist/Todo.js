import React, { useState } from 'react'
import './style.css'

export default function Todo() {

    const [todolist, setTodolist] = useState('');
    const [todo, setTodo] = useState([]);
    const [count1, setCount1] = useState(0);

    const [proglist, setProglist] = useState('');
    const [prog, setProg] = useState([]);
    const [count2, setCount2] = useState(0);

    const [complist, setComplist] = useState('');
    const [comp, setComp] = useState([]);
    const [count3, setCount3] = useState(0);


    const progChange = () => {
        if (todo.length > 0) {
          const itemToAdd = todo[0];
          const newArray = [...prog, itemToAdd];
          setProg(newArray);
          setTodo(todo.slice(1));
          setCount1(count1 - 1);
    
          setCount2(count2 + 1);
        }
      }

      const compchange = () => {
        if (prog.length > 0) {
          const itemToAdd = prog[0];
          const newArray = [...comp, itemToAdd];
          setComp(newArray);
          setProg(prog.slice(1));
          setCount2(count2 - 1);
    
          setCount3(count3 + 1);
        }
      }


    const itemevent = (event) => {
        setTodolist(event.target.value);
    };


    const itemevent2 = (event) => {
        setProglist(event.target.value);
    };


    const itemevent3 = (event) => {
        setComplist(event.target.value);
    };


    const listof = () => {

        if (todolist.length > 0) {
            setTodo((olditems) => {
                return [...olditems, todolist];
            });
            setTodolist('')
            setCount1(count1 + 1)
        }
    };


    const listof2 = () => {

        if (proglist.length > 0) {
            setProg((olditems) => {
                return [...olditems, proglist];
            });
            setProglist('')
            setCount2(count2 + 1)
        }
    };


    const listof3 = () => {

        if (complist.length > 0) {
            setComp((olditems) => {
                return [...olditems, complist];
            });
            setComplist('')
            setCount3(count3 + 1)
        }
    };


    const deleteitems = (remove) => {
        console.log("deleted")
        const newitem = todo.filter((itemval) => itemval !== remove)
        setTodo(newitem);
        setCount1(count1 - 1);
    }


    const deleteitems2 = (remove) => {
        console.log("deleted")
        const newitem = prog.filter((itemval) => itemval !== remove)
        setProg(newitem);
        setCount2(count2 - 1);
    }


    const deleteitems3 = (remove) => {
        console.log("deleted")
        const newitem = comp.filter((itemval) => itemval !== remove)
        setComp(newitem);
        setCount3(count3 - 1);
    }



    const changei = () => {
        setTodo([])
        setCount1(0)
    }

    const changei2 = () => {
        setProg([])
        setCount2(0)
    }

    const changei3 = () => {
        setComp([])
        setCount3(0)
    }


    return (
        <>

            <div className="main">

                <div className="container c1">
                    <div className=" mb-3">
                        <label htmlFor='title1' >Todo</label>
                        <input type="text" className="form-control" value={todolist} onChange={itemevent} id='title1' aria-describedby="emailHelp" />
                    </div>
                    <button onClick={listof} className="btn btn-primary">Submit</button> <span> Total : {count1}</span> <button className='btn btn-info' onClick={changei}>clear</button>

                    <ol>
                        {todo.map((itemval, index1) => {
                            return <div> <li key={index1}> <i className="fa fa-trash-o" aria-hidden="true" onClick={() => deleteitems(itemval)} > </i> {itemval} <button className='pro' onClick={progChange}>⏳</button> </li></div>
                        })}
                    </ol>
                </div>





                <div className="container c2">
                    <div className=" mb-3">
                        <label htmlFor='title2' >Progress</label>
                        <input type="text" className="form-control" value={proglist} onChange={itemevent2} id='title2' aria-describedby="emailHelp" />
                    </div>
                    <button onClick={listof2} className="btn btn-primary">Submit</button> <span>Total :  {count2}</span> <button className='btn btn-info' onClick={changei2}>clear</button>

                    <ol>
                        {prog.map((itemval, index1) => {
                            return <li key={index1}> <i className="fa fa-trash-o" aria-hidden="true" onClick={() => deleteitems2(itemval)} > </i> {itemval} <button onClick={compchange}><i className="fa fa-check" aria-hidden="true"></i>
                            </button> </li>
                        })}

                    </ol>
                </div>





                <div className="container c3">
                    <div className=" mb-3">
                        <label htmlFor='title3' >Complete</label>
                        <input type="text" className="form-control" value={complist} onChange={itemevent3} id='title3' aria-describedby="emailHelp" />
                    </div>
                    <button onClick={listof3} className="btn btn-primary">Submit</button> <span>Total :  {count3}</span> <button className='btn btn-info' onClick={changei3}>clear</button>

                    <ol>
                        {comp.map((itemval, index1) => {
                            return <li key={index1}> <i className="fa fa-trash-o" aria-hidden="true" onClick={() => deleteitems3(itemval)} > </i> {itemval}</li>
                        })}

                    </ol>
                </div>

            </div>
        </>
    )
}
