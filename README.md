## Testing
- [x] Defined who the user base is for this website, and what sort of devices they might use.
- [x] Tested site across multiple browsers and devices, focusing on ones your market research highlighted.

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
Important attributes of the users are that they are shopping, are most likely familiar with other shopping websites and applications, they could be using any size device - mobile, tablet, desktop; looking at this site will most likely be a leisurely activity, users will have a range of internet speeds and language preferences; they are most likely seeking this site out to purchase something and it would be valuable to have insight as to how they found the page.

### Screen Testing
Device | Resolution | Screen Size | Orientation | Notes
------- | ------- | ------- | ------- | -------
Samsung - S24D590L | 1920 x 1080 | 23.6" | Landscape | Logo is too big, navigation bar text should be larger, dividing borders between nav items would help, gray background of newsletter form is too dark, newsletter form should be an aside and aligned horizontally with products 
Dell - unknown older model | 1280 x 1024 | 19" | Landscape | Logo is too big, navigation bar text should be larger, dividing borders between nav items would help, gray background of newsletter form is too dark, newsletter form should be an aside and aligned horizontally with products 
Acer Aspire e15 | 1920 x 1080 | 15.6" | Landscape | Logo is too big, navigation bar text should be larger, dividing borders between nav items would help, gray background of newsletter form is too dark, newsletter form should be an aside and aligned horizontally with products 
iPhone 6S | 1334 x 750 | 4.7" | Landscape and portrait | Logo and header text should not take up more than 25% of screen, navigation buttons could be consolidated to hamburger menu or have more vertical and bottom space on buttons, make add to cart and remove from cart buttons larger and more space between, landscape orientation moves newsletter before products, using Safari's reader view - there should be more space between products and navigation is not managable
iPhone 5c | 1136 x 640 | 4" | Landscape and portrait | Logo and header size should be significantly reduced, button size should be increased, and font size should be increased 
Amazon Fire 7 | 1024 x 600 | 7" | Landscape and portrait | Logo needs to be smaller, navigation is better than mobiles, issue with shopping cart icon - see browser testing, font size should be increased

#### Screen Testing Outcomes
Logo and header section must be made smaller, header text and logo should be consolidated and not take up more than 25% of the height when first opening the page. Newsletter should be horizontally aligned with products on large screens (already moves below product section on small screens). Font should be larger in navigation and products section. Buttons should be larger in navigation and products section and more space between them. 

### Browser Testing
Browser | Testing Notes
------ | -----
Chrome and Chrome for iOS | All parts of the page are displaying as they should: hover effects, icons, images, fonts.
Safari for iOS | All parts of the page are displaying as they should: hover effects, icons, images, fonts.
Safari Reader View | Navigation and Newsletter form are missing text and links, products section is easier to read and see the images.
Opera for Windows 10 | All parts of the page are displaying as they should: hover effects, icons, images, fonts.
Mozilla Firefox, Mozilla Firefox Developer | All parts of the page are displaying as they should: hover effects, icons, images, fonts.
Mozilla Firefox Reader View | Navigation and Newsletter form are missing text and links, products section is easier to read and see the images.
Microsoft Edge and Microsoft Edge for iOS | All parts are displaying properly: hover effects, icons, images and fonts. On iOS version when scrolling up from the bottom of the page there is a stuttering effect when passing over the newsletter section.
Microsoft Edge Reader View | Naviagtion and header are missing most parts. The first letter of text is a large stylized letter.
Amazon Silk | FontAwesome icon for the shopping cart does not display on this browser. Other parts are displaying properly.
WebPageTest.org | First Byte Time, Keep-alive Enabled, and Compress Transfer received a grade of "A". Compress Images received a "B" - use progressive JPEGs. Potential to save 38KBs. Cache Static Content received a grade of "F" - static files like images, css and js could be cached for an improved grade.

#### Browser Testing Outcomes
Significant loss of function in reader modes on web browsers. Buttons should be larger and more distinct for mobile and smaller devices. Font sizes should be larger everywhere except the header.

### General Testing Outcomes
Logo and header section sizes need to be reduced, especially for mobile and smaller screen sizes. Buttons should be larger and easier to click on touchscreens. Font sizes need to be increased. Reader modes on mobile and desktop browsers break much of the site functionality. 

