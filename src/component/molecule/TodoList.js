
import React, {useState} from 'react';

function TodoList(){

    const [Task, setTask] = useState("");
    const [listData, setListdata] = useState("");

    function addTask(){
        setListdata((listData)=>{
            const updatedList=[...listData, Task]
            console.log(updatedList)
            setTask('');
            return updatedList;
        });
        

    }

    function removeTask(i){

        const updatedListData = listData.filter((elem, id)=>{
            return i!=id;
        })
        setListdata(updatedListData)

    }



    return(
    
    <>
    <div className='container'>
        <div className='header'>TODOLIST</div>
        <input type='text' placeholder='Add Task' value={Task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={addTask}>Add</button>
        <p className='List-heading'>Here is List:</p>
        {listData!=[] && listData.map((data, i)=>{
            return(
                <>
                <p key={i}>

                    <div className="listData">{data}</div>
                    <div className='btn-position'><button onClick={()=>removeTask(i)}>remove</button></div>

                </p>
                </>
            )
        })}
    </div>
    
    </>
    )


}

export default TodoList;