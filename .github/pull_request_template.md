# What changed

- [Implements RR-XXXX](https://rezolvetech.atlassian.net/browse/RR-XXXX)
-

# Screenshots

-

## Before submitting code to review

- [ ] Link to the story in the JIRA
- [ ] Read the ticket one more time and make sure everything is implemented.
- [ ] Add screenshots or GIFs for any UI changes. This will help the person reviewing your code to understand what you’ve changed and how it works.
- [ ] No lint warnings, type errors, or test failures
- [ ] No new errors and warnings in the browser console.
- [ ] All code is formatted with Prettier.
- [ ] Do a self-review: carefully read all the code before opening a pull request. Think about what kind of issues a reviewer may find in your code, what kind of questions they may have, what’s not clear. This alone can save you several review iterations and days in review.

* Having a coffee break or lunch before doing a self-review could be a great idea to help you to look at your code with fresh eyes.
* Take notes, mental of physical, on what kind of comments you get in code reviews — you’ll notice that they are often repeated. You can save lots of time by making sure you won’t get any of the comments that you often receive.

## Code

- [ ] Is there any dead (commented) or unreachable code? Delete it.
- [ ] Does the change affect the details in the README file? Update the README.
- [ ] Are there any 'magic numbers' (values in code)? Refactor them out to a constants file.
- [ ] Are there any secrets in the constants? Refactor them out to env vars.
- [ ] Is this an opportunity to refactor? Check the code and see if there's anything to improve. Improve all the things!
- [ ] If there is a change to the common component then it should be in a separate PR

## UI

- [ ] The UI must be responsive, looks good on any screen size.
- [ ] Does the feature look like the designs? Have differences been noted?
- [ ] Are all components working asynchronously (eg no awaits)?
- [ ] Things should fail gracefully. Are components handling their loading, loaded, and failing states properly?
- [ ] API calls can be slow or fail entirely. Are slow/failing API calls handled by components well?
- [ ] Semantic tags are used where possible instead of divs and spans (headings, paragraphs, lists, etc.)

## CSS

- [ ] ::ng-deep and !important is not used
- [ ] No style overrides of any component library components.
- [ ] No unnecessary CSS, ideally there’s no CSS at all
- [ ] Are there any inline styles? Refactor them out to CSS.
