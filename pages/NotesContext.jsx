import { createContext, useState } from 'react'

export const NotesContext = createContext()

export default function NotesContextProvider(props) {
    const [notes, setNotes] = useState({
        Personal: [{
            title: 'GYM',
            description: 'Go to gym workout'
        }, {
            title: 'Eat lunch',
            description: 'Warm up the food and eat it'
        }],
        Work: [{
            title: 'Finish assignments',
            description: 'finish this damn job assignments'
        }, {
            title: 'Exit Shift',
            description: 'Dont forget to exit your shift'
        }],
        Study: [{
            title: 'Finish ReactNative assignment',
            description: 'First time React Native- do it well!'
        }, {
            title: 'Finish the final project',
            description: "You have a beautiful project, keep workin' out"
        }]
    })
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <NotesContext.Provider value={{ notes, setNotes, modalVisible, setModalVisible }}>
            {props.children}
        </NotesContext.Provider>
    )
}