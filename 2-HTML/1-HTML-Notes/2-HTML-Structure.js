/* 
----------------------------------- HTML Structure --------------------------------

--> <!DOCTYPE html> : It stands for document declaration.It tells the browser that 
    we are using HTML document and we are using HTML5 document.
    It is not an html element or tag.It is just a declaration.
    Different version of HTML have different document declaration.

--> html : it is the root element of the html document.It contains two child i.e 
    head and body.

--> head : It is the first child of html element.It contains all the content that is 
    not visible on the web page.It provides metdata about the web page to the search
    engines.It contains content like meta elements , title tag , scripts and styles 
    etc.

--> body : it is the second child of html element.It contains all the content that 
    is visible on the browser.

--> title : it represents the title of the web page.It can be seen on the tab of the
    web page.A good title is very important for SEO.

--> favicon : it is the icon that is present on the tab of the web page.
    <link  rel = "icon"  href = "favicon.ico" type = "image/x-icon" />

--> link : it is used to import external files such as stylesheets , favicon , 
    fonts etc.

--> lang = "en" : it means that the language of the content of the html document
    is english.Here lang means english.

--> What is charset ? 
    It stands for character set.It is collection of different characters.
    Computer cannot store characters directly inside memory.So we map them with
    integers and we store those integers on behalf of those characters.All these
    characters and their mapped integers are present in a table.
    Ex : ASCII , utf-8 etc.

--> Meta Elements ? 
    Meta means data about data.It provides meta data about our web page to the
    web services which helps them to rank our web page.
    It is useful in SEO.

    <!-- HTML uses utf-8 character encoding -->
    <meta charset="utf-8" />

    // It means the author of the web page.
    <meta name="author" content="Hello World" />

    // It defines the description of the web page.
    <meta name="description" content="coding is fun and i like doing coding" />

    // It defines the keywords related to the web page.
    <meta name="keywords" content="html , html5 , html basics , frontend" />

    // It sets the width of the web page equal to the device width and initial
    zoom level to 1.0 when the web page loads initially.
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />

    // It will refresh the web page after every 5 seconds.
    <meta http-equiv="refresh" content="5" />

    // It will redirect the user to google page after 4 seconds.
    <meta http-equiv="refresh" content="4;url=https://www.google.com" />

    // It means display the website with highest compatibility mode in internet 
    explorer.
    <meta http-equiv="X-UA-Compatible" content="IE=7" />

    // It means display the website with highest compatibility mode in edge
    browser.
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    // It means your website won't rank.
    <meta name="robots" content="NOFOLLOW NOINDEX" />

--> Network Tab : Go to network tab.The network tab records the network 
    activity and listen for network activity.
    All the responses can be seen in network tab of the chrome developer tool.
    Reload it with Ctrl + r
    The initiator here means the thing or person which has made the request for it.
    index.html and favico.ico request is made by browser.So the initiator for 
    index.html and favico.ico is browser or other.
    The other css files request is made by index.html so the initiator for those
    files is index.html file.

*/
