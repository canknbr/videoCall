import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import contacts from '../../../assets/data/contacts.json';

const ContactScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  useEffect(() => {
    const newContacts = contacts.filter(contact => {
      return contact.user_display_name
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    setFilteredContacts(newContacts);
  }, [search]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        onChangeText={setSearch}
        value={search}
      />
      <FlatList
        data={filteredContacts}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.contactName}>{item.user_display_name}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
    backgroundColor: '#dddddd',
    color: '#333',
  },
  contactName: {
    fontsize: 16,
    marginVertical: 10,
  },
  seperator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
});
export default ContactScreen;
