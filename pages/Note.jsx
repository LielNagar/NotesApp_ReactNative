import { TouchableOpacity, Text, Modal, StyleSheet, View, Alert, Pressable } from 'react-native';
import React, { useContext, useState } from 'react'
import { NotesContext } from './NotesContext';

export default function Note(props) {
  const { notes, setNotes, modalVisible, setModalVisible } = useContext(NotesContext)
  //const category = props.category

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
  }

  return (
    <TouchableOpacity
      onLongPress={() => setModalVisible(true)}
      style={[styles.card, { backgroundColor: generateColor() }]}>

      <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
      <Text numberOfLines={4} style={styles.note}>{props.content}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to delete this note?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                deleteNote(props.content)
                setModalVisible(!modalVisible)
              }
              }>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose, styles.buttonDelete]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    margin: 20,
    paddingRight: 20,
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