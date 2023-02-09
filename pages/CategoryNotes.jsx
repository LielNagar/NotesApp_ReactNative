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
            <View style={{ height: 500 }}>{
                console.log(category)
            }
                {notes[category].length > 0 ? notes[category].map((note) => <Note key={note.title} title={note.title} description={note.description} category={category} navigation={props.navigation}/>) :
                    <Text>No Notes Yet!</Text>}
            </View>
            <Button title='Add new note' onPress={() => {
                props.navigation.navigate('NewNote', { categories })
            }} />
        </View>
    )
}
