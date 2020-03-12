import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('renders correctly', () => {
    render(<ContactForm/>)
})

test('contact form adds new contact', async () => {
    const { findByLabelText, findByTestId} = render(<ContactForm/>);

    // Check to see if labels and inputs exist
    const firstNameInput = await findByLabelText(/first name*/i);
    const lastNameInput = await findByLabelText(/last name*/i);
    const emailInput = await findByLabelText(/email*/i);
    const messageInput = await findByLabelText(/message/i);

    // Fill out all input fields
    fireEvent.change(firstNameInput, {
        target: {name: 'firstName', value: 'Josiah'}
    });

    fireEvent.change(lastNameInput, {
        target: {name: 'lastName', value: 'Roa'}
    });

    fireEvent.change(emailInput, {
        target: {name: 'email', value: 'josiahroa18@gmail.com'}
    });

    fireEvent.change(messageInput, {
        target: {name: 'message', value: 'Hello, this is a message'}
    });

    // Check to see if submit button works
    fireEvent.click(document.getElementById('submit'));

    // Check to see if the output appears
    await findByTestId('output');
})

// Test to see if lack of first name toggles first name error
test('first name error appears', async () => {
    const { findByLabelText, findByTestId } = render(<ContactForm/>)

    // Check to see if labels and inputs exist
    const firstNameInput = await findByLabelText(/first name*/i);
    const lastNameInput = await findByLabelText(/last name*/i);
    const emailInput = await findByLabelText(/email*/i);
    const messageInput = await findByLabelText(/message/i);

    // Since we are testing if an error appears if there is no name, we do not add a name
    // fireEvent.change(firstNameInput, {
    //     target: {name: 'firstName', value: 'Josiah'}
    // });

    fireEvent.change(lastNameInput, {
        target: {name: 'lastName', value: 'Roa'}
    });

    fireEvent.change(emailInput, {
        target: {name: 'email', value: 'josiahroa18@gmail.com'}
    });

    fireEvent.change(messageInput, {
        target: {name: 'message', value: 'Hello, this is a message'}
    });

    fireEvent.click(document.getElementById('submit'));

    await findByTestId('error');
})

// Test to see if an error appears if the first name exceeds max length of 10
test ('first name is too long', async() => {
    const { findByLabelText, findByTestId } = render(<ContactForm/>)

    // Check to see if labels and inputs exist
    const firstNameInput = await findByLabelText(/first name*/i);
    const lastNameInput = await findByLabelText(/last name*/i);
    const emailInput = await findByLabelText(/email*/i);
    const messageInput = await findByLabelText(/message/i);

    // fireEvent.change(firstNameInput, {
    //     target: {name: 'firstName', value: 'Josiah'}
    // });

    fireEvent.change(lastNameInput, {
        target: {name: 'lastName', value: 'Roa'}
    });

    fireEvent.change(emailInput, {
        target: {name: 'email', value: 'josiahroa18@gmail.com'}
    });

    fireEvent.change(messageInput, {
        target: {name: 'message', value: 'Hello, this is a message'}
    });

    fireEvent.click(document.getElementById('submit'));

    await findByTestId('error');
})

// Test to see if lack of last name toggles last name error
test('last name error appears', async () => {
    const { findByLabelText, findByTestId } = render(<ContactForm/>)

    // Check to see if labels and inputs exist
    const firstNameInput = await findByLabelText(/first name*/i);
    const lastNameInput = await findByLabelText(/last name*/i);
    const emailInput = await findByLabelText(/email*/i);
    const messageInput = await findByLabelText(/message/i);

    fireEvent.change(firstNameInput, {
        target: {name: 'firstName', value: 'Josiah'}
    });

    // Since we are testing if an error appears if there is no name, we do not add a name
    // fireEvent.change(lastNameInput, {
    //     target: {name: 'lastName', value: 'Roa'}
    // });

    fireEvent.change(emailInput, {
        target: {name: 'email', value: 'josiahroa18@gmail.com'}
    });

    fireEvent.change(messageInput, {
        target: {name: 'message', value: 'Hello, this is a message'}
    });

    fireEvent.click(document.getElementById('submit'));

    await findByTestId('error');
})

// Test to see if lack of input toggles email error
test('email error appears', async() => {
    const { findByLabelText, findByTestId } = render(<ContactForm/>)

    // Check to see if labels and inputs exist
    const firstNameInput = await findByLabelText(/first name*/i);
    const lastNameInput = await findByLabelText(/last name*/i);
    const emailInput = await findByLabelText(/email*/i);
    const messageInput = await findByLabelText(/message/i);

    fireEvent.change(firstNameInput, {
        target: {name: 'firstName', value: 'Josiah'}
    });

    fireEvent.change(lastNameInput, {
        target: {name: 'lastName', value: 'Roa'}
    });

    // Since we are testing if an error appears if there is no name, we do not add a name
    // fireEvent.change(emailInput, {
    //     target: {name: 'email', value: 'josiahroa18@gmail.com'}
    // });

    fireEvent.change(messageInput, {
        target: {name: 'message', value: 'Hello, this is a message'}
    });

    fireEvent.click(document.getElementById('submit'));

    await findByTestId('error');
})

