import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Component } from 'react';
import { Container, MainTitle, ContactsTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = contact => {
    const { contacts } = this.state;
    const { name } = contact;

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${contact.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm handleSubmit={this.handleSubmit} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
