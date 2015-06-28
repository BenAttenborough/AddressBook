function renderName() {
    console.log("Rendering name");
    var nameElement = document.getElementById('Name');
    nameElement.innerHTML = bensAddressBook.addresses[bensAddressBook.addressIndex].firstName + " " +
        bensAddressBook.addresses[bensAddressBook.addressIndex].lastName;
}

function renderAddress() {
    console.log("Rendering address");
    var addressElement = document.getElementById('address');
    addressElement.innerHTML = bensAddressBook.addresses[bensAddressBook.addressIndex].address;
};

function renderPhone() {
    console.log("Rendering phone");
    var phoneElement = document.getElementById('phone');
    phoneElement.innerHTML = bensAddressBook.addresses[bensAddressBook.addressIndex].phone;
};

function renderEmail() {
    console.log("Rendering address");
    var emailElement = document.getElementById('email');
    emailElement.innerHTML = bensAddressBook.addresses[bensAddressBook.addressIndex].email;
};

function renderRecordNumber() {
    console.log("Rendering index");
    var indexElement = document.getElementById('index');
    indexElement.innerHTML = (bensAddressBook.addressIndex + 1) + " of " + bensAddressBook.addresses.length + " records";
};

function renderAllFields() {
    console.log("Rendering fields");
    renderName();
    renderAddress();
    renderPhone();
    renderEmail();
    renderRecordNumber();
};

var forwardButton = document.getElementById("next");
forwardButton.onclick = function () {
    if (bensAddressBook.addressIndex >= bensAddressBook.addresses.length-1) {
        bensAddressBook.addressIndex = 0;
    } else {
        bensAddressBook.addressIndex++;
    }
    renderAllFields();
};

var backButton = document.getElementById("last");
backButton.onclick = function () {
    if (bensAddressBook.addressIndex === 0) {
        bensAddressBook.addressIndex = (bensAddressBook.addresses.length-1);
    } else {
        bensAddressBook.addressIndex--;
    }
    renderAllFields();
};