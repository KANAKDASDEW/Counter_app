import React , {useState} from 'react';
import Navbar from './navbar.component';
import Reset from './reset.components';
import Counters from './counters.component';
import Addbutton from './add.component';
import Alldelete from './alldelete.componet';



function App () {

    const [counters, setCounters] = useState([

        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }


    ]);

    const handelAlldelete =() =>{
        setCounters([])
    }

    const handelAddNew = () =>{
        const  newCounterState =[
            ...counters,
            {
                id: Math.floor(Math.random() * 1000),
                value: 0,
            },
        ];

        setCounters(newCounterState);
    }

   const  handelReset= () =>{
        const all_counters = counters.map((counter, index)  => {
        const obj = {id: index, value: 0 };
        return obj;
           });
           
       setCounters( all_counters);
    }

    const onResetOne= (id) =>{
        const resetsingleCounter = counters.map((counter)  => {
            if (counter.id === id){
                return {id: id, value: 0 };
            }else return counter;
                       
        });
               
           setCounters( resetsingleCounter);
    };

   const  handleIncrement = (id) => {
       const Updated_counters = counters.map((counter, idx) => {
           if(counter.id === id ) return {id: idx, value: counter.value+1 };
           return counter;
       })
      setCounters( Updated_counters);
    }

   const  handleDecrement = (id) => {
      const UpdatedCounters = counters.map((counter, idx) => {
          if(counter.id === id ) return {id: idx, value: counter.value - 1 };
          return counter;
      })
     setCounters(UpdatedCounters );
    }

   const  getNonZeroItems = () => {
      let cnt = 0;

      counters.forEach(counter =>{
          if(counter.value > 0) cnt++;
      })

      return cnt;
    } 
   const  handelDelete =  (id) => {
        const Updated_counters = counters.filter(counter => counter.id != id);
        setCounters(Updated_counters)
       
     
    }

    

  
        return (
            <>
            <Navbar 
               nonZeroItems = {getNonZeroItems()}
            />
            <Addbutton
              onAddNew ={handelAddNew}
            />
            <Alldelete 
              onDelete ={ handelAlldelete}
            />

            <Reset
                onReset = {handelReset}
            />
            <Counters
                 counters = {counters}
                 onIncrement = {handleIncrement}
                 onDecrement = {handleDecrement}
                 onDelete = {handelDelete}
                 onResetOne= {onResetOne}
            />
          
            </>
        );
    }

 
export default App;