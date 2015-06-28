function AddressBook() {
    this.addresses = [];
    this.addressIndex = 0;
}

AddressBook.prototype.add = function(address) {
    this.addresses.push(address);
}