# React Validations Tutorial

This repo will serve as a starting point and code example for the React validations
lunch and learn series. We will start by doing validations on a simple React form
component, and move to using a uni-directional event flow (like flux/redux) to perform
more complex validations

## Getting Started

1. Clone the repo and cd into the cloned directory
1. `npm run setup`
1. `npm start`

## Day 1

Clone the repo, and add the following validations to the new student form:

1. First Name must be at least 2 characters
1. Last Name must be at least 2 characters
1. Birthday must be a validate date in MM/DD/YYYY format
1. The student must be at least 18 years old

__Acceptance Criteria__

1. If any of the above validations fail, apply a css class to the invalid field,
and show the validation error message next to the field.
1. Validations should be run both on a blur of the field, and on submit of the form. If
any validations fail on the form submit, then prevent the form from submitting and stay
on the current page.

When you are done, please make a PR to this repo with you solution.