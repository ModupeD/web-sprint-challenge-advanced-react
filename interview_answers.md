# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Functional components are also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI while Class components also known as Stateful components implement logic and state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called just before a component mounts on the DOM or the render method is called.

componentWillUpdate is called right before the component renders.

3. Define stateful logic.

Stateful logic is any code that is used to manipulate or create data.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange: This is where we setup the react component we are testing.

Act: Execute our behaviour(if there is one).

Assert:
Extract the response element and check(if necessary) that it is what we expect it to be.
