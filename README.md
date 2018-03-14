# Description

This is an assignment to build a responsive ecommerce web page. Nav and product container div will use flexbox. Sidebar/aside is a module that changes layout and location based on window size. Submitting the mailing list signup form results in user feedback on the page. Clicking a product's “add to cart” or “remove from cart” button updates cart count at top.

Students may use the provided mockups to guide their design to whatever extent they like. Matching the mockups is not required.

## Provided Materials

  - basic HTML and CSS
  - JSON list of products in script.js file
  - reset.css
  - images for all products
  - suggested design mockups

## Assignments

Lesson 03:

  - Make design decisions about how you'd like your site to look. You can use the provided mockups to guide your design to whatever extent you'd like- feel free to implement them exactly or make up your own design completely.
  - Code basic CSS for page. `reset.css` file should remain as it is. `main.css` file can be added to, changed, or completely redone.
  - `nav ul` and `.item-container` elements should be styled as flexbox containers. Implement a responsive grid system of your own design, or use a library, or don't use a grid at all. Be sure all important size values are proportional (em, rem, %).
  - We'll continue working on the CSS for this project throughout the course, in particular making it more responsive. The styling does not have to be perfect after this assignment. It's fine to change or add to the HTML as necessary for your styling.

Lesson 05:

  - Write a JS form handler function to be triggered on form submit. It should print to the console a friendly message that includes the value of the form element with name "email". Something like "Thanks for signing up for our mailing list, bobross@example.com!"

Lesson 06:

  - Serve appropriately sized images. Use GIMP or another photo-editing program to resize all images to more reasonable, consistent dimensions. This includes product images, the logo, and any background or other images you've included.

Lesson 07:

  - Write Javascript function that toggles the inclusion of a product in the "cart".
  - Add/edit HTML as necessary to trigger the function on click of a button for each product.

Lesson 08:

  - Write CSS that uses media queries to change layouts/style based on device size. There shoud be at least one obvious layout change in addition to elements fluidly changing width.
  - Finish styling the page.

Lesson 09:

  - Write Javascript that causes the total number of items in the cart to display next to the cart icon when that total changes.
  - Write Javascript that displays the friendly message on form submit in the page, not in the console.
  - Update the HTML and CSS as necessary to accomodate these changes.
  - Update the Testing section of this README with your own information.

*Extra Challenge*: Incorporate unit tests with [Qunit](https://qunitjs.com/).

*Extra Challenge*: Code a popup that toggles between hidden and displayed when user clicks on cart icon. It should show information about items in the cart (maybe list of their names, but up to you).

*Extra Challenge*: Serve appropriately sized images for user's device. Create multiple sizes of each image, and serve the appropriate one using the `srcset` and `sizes` attributes on the `img` tags. This will require naming all of the images consistently, e.g. "ombre-infinity400.jpg", "ombre-infinity200.jpg". [More](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) about [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

*Extra Challenge*: Use browser storage to save details about a user's cart so when they revisit the page, it's in the same state as when they left it. [More about browser storage](https://www.w3schools.com/html/html5_webstorage.asp)

*Extra Challenge*: Dynamically generate the HTML for product listings from the JSON objects in script.js.

## Requirements

  - Site layout looks good on all sizes of devices. At a minimum, elements are proportionally styled and aside element changes location and layout at different screen sizes. This should be tested using a variety of devices and at least one online browser compatiblity testing tool.
  - Nav and product container elements are styled using flexbox.
  - Appropriately sized images are served.
  - User can add and remove items from their cart, which changes cart count number at top of page.
  - This README is updated to include information about the testing steps taken to ensure site quality.
  - Site is live on GH Pages hosting.

## Grading
Each weekly assignment will be graded independently. There will not be a final grade for the entire project.

## Testing
- [x]Define who the user base is for this website, and what sort of devices they might use.
- []Test your site across multiple browsers and devices, focusing on ones your market research highlighted, using the tools we learned about in today's class. 
- []Update the "Testing" section of the README to include your research on users and devices, and testing steps you took to ensure site quality.

### User Base
User Base Attribute | My User Base | Impact | Notes
------ | ------- | ------- | -------
Age and age groups | Youth and older | L | 
Personal life-style | Into fashion and style | H | 
Gender | Male and female | L | 
Language | Unknown | M | Should be translated
Education | Any level | L | 
Learning preferences | Any | L | Visual is a must, but detailed descriptions should be used for screen readers
Work attributes | Any | L | 
Expectations | Based on other shopping sites | H | Should be intuitive like other shopping sites
Existing knowledge | Familiarity with style, scarf styles | M | Want to show new and unfamiliar products first if their preferences are unfiltered
Web and computer experience | Familiar with other shopping sites | H | How other shopping sites behave and are navigated
On what device they will read it | Mobile, tablet, desktop | H | 
Internet connection speed | Variable | H | Should keep image sizes managable for slower speeds
User's location | Basis for translation | M | Language preferences
Place where the page is read | During free time, while on work break | H | Strong determining factor for device
Why users seek the content | Shopping, "window shopping" | H | 
Importance of the content to them | They are seeking this content out | H | 
How they found the page | Email marketing, word of mouth, search engine, phone application (shopping app) | H | 
When it is read | Time of day can influence styles for site | M | e.g. night-mode

#### User Base Outcomes
Important attributes of the users is that they are shopping, are most likely familiar with other shopping websites and applications, they could be using any size device - mobile, tablet, desktop; looking at this site will most likely be a leisurely activity, users will have a range of internet speeds and language preferences; they are most likely seeking this site out to purchase something and it would be valuable to have insight as to how they found the page.

### Screen Testing
Device | Resolution | Screen Size | Orientation | Notes
------- | ------- | ------- | ------- | -------
Samsung - S24D590L | 1920 x 1080 | 23.6" | Landscape | Logo is too big, navigation bar text should be larger, dividing borders between nav items would help, gray background of newsletter form is too dark, newsletter form should be an aside and aligned horizontally with products 
Dell - unknown older model | 1280 x 1024 | 19" | Landscape | Logo is too big, navigation bar text should be larger, dividing borders between nav items would help, gray background of newsletter form is too dark, newsletter form should be an aside and aligned horizontally with products 
Acer Aspire e15 | 1920 x 1080 | 15.6" | Landscape | Logo is too big, navigation bar text should be larger, dividing borders between nav items would help, gray background of newsletter form is too dark, newsletter form should be an aside and aligned horizontally with products 
iPhone 6S | 1334 x 750 | 4.7" | Landscape and portrait | Logo and header text should not take up more than 25% of screen, navigation buttons could be consolidated to hamburger menu or have more vertical and bottom space on buttons, make add to cart and remove from cart buttons larger and more space between, landscape orientation moves newsletter before products, using Safari's reader view - there should be more space between products and navigation is not managable
iPhone 5c | 1136 x 640 | 4" | Landscape and portrait | Logo and header size should be significantly reduced, button size should be increased, and font size should be increased. 


