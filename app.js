var bensAddressBook = new AddressBook();

var benAttenborough = new Address("Ben", "Attenborough", "Nowhere", "+00 00000 000000", "email@mail.com");
bensAddressBook.add(benAttenborough);

var johnSmith = new Address("John", "Smith", "Somewhere", "+00 1234 000000", "mailman@email.com");
bensAddressBook.add(johnSmith);

var hilary = new Address("Hilary", "Mantell", "England", "+00 1234 12345678", "hilary@email.com");
bensAddressBook.add(hilary);

var phil = new Address("Phillip", "Baines", "Canada", "+00 4321 87654321", "phil@email.com");
bensAddressBook.add(phil);

var ellen = new Address("Ellen", "Lupton", "USA", "+00 1434 14345474", "ellen@email.com");
bensAddressBook.add(ellen);

var robert = new Address("Robert", "Bringhurst", "England", "+00 5355 12555678", "robert@email.com");
bensAddressBook.add(robert);

renderAllFields();