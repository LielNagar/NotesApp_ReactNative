import { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { NotesContext } from './NotesContext'

import Note from './Note'

export default function CategoryNotes(props) {
    const { notes, setNotes } = useContext(NotesContext)
    const category = props.route.params.category
    const categories = Object.keys(notes)

    return (
        <View>
            <View style={{ height: 500 }}>
                {notes[category].length > 0 ? notes[category].map((note) => <Note key={note.title} content={note.description} title={note.title} category={category} />) :
                    <Text>No Notes Yet!</Text>}
            </View>
            <Button title='Add new note' onPress={() => {
                props.navigation.navigate('NewNote', { categories }) //FROM HERE I WANT TO PASS ONLY THE CURRENT CATEGORY
            }} />
        </View>
    )
}
