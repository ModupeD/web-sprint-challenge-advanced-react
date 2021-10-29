import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", async () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const firstNameField = screen.getByLabelText(/first name*/i);
  userEvent.type(firstNameField, "Modupeoluwa");

  const lastNameField = screen.getByLabelText(/last name*/i);
  userEvent.type(lastNameField, "Daniel");

  const addressField = screen.getByLabelText(/address*/i);
  userEvent.type(addressField, "Plot 1094");

  const cityField = screen.getByLabelText(/city*/i);
  userEvent.type(cityField, "Lagos");

  const stateField = screen.getByLabelText(/state*/i);
  userEvent.type(stateField, "Lagos");

  const zipField = screen.getByLabelText(/zip/i);
  userEvent.type(zipField, "45220");

  const submitButton = screen.getByRole("button");
  userEvent.click(submitButton);

  await waitFor(() => {
    const successMessage = screen.queryByTestId("successMessage");
    expect(successMessage).toBeInTheDocument;
  });
});
