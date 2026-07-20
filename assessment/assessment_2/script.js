function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function handleBookingChoice() {
    const choice = document.getElementById('bookingChoice').value;
    const container = document.getElementById('dynamicFieldsContainer');
    
    // Clear previous fields
    container.innerHTML = '';
    
    if (choice === 'full') {
        // Only date option
        container.appendChild(createDateField());
    } else if (choice === 'half') {
        // Date and Slot option
        container.appendChild(createDateField());
        container.appendChild(createSlotField());
    } else if (choice === 'hourly') {
        // Date and Time option
        container.appendChild(createDateField());
        container.appendChild(createTimeField());
    }
}

function createDateField() {
    const div = createNode('div');
    div.className = 'form-group';
    
    const label = createNode('label');
    label.htmlFor = 'bookingDate';
    label.textContent = 'Date:';
    
    const input = createNode('input');
    input.type = 'date';
    input.id = 'bookingDate';
    input.name = 'bookingDate';
    input.required = true;
    
    append(div, label);
    append(div, input);
    return div;
}

function createTimeField() {
    const div = createNode('div');
    div.className = 'form-group';
    
    const label = createNode('label');
    label.htmlFor = 'bookingTime';
    label.textContent = 'Time:';
    
    const input = createNode('input');
    input.type = 'time';
    input.id = 'bookingTime';
    input.name = 'bookingTime';
    input.required = true;
    
    append(div, label);
    append(div, input);
    return div;
}

function createSlotField() {
    const div = createNode('div');
    div.className = 'form-group';
    
    const label = createNode('label');
    label.htmlFor = 'bookingSlot';
    label.textContent = 'Slot:';
    
    const select = createNode('select');
    select.id = 'bookingSlot';
    select.name = 'bookingSlot';
    select.required = true;
    
    const defaultOpt = createNode('option');
    defaultOpt.value = '';
    defaultOpt.textContent = 'Select a slot';
    defaultOpt.disabled = true;
    defaultOpt.selected = true;
    append(select, defaultOpt);
    
    const slots = ['Breakfast', 'Lunch', 'Dinner'];
    slots.forEach(slotText => {
        const opt = createNode('option');
        opt.value = slotText.toLowerCase();
        opt.textContent = slotText;
        append(select, opt);
    });
    
    append(div, label);
    append(div, select);
    return div;
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Booking Submitted Successfully!');
});
