import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {

    function handleParticipantAdd(){
    console.log('você clicou!');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>React</Text>
            <Text style={styles.eventDate}>Native</Text>
            <TextInput 
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor= "#6b6b6b"/>

            <TouchableOpacity style={styles.button}
            onPress={handleParticipantAdd}
            >
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>

            
        </View>
    );
}