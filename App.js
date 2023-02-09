import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNote from './pages/AddNote';
import CategoryNotes from './pages/CategoryNotes';
import Homepage from './pages/Homepage';
import NotesContextProvider from './pages/NotesContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NotesContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Homepage">
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Category" component={CategoryNotes} options={({ route }) => ({ title: route.params.category })} />
          <Stack.Screen name="NewNote" component={AddNote} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesContextProvider>
  );
}