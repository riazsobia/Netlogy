import {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';


function People(props) {
    const [name, setName] = useState('');
    const [people, setPeople] = useState([]);

    const _changeName = (e) => {
        setName(e.target.value);
    }

    const _addPerson = (e) => {
        e.preventDefault();
        e.target.reset();
        setPeople([...people, name]);
    }

    // this will run on every re-render for this component
    useEffect(()=> {
        console.log('%c I run on every Rerender! ', 'background: #222; color: #bada55');
    });

    // this will run after the name is changed 
    useEffect(()=> {
        console.log("Name is changed to : ", name);
    }, [name]);

    // this will run after the name is changed 
    useEffect(()=> {
        console.log(`%c People is changed to : ${people}`, 'background: #000; color: #ff0000' );
    }, [people]);

    // this will run after the inital render only 
    useEffect(()=> {
        console.log('%c INITIAL RENDER ONLY ', 'color: #0000ff');
    }, []);

    // component will unmount 
    useEffect(() => {
        return () => {
          console.log("cleaned up .. will unmount");
        };
      }, []);


    return (
        <div>
            <form onSubmit={_addPerson}>
                <input onChange={_changeName} />
                <Button type="submit" size="sm" variant="outline-success">Submit</Button>
            </form>
            {
                 people.map((person, index)=> 
                    <p key={index}>{person}</p>)
            }
           
        </div>
    )
}

export default People;