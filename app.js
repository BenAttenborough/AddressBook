var bensAddressBook = new AddressBook();

var benAttenborough = new Address("Ben", "Attenborough", "Nowhere", "+00 00000 000000", "email@mail.com");
bensAddressBook.add(benAttenborough);

var johnSmith = new Address("John", "Smith", "Somewhere", "+00 1234 000000", "mailman@email.com");
bensAddressBook.add(johnSmith);

renderAllFields();