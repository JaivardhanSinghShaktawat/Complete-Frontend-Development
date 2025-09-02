/* 
-------------------------------------- Attributes ----------------------------------

--> What are attributes ? 
    Attributes are key value pairs that adds functionality or behaviour to the html 
    element.

    Attributes provides additional information about the html elements.
    Attributes defines or specifies the characterisitcs of the html elements.

    There are three types of attributes :-

    1. Local attributes
    2. Global attributes
    3. Custom attributes 

--> 1. Local attributes : These are those attributes that are specific to a particular
    or group of html elements.
    Ex : href , src , height , width , value , type are some of the local attributes.

    2. Global attributes : They can be applied to any HTML element.
    contenteditable  , title , draggable , style , id , class , hidden , lang , dir ,
    accesskey are some of the global attributes.

    a. lang : it is the global attribute that specifies the language of the element
    content.
    Note : if in some places the text content language is different than we can use 
    the lang attribute to specify the language.The lang is used for search engines 
    and browsers.
    The lang attribute is used by browser , screen readers and search engines to 
    understand the content of the web page.

    Ex : <html lang = "en"> </html>
    Ex : <html lang = "en-US"> </html>
    Ex : <html lang = "en-GB"> </html>

    lang="en/pt/ko/fr/hi/en-GB"

    b. dir : it is the global attribute that specifies the direction of the text
    (left to right or right to left). 
    If we use rtl than text will go in the right side.

    c. title : it is a global attribute that provides additional information about
    the html element when we hover on it.It displays a tooltip. 
    The title attribute is not accessible to screen reader and assistive technologies.

    d. hidden : it hides the element.It can be used to toggle the display of an 
    element.
    <h1 hidden>Hello World</h1>
    Here the h1 won't be shown on the web page.The hidden attribute will hide the html
    element from the web page.
    We can use JavaScript to toggle the hidden attribute and can hide or unhide the 
    h1 element.
    
    e. contenteditable : it allows us to edit the content of the element directly 
    from the browser for temporary.
    
    f. draggable : It specifies whether the element is draggable or not.
    Always set draggable = "true" , otherwise it won't work.
    Note : In HTML always try to use relative url.
    <a href = "path where it will get redirect" draggable = true >Link Content</a>

    g. accesskey : it is a global attribute that allows us to create a keybinding or 
    shortcut to activate/focus an html element.   

    h. spellcheck : it is used with input elements.It checks the spelling.
    The spellcheck attribute checks the spelling of the words and puts an red 
    underline if any error comes.

    i. style : it is used to apply inline styles to the element.

    j. id : it stands for unique identifier.It is used to identify a html element 
    uniquely in the whole document so that we can select or target it to apply styles
    or manipulate using JavaScript. 

    k. class : it is a group identifier.It is used to identify a single element or 
    group of elements.We can give the same class name to multiple elements as well 
    as we can give multiple different classnames to the same element.

    l. data-* : it is a convenient way to store data in html elements.
    We work with them with the help of JavaScript.
    data- k baad hm kuch bhi name de skte h.

    <p data-content="coding is fun">coding is fun</p>
    The * means any name. 

    3. Custom attributes : These are user-defined key value pairs or attributes.They 
    are not present in HTML specification but we can use them with javascript.

    <p hello = "world">coding is fun</p>

    Here hello is key and "world" is the value.So here hello is the custom 
    attribute.

--> Note : We can use specifies , represent , decides , display words to explain different 
    html elements.

--> The background attribute in body is deprecated.Use CSS instead.

--> Attributes Example 

    <div id = "section1" class = "section">
      <h1 title = "Section '1' Here " hidden>Section 1</h1>
      <p contenteditable = "true" spellcheck = "true">This paragraph demonstrates the use of contenteditable 
      attribute , which allows users to edit the content of an element</p>
    </div>
*/
