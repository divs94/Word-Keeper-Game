import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';







const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);


    const [note, setNote] = useState({
        title: '',
        content: '',
    });
    const InputEvent = (event) => {

      //  const value = event.target.value;
       //  const name = event.target.name;
        const { name, value } = event.target;

        setNote((oldData) => {
            return { ...oldData, [name]: value, };
        });
        console.log(note);
    };
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: '',
        });
    };
    const expandIt = () => {
        setExpand(true);
    };
    const btoNormal = () => {
        setExpand(false);
    };
    return (
        <>
            <div className='main_note' onDoubleClick={btoNormal}>
                <form>
                    {expand ?
                        <input type='text' name="title" value={note.title}
                            onChange={InputEvent}
                            placeholder='Title'
                            autoComplete="off"
                        /> : null}
                    <br/>
                    <textarea rows='' column='' name="content"
                        value={note.content} onChange={InputEvent}
                        placeholder='Write Your Note...' onClick={expandIt} >
                    </textarea>
                    {expand?
                    <Button onClick={addEvent} className="btn" variant="contained" color="secondary">
                            <AddCircleIcon className="icon"/>
                    </Button> :null}
              </form>
            </div>

        </>
    );
};
export default CreateNote;