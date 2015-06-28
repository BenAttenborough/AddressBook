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

function renderOtherRecords() {
    var recordElement = document.getElementById('records');
    recordElement.innerHTML = '';
    //Create the buttons
    for (var record in bensAddressBook.addresses) {
        recordElement.innerHTML += '<button class="btn--default"></button>';
    }
    var recordButtons = document.getElementById('records').getElementsByClassName('btn--default');
    //Add names and functionality to buttons to buttons
    for (var button in bensAddressBook.addresses) {
        recordButtons[button].innerHTML = bensAddressBook.addresses[button].firstName + " " + bensAddressBook.addresses[button].lastName;
    }
};

function recordButtonsFunctionality(){
    var recordButtons = document.getElementById('records').getElementsByClassName('btn--default');
//    console.log(recordButtons);
    for (var button in recordButtons) {
//        console.log(recordButtons[button].innerHTML);
    }
//    console.log(recordButtons);
}