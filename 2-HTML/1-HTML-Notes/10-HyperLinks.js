/* 
-------------------------------------- HyperLinks ----------------------------------

--> What is HyperLink ? 
    It is a text which contains links to other text.
    It is a text that contains links, when we click on this link than we redirect to 
    a new web page.
    HyperText and HyperLink are same only.
    We use anchor element to create a hyperlink or hypertext.
    anchor element is nothing without href attribute.

    <a href="https://www.google.com" target="_blank" title="Google Search">Search</a>

    href : it specifies the location/path where the user will get redirect when the
    user will click on this hyperlink.
    target : it specifies where the linked content should get displayed. 
    target=_blank will open the page on a new tab.
    By default the value of target is _self.

    Hyperlink and link element both are different. 

    title : it is a global attribute that provides additional information about
    the html element when we hover on it.It displays a tooltip.
    
--> Note : Keep you link text short.
    <a href = "https://www.google.com">this links to google</a> // This is bad.

    This is also bad because click me might have different meaning.So it's also not 
    good.
    <li>
    To know more about me
    <a href = "https://www.google.com">Click Me</a> // This is bad
    </li>

--> Absolute url includes the root and relative url don't include the root

--> Types of paths

    1. internal : it is used to connect web pages within the same server/website. 

    <a href = "about.html" target = "_blank">hello world</a>
    <a href = "./practice.html" target = "_blank">hello world</a>

    2. external : it is used to create hyperlink to other website.It connects one
    or more web pages between the websites.It connects web pages that are present
    on different servers.

    <a href = "https://www.google.com" target = "_blank">hello world</a>
    <a href = "C:/Users/Username/Downloads/html/practice.html" target = "_blank">hello world</a>

    3. hyperlink on the same web page to some content or section : we can create 
    hyperlink to some content or section on the same web page using anchor element
    and id.

--> What is scroll-behaviour ? 
    It is a CSS property that is used for smooth scrolling.

    html{
      scroll-behavior : smooth ; 
    }

--> Different HyperText or HyperLinks 

    1. Download HyperLink or Link
    <a href="image.png" download="nature-image" title="nature image">Download Image</a> 
    href = "path of the download content"

    <a href = "notes.zip" download="html-notes">Download HTML Notes</a>

    To allow download , put the download attribute.
    When the user will download the image than the name of the image will be 
    nature-image.Whatever we specify in download will be the image name.

    2. External HyperLink (Linking or connection external web pages)
    <a href="https://www.google.com" target="_blank" title="Google Search">Search</a>

    3. Internal HyperLink : When we create hyperlink to web page that are present
    on the same server. 
    <a href="index.html">Home</a> | <a href="about.html">About</a> 

    4. HyperLink to some content/section (using id)
    When we want to create hyperlink to some content or section than we use id.
     <header id="header">
      <a href="#footer">Go To Footer</a>
    </header>

    <footer id="footer">
      <a href="#header">Go To Header</a>
    </footer>

    5. Mail HyperLink
    <a href="mailto:yourmail">Mail</a> 

    To mail someone we can use this thing.
    Note : It is not advised to use the mailto and tel attribute directly because many 
    spiders or hackers get's/crawl the email address and phone number.It is more good 
    to use it with the form tag.

    6. Phone HyperLink
    <a href="tel:+phoneNumber">Contact</a> 
    <a href = "tel:whatsappGroupLink/telGroupLink/+phoneNo">Connect on Whatsapp</a>

    tel stands for telephone.
    It will open the phone dialer.

    7. Go to top HyperLink 
    <a href="#">Back To Top</a> It will move/redirect to the top of the web page without 
    refreshing the web page.
    <a href = "">Back To Top</a> It will also work but it will refresh the page.

    8. HyperLink to image 
    When user will click on this image than this image will appear in the new tab.

    <a href="image.jpg" target="_blank">
    Nature Image
    </a>

    9. Back to home
    <a href = "/">Back To Home</a>
    The href = "/" will redirect you to the home page.It means index.html only.

    10 Empty Link
    <a href = "#!">Empty Link</a>
    It won't redirect to the top of the web page.

--> Note : The scroll-behaviour : smooth property can be used to make the scrolling 
    smooth.
*/
