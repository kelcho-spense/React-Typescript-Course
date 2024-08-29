# Key Rules for JSX

- Must Have a Single Parent Element:
JSX expressions must return a single parent element. Use a div or React Fragment (<>...</>) to wrap multiple elements.

- Use Curly Braces for JavaScript Expressions:
Embed JavaScript expressions inside curly braces {} to include dynamic content or evaluate logic within JSX.

- HTML Attributes Are CamelCase:
Use camelCase for HTML attributes (e.g., className, onClick). This differs from regular HTML where attributes are lowercase.

- Style Attribute Must Be an Object:
When adding inline styles, the style attribute must be an object with camelCase property names.

- JavaScript Functions and Variables:
You can use JavaScript functions and variables inside JSX by wrapping them in curly braces.

- Self-Closing Tags:
All JSX tags must be properly closed. For example, <img /> instead of <img>.

- Avoid Returning Multiple Elements Without a Wrapper:
Returning multiple JSX elements without a parent element will cause an error. Always wrap them inside a parent element or React Fragment.