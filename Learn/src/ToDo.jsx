import React, { useState } from 'react'
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ToDo = () => {

    let [item,setItem] = useState([
        
    ])

    let [newItem,setNewItem] = useState("")
    let [isEditing,setEditing]=useState(false)
    let [currentElement,setCurrentElement] = useState(null)


    let handleChecked  = (id)=>{

    let newListItem = item.map((item)=>{
            return item.id === id ? {...item,checked : !item.checked} : item
        })

        console.log(newListItem);

        setItem(newListItem)
    }

    let handleEdit = ()=>{
        setEditing(true)
    }

    let handleDelete = (id)=>{
       
     let newItem =    item.filter((cu)=>{
            return (cu.id !== id) 

     }).map((c, i) => {
         return {
             ...c, id: i+1
         }
     })
        setItem(newItem);
        
        
        
    }

    let handleAdd = ()=>{
        if(isEditing){
           let newList1 =  item.map((c)=>{
                return c.id === currentElement ? {...c,label : newItem} : c 
            })
            setItem(newList1)
            setNewItem("")
            setEditing(false)
            
        }else{
            setItem([
                ...item,{
                    id : item.length+1,
                    label : newItem,
                    checked : false
                }
            ])
            setNewItem("")
        }
    }

    let handleUpdate = (id)=>{

        setEditing(true)
        setCurrentElement(id)

       let listItem =  item.find((c)=>{

            return c.id === id 
            
        })
        setNewItem(listItem.label)


        

    }
    
    

  return (
    <div>

        <input 
        type="text"
        value={newItem}
        onChange={(e)=>{setNewItem(e.target.value);
        }}
        />


        <button onClick={handleAdd}>{isEditing ? "save" : "add"}</button>

        <ol>

            {/* crud - create read update delete */}

            {
                item.map((c)=>{

                    return (
                         <li key={c.id}>

                            <input type="checkbox"
                             checked={c.checked}
                             onChange={()=>{handleChecked(c.id)}}
                             />


                            <label>{c.label}</label>
                            <MdOutlineDeleteForever role='button' tabIndex={0} onClick={()=>{handleDelete(c.id)}} />
                            <FaRegEdit role='button' tabIndex={0} onClick={()=>{handleUpdate(c.id)}} />
                        </li>
                    )

                })
            }

        </ol>
      
    </div>
  )
}

export default ToDo
