import { useDispatch, useSelector } from 'react-redux';
import { Filter } from 'components/filter/Filter';
// import { removeContact } from '../../redux/contactSlice/contactSlice';
import { deleteContactThunk } from '../../redux/thunk/thunk';
import {
  LiStyle,
  UlStyle,
  UlStyleContactList,
  ButtonDel,
  MdDelete,
} from './ContactsStyled';

export const Contacts = () => {
  const initialContacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = initialContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Contacts</h1>
      <UlStyle>
        <Filter />
        <UlStyleContactList>
          {filteredContacts.map(({ id, name, number }) => (
            <LiStyle key={id}>
              {name}: {number}
              <ButtonDel>
                <MdDelete onClick={() => dispatch(deleteContactThunk(id))} />
              </ButtonDel>
            </LiStyle>
          ))}
        </UlStyleContactList>
      </UlStyle>
    </div>
  );
};
