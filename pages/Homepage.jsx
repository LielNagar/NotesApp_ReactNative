import { Text, View, Button } from 'react-native';
import React, { useContext } from 'react';
import DialogInput from 'react-native-dialog-input';

import { NotesContext } from './NotesContext';

export default function Homepage(props) {
    const [visible, setVisible] = React.useState(false);
    const { notes, setNotes } = useContext(NotesContext)

    const addNewCategory = (text) => {
        setNotes((prevNotes) => {
            let newNotes = prevNotes
            newNotes[text] = []
            return newNotes
        })
    }

    return (
        <View>
            <Text style={{ fontSize: 30, marginBottom: 20 }}>My personal NOTES</Text>
            {
                Object.keys(notes).map((category) => {
                    return (<View key={category} style={{marginTop:7}}>
                        <Button key={category} style={{ height: 20, padding: 20 }} title={category + ' ( ' + notes[category].length + ' )'}
                        onPress={() => props.navigation.navigate('Category', { category })} />
                        </View>)
                })
            }
            <DialogInput
                isDialogVisible={visible}
                title={"New Category"}
                message={"enter below new category name"}
                hintInput={"Enter Text"}
                submitInput={(inputText) => {
                    addNewCategory(inputText)
                    setVisible(false);
                }}
                closeDialog={() => setVisible(false)}>
            </DialogInput>
            <View style={{ marginTop: 20 }}>
                <Button title='add new category' onPress={() => setVisible(true)} color='#f194ff' />
            </View>
        </View>
    )
}
