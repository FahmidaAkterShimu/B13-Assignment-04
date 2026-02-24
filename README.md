# B13-Assignment-04
<h2> Questions and Answers </h2> <br>
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? <br>
Ans: Here is the difference between getElementById, getElementsByClassName & querySelector / querySelectorAll:<br>
<br>i. getElementById :
<br>Finds element by id
<br>Returns one element
<br>
<br>ii. getElementsByClassName :
<br>Finds elements by class
<br>Returns many elements (HTMLCollection)
<br>
<br>iii. querySelector :
<br>Uses CSS selector
<br>Returns the first matching element
<br>
<br>iv. querySelectorAll :
<br>Uses CSS selector
<br>Returns all matching elements (NodeList)

<br> <br>

2. How do you create and insert a new element into the DOM? <br>
Ans:<br>
<ul>
    <li>Create element : <br>
        let div = document.createElement("div");
    </li>
    <li>Insert into the DOM : <br>
        document.body.appendChild(div); <br>
      This adds the new element at the end of the body.
    </li>
</ul>

<br> <br>


3. What is Event Bubbling? And how does it work? <br>
Ans: Event bubbling is when an event triggered on a child element also triggers on its parent, then grandparent, then body, then document. <br>
Event travels from inside → outside. <br>
<br>--> How it works:
<br> When we click a child element, the event triggers on the child element first, and then it automatically triggers on its parent, then the body, then the document.
<br> Order: Child → Parent → Body → Document
 <br>  <br>
Example:
Click a button inside a div →
Button event triggers → then div event triggers.

<br><br>

4. What is Event Delegation in JavaScript? Why is it useful? <br>
Ans: Event Delegation means adding an event listener to a parent element instead of adding it to many child elements. <br>
The parent element then responds to the event when any child element is clicked (using event bubbling). <br>

<br>Example:
<br>Instead of adding click event to 100 buttons, we add one event to their parent.

<br>document.getElementById("parent").addEventListener("click", function(event) {
<br>  if (event.target.classList.contains("btn")) {
<br>    console.log("Button clicked");
<br> }
<br>});
<br>
<br>--> Why is it useful:
<li>Less code</li>
<li>Better performance</li>
<li>Works for dynamically added elements</li>
<li>Easy to manage events</li>

<br><br>

5. What is the difference between preventDefault() and stopPropagation() methods? <br>
Ans: Here's the difference: <br>

<li>preventDefault():
This stops the default behavior of an element. <br>
Example:
<br> If we click a link (<a>), it normally opens another page.
<br> If we submit a form, it normally reloads the page. <br>
<br>event.preventDefault();
<br>This stops that default action.
<br>
<br>So:
<br>Link won't go to another page
<br>Form won't reload
<br>But the event can still bubble up.
</li>
<br>
<li>stopPropagation():
<br>This stops the event from moving up to parent elements.
<br>e.stopPropagation();
<br>The event will run only on that element, it won't go to parent, body, or document.
</li>
