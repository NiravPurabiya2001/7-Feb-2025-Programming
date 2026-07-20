// get the form container
var container = document.getElementById("formFields");

// helper function to create a label
function createLabel(text, forId) {
    var label = document.createElement("label");
    label.setAttribute("for", forId);
    label.innerHTML = text;
    return label;
}

// helper function to create a line break
function createBr() {
    return document.createElement("br");
}

// 1. Choice of Booking - dropdown
var choiceLabel = createLabel("Choice of Booking:", "choice");
container.appendChild(choiceLabel);
container.appendChild(createBr());

var choiceSelect = document.createElement("select");
choiceSelect.setAttribute("id", "choice");
choiceSelect.setAttribute("name", "choice");

var defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.innerHTML = "-- Select --";
choiceSelect.appendChild(defaultOption);

var opt1 = document.createElement("option");
opt1.value = "fullday";
opt1.innerHTML = "Full Day Booking";
choiceSelect.appendChild(opt1);

var opt2 = document.createElement("option");
opt2.value = "halfday";
opt2.innerHTML = "Half Day Booking";
choiceSelect.appendChild(opt2);

var opt3 = document.createElement("option");
opt3.value = "hourly";
opt3.innerHTML = "Hourly Booking";
choiceSelect.appendChild(opt3);

container.appendChild(choiceSelect);
container.appendChild(createBr());
container.appendChild(createBr());

// 2. User Name
var nameLabel = createLabel("User Name:", "userName");
container.appendChild(nameLabel);
container.appendChild(createBr());

var nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "userName");
nameInput.setAttribute("name", "userName");
container.appendChild(nameInput);
container.appendChild(createBr());
container.appendChild(createBr());

// 3. Mobile Number
var mobileLabel = createLabel("Mobile Number:", "mobile");
container.appendChild(mobileLabel);
container.appendChild(createBr());

var mobileInput = document.createElement("input");
mobileInput.setAttribute("type", "tel");
mobileInput.setAttribute("id", "mobile");
mobileInput.setAttribute("name", "mobile");
mobileInput.setAttribute("maxlength", "10");
container.appendChild(mobileInput);
container.appendChild(createBr());
container.appendChild(createBr());

// 4. Email
var emailLabel = createLabel("Email:", "email");
container.appendChild(emailLabel);
container.appendChild(createBr());

var emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("name", "email");
container.appendChild(emailInput);
container.appendChild(createBr());
container.appendChild(createBr());

// 5. No of Persons
var personLabel = createLabel("No of Person:", "persons");
container.appendChild(personLabel);
container.appendChild(createBr());

var personInput = document.createElement("input");
personInput.setAttribute("type", "number");
personInput.setAttribute("id", "persons");
personInput.setAttribute("name", "persons");
personInput.setAttribute("min", "1");
container.appendChild(personInput);
container.appendChild(createBr());
container.appendChild(createBr());

// 6. Date field
var dateDiv = document.createElement("div");
dateDiv.setAttribute("id", "dateDiv");
dateDiv.style.display = "none";

var dateLabel = createLabel("Date:", "date");
dateDiv.appendChild(dateLabel);
dateDiv.appendChild(createBr());

var dateInput = document.createElement("input");
dateInput.setAttribute("type", "date");
dateInput.setAttribute("id", "date");
dateInput.setAttribute("name", "date");
dateDiv.appendChild(dateInput);
dateDiv.appendChild(createBr());
dateDiv.appendChild(createBr());

container.appendChild(dateDiv);

// 7. Time field
var timeDiv = document.createElement("div");
timeDiv.setAttribute("id", "timeDiv");
timeDiv.style.display = "none";

var timeLabel = createLabel("Time:", "time");
timeDiv.appendChild(timeLabel);
timeDiv.appendChild(createBr());

var timeInput = document.createElement("input");
timeInput.setAttribute("type", "time");
timeInput.setAttribute("id", "time");
timeInput.setAttribute("name", "time");
timeDiv.appendChild(timeInput);
timeDiv.appendChild(createBr());
timeDiv.appendChild(createBr());

container.appendChild(timeDiv);

// 8. Slot field
var slotDiv = document.createElement("div");
slotDiv.setAttribute("id", "slotDiv");
slotDiv.style.display = "none";

var slotLabel = createLabel("Slot:", "slot");
slotDiv.appendChild(slotLabel);
slotDiv.appendChild(createBr());

var slotSelect = document.createElement("select");
slotSelect.setAttribute("id", "slot");
slotSelect.setAttribute("name", "slot");

var s0 = document.createElement("option");
s0.value = "";
s0.innerHTML = "-- Select Slot --";
slotSelect.appendChild(s0);

var s1 = document.createElement("option");
s1.value = "breakfast";
s1.innerHTML = "Breakfast";
slotSelect.appendChild(s1);

var s2 = document.createElement("option");
s2.value = "lunch";
s2.innerHTML = "Lunch";
slotSelect.appendChild(s2);

var s3 = document.createElement("option");
s3.value = "dinner";
s3.innerHTML = "Dinner";
slotSelect.appendChild(s3);

slotDiv.appendChild(slotSelect);
slotDiv.appendChild(createBr());
slotDiv.appendChild(createBr());

container.appendChild(slotDiv);

// show/hide fields based on booking choice
choiceSelect.addEventListener("change", function () {
    var selected = choiceSelect.value;

    // hide all dynamic fields first
    dateDiv.style.display = "none";
    timeDiv.style.display = "none";
    slotDiv.style.display = "none";

    if (selected == "fullday") {
        // Full Day Booking - only Date
        dateDiv.style.display = "block";

    } else if (selected == "halfday") {
        // Half Day Booking - Date + Slot
        dateDiv.style.display = "block";
        slotDiv.style.display = "block";

    } else if (selected == "hourly") {
        // Hourly Booking - Date + Time
        dateDiv.style.display = "block";
        timeDiv.style.display = "block";
    }
});
