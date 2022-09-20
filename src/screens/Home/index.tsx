import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from './components/Participant';

export default function Home() {
    const participants = ['Raquel', 'Catharine', 'Luke', 'Ayra'];

    function handleParticipantAdd() {
        if(participants.includes('Raquel')) {
            return Alert.alert("Participante Existe", "Já existe um participante na lista")
        }
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado")
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>React</Text>
            <Text style={styles.eventDate}>Native</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor="#6b6b6b" />

                <TouchableOpacity style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença 
                    </Text>
                )}
            />
        </View>
    );
}