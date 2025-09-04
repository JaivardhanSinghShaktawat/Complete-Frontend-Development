/* 
-------------------------------- Iframe Element -------------------------------------

--> Iframe Element : Iframe stands for inline frame.Each and every web page is a 
    frame.Iframe is used to embed one frame/web page/document into another frame/web 
    page/document.
    It can also be used to embed pdf.

    We can use it to embed :-
    website (wikipedia) 
    google maps 
    twitter posts 
    youtube videos 
    codepen projects into our web page.
    pdf files.

    Note : Always iframe to embed pdf files in document.

    <iframe src="" height="" width="" allowfullscreen></iframe>

    src : it stands for path or location of another document or pdf. 
    it specifies the path/location where the document/pdf.
    height : height of the frame.
    width : width of the frame. 
    title in iframe is also important.

    Iframe stands for inline frame.

    We can embed wikipedia and other web pages/documents using iframe. 

    srcdoc : it accepts html content. 
    It has more priority than src attribute. 

    <iframe srcdoc = "<h2>coding is fun</h2>"></iframe>

    We can embed youtube videos , wikipedia web pages and even google maps.

    scrolling : it controls the scrollbar.
    We can also give height and width to iframes.

--> How to embed youtube video with a particular timestamp ? 

    Note : If you want to embed youtube video via iframe element and you want that
    the video should start with a particular time. 

    Go to that youtube video , click on share and click on embed video and click
    on start at and copy the url. 

    You need to play the video at the specific timestamps that you need before
    copying it's url.

--> How to embed google maps ? 
    Note : We can also embed a google map using iframe tag.
    Go to map and search for any location.Click on the share and copy the embed 
    option.
    Paste the iframe and src value inside the html document to embed the map with 
    that location.

    Embedding a google map with a specific location.

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116078.31354777157!2d73.62246978968834!3d24.608263766471083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1724835754749!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

--> Embedding a website using iframe 

    We can embed wikipedia website in our html document.

    <iframe src = "https://www.wikipedia.org/"
    height = "500"
    width = "80%"
    title = "wikipedia"
    > 
    </iframe>

--> Embedding a youtube video 

    Go to youtube and click on any video.Click on share --> click on embed
    copy the text and put it in the html document.This will embed the youtube video
    in our html document.

    <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/5ccq_nLHneE?si=aPhHmFnc85bTN5sP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    Conclusion : To embed a youtube video or other website video or to embed a website
    we can use the iframe tag.

*/
