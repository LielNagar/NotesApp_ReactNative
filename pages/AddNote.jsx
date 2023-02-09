import { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { NotesContext } from './NotesContext';

export default function AddNote(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState()
    const { notes, setNotes, modalVisible, setModalVisible } = useContext(NotesContext)

    return (
        <View>
            <TextInput placeholder="ADD TITLE..."
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput underlineColorAndroid="transparent"
                placeholder="ADD DESCRIPTION..."
                onChangeText={(text) => setDescription(text)}
                multiline={true} />
            <View>
                <Picker selectedValue={category} onValueChange={(input) => setCategory(input)}>
                    <Picker.Item key={'Select'} label='Select a category' value='Select a category' />
                    {props.route.params.categories.map((category, key) =>
                        <Picker.Item key={key} label={category} value={category} />)}
                </Picker>
            </View>
            <View><Button title='Submit' onPress={() => {
                if (category === undefined) {
                    return alert('Need to select a category')
                }
                const note = {
                    title,
                    description,
                }
                let newNotes = notes
                newNotes[category].push(note)
                setNotes(newNotes)
                alert('Note has been added!')
            }} /></View>
        </View>
    );
}