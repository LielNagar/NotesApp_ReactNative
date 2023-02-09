import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import React, { useContext } from 'react'
import { NotesContext } from './NotesContext';


export default function Note(props) {
  const { notes, setNotes } = useContext(NotesContext)

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const deleteNote = (content) => {
    let newNotes = notes
    let newNotesByCategory = newNotes[props.category].filter((note) => note.description !== content)
    newNotes[props.category] = newNotesByCategory
    setNotes(newNotes)
    props.navigation.navigate('Category', {category: props.category})
  }

  return (
    <TouchableOpacity
      onLongPress={() => {
        Alert.alert('Delete Note', 'Are you sure?', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => deleteNote(props.description) },
        ]);
      }}
      style={[styles.card, { backgroundColor: generateColor() }]}>

      <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
      <Text numberOfLines={4} style={styles.note}>{props.description}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderRadius: 5,
    margin: 10,
    paddingRight: 10,
    width: 138,
    height: 136,
    color: '#fff',
  },
  create: {
    fontSize: 11,
    alignSelf: 'flex-end',
    color: '#fff',
    right: -10,
    top: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    top: 10,
    left: 10,
  },
  category: {
    color: '#FFFBFB',
    fontSize: 10,
    top: 8,
    left: 10
  },
  note: {
    color: 'black',
    fontSize: 12,
    top: 10,
    left: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonDelete: {
    marginTop: 2,
    backgroundColor: '#e60026'
  },
  buttonClose: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});