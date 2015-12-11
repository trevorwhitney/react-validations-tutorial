# React Validations Tutorial

This repo will serve as a starting point and code example for the React validations
lunch and learn series. We will start by doing validations on a simple React form
component, and move to using a uni-directional event flow (like flux/redux) to perform
more complex validations

## Getting Started

This has been tested against npm version 3.3.5 and node version 4.1.1.

1. Clone the repo and cd into the cloned directory
1. `npm run setup`
1. `npm start`

## Week 1

Clone the repo, and add the following validations to the new student form:

1. First Name must be at least 2 characters
1. Last Name must be at least 2 characters
1. Birthday must be a validate date in MM/DD/YYYY format
1. The student must be at least 18 years old
1. All Fields are required

__Acceptance Criteria__

1. If any of the above validations fail, apply the css class `input-invalid` to the invalid field,
and show the validation error message next to the field.
1. When a field is valid, apply the css class `input-valid` to it, but only after the user has 
interacted with it.
1. Validations should be run both on a blur of the field, and on submit of the form. If
any validations fail on the form submit, then prevent the form from submitting and stay
on the current page.

When you are done, please make a PR to this repo with you solution.

## Week 2

Now that we have component that can validate a first name, last name, and date of birth, let's
examine the resuablitity of react components. In this week, we're going to create another react
component the reuses the fields and validations we did in week one. Take the input fields from the
NewStudent component and move them to their own component. NewStudent should now use this component.
Create another component that uses this same shared component, but also adds a select box that allows
the user to define the relationship of a guardian to the student, like we demonstrated in class. The
select box should start empty, and should be validated in the same ways as before (onBlur and onSubmit).
Have this new GuardianForm component post to /guardians, while the NewStudent component should continue
to post to /students. If time allows (which it probably won't), I will try to push a starting place, though
the starting place will be very similar to where we got in class on Thursday.