/* 
------------------------------------------ Images ----------------------------------

--> There are two types of images in HTML.

    1. Foreground Images : img is used to insert/embed foreground images in our 
    document.
    2. Background Images : background attribute on body or CSS background properties
    are used to insert/embed background images in our document.

--> What is img element ? 

    The img element is used to add/insert/embed foreground image in our HTML document. 

     <img
      src=""
      alt=""
      height=""
      width=""
      title=""
      loading=""
    />

    src : it specifies the location/path of the image.It stands for source. 

    alt : it stands for alternate text.It displays the alt text when the image fails
    to load.It is very important for SEO , assistive technologies and accessibility.
    Always give alt attribute even if it's empty.
    Browsers , screen readers and assistive technologies read this alt text.
    alt describes the image.Always give meaningful and descriptive alternate text. 

    Note : It's more good to use alt like alt = "" than not using it.

    title : it is a global attribute that provides additional information about the 
    html element when we hover on it.It displays a tooltip.
    The title attribute is not accessible to the assistive technologies.

    height : it sets the height of the image. 
    width : it sets the width of the image. 

    loading = "eager/loading"
    it is used for lazy loading.

--> Note : img is inline-block element because it's inline and we can give height 
    and width to it as well.

--> Note : Always keep your images either in img or images folder.Also keep this
    img or images folder inside the assets folder.

--> Cummulative Layout Shift relation with img element ? 

    Cummulative Layout Shift : It means the movement/shifting of the content of the 
    web page (html) when CSS loads or during interactivity.

    Note : In 1990's width and height in img were required but after that they were 
    not required but now they are making a comeback.Now it is important to use the 
    width and height attribute of the image tag to prevent the cummulative layout
    shift.

--> We set the height and width of the image by using attributes so that it tells the 
    browser to reserve at least this space.This prevents the shifting of the content 
    on the web page when CSS loads and hence prevents the cummulative layout shift.
    The width and height of the image tag is now recommended by the google developers
    to prevent the commulative layout shift.

    Always use height and width attribute in img element to prevent the
    commulative layout shift.

--> How to create image links ? 
    
    First Way : In this when we will click on the image than it will act as the hyperlink
    and it will redirect to the destination.

    <a href="https://www.google.com" target="_blank">
      <img
        src="./images/html.png"
        alt="html course"
        width="250"
        height="150"
        title="html course"
        loading="lazy"
      />
    </a>

--> Note : For commerical projects we can use free images by using the below websites.
   
    Pexels : it provides free images as well as free videos.
    Pixabay
    Unsplash 
    source.unsplash.com to get the random images online.

--> How to make images responsive ? 

    1. Set the height to auto and width as relative unit (generally %).
    2. Set max-width/min-width of the image and set width to 100%. 
    max-width : 600px ; width : 100% ; 
    Use max-width and width together.
    It will make the image/content responsive.

    3. If you set height of img using attribute than width will adjust automatically 
    and vice versa.

--> Note : Always use avif and webp format of images as they are smaller in size.

--> Note : set the height and width of the img using img attributes as well as with
    CSS.

--> What is Lazy Loading ? 
    It is a concept/technique which is used to optimize the loading speed of web 
    application.Instead of loading all the images at once , browser loads the images
    one by one.When the user scroll and when the image is just going/about to appear 
    in the viewport than the browser makes the request for the image.
    When the user is just going to view the image than browser loads the image.
    Browser don't loads the images that are present below the viewport.
    When the user is just going to view the image than browser loads the image. 

    loading = "lazy" 
    We use the loading attribute to implement lazy loading in our application.

    By default it's value is eager. 

    Chrome displays the lazy loading image much earlier than firefox.
    Google chrome loads the image much earlier.
    Firefox loads the image when the user is very close to the image.

--> What is fold ? 
    Viewport or visible screen or visible part of the web page is called as fold.
    The part that is present below the viewport is called as below the fold.

--> We can give % in height and width attribute of image tag as well.

--> Aspect-ratio : it is nothing but the height and width of an element or image.

--> What is Map And Area ? 
    Map and Area elements are used to create a hyperlink on a specific part/area
    of an image.
    Map and area are used to map a part of an image with the hyperlink.

    Anchor tag k andar kuch bhi likhoge vo clickable hoga.

    The coords attribute contains x , y , width and height

    The 0,0 starts with top left of the image.

    cords = "20,100,500,300"
    It means area will start from top left k edge se 20px right m and 100px bottom.500 
    is the width and 300 is the height.

    x = 0 and y = 0 means top left edge of the image.

    coords = x,y,width,height

    When we hover on an area widht*height from a distance of x and y than a cursor 
    will be shown.

    shape can be rect/poly/circle etc.

    <img
     src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg"
     alt="landscape image"
     height="400"
     width="550"
     title="landscape image"
     loading="lazy"
     usemap="#landscape-img"
    />

    <map name="landscape-img">
     <area
       shape="rect"
       coords="250,400,0,0"
       title="landscape img"
       href="https://www.pexels.com"
       target="_blank"
     />
    </map>

    First Step : Create the img tag and map tag.Give name to the map tag.Connect 
    the map tag with the img tag using the usemap attribute of img tag.

    Second Step : Create the area tag and give the shape and coords jispe click krne
    pr redirect hoga.

    Note : The main task of map tag is to link the imgage tag with the map tag.

--> Figure Element With Images ? 
    Figure is itself is an individual entity.
    It is nothing but a figure.It is a semantic element.
    figure is a block element and it's meaning that it's just a figure.
    We can use figure with blockqute or images or code.
  
    We use figure to display image because it is more good way to display something.
    image is a figure only so we use figure element.

    We can put figcaption at the start or bottom inside the figure element. 
    figcaption tells the browser and assistive technologies that the content
    inside figure is related to the image.

    When we search an image online than browser parse and matches the search 
    with the figcaption.
    The figcaption is also read by browser to match with the search results of an
    image.

    figcaption : it is the caption of the image or it provides information about the
    content present inside the figure element.

    figcaption and alt attribute are not identical but the figcaption describes the 
    image or it is the description of the image.It also describes about the content
    present in figure that is not image like code or blockquote.
    figcaption tells that it is related to the image.

    Note : We can use figure with figcatpion and with images.If you don't want to 
    show figcaption than set it's position to relative and set it's left as -30000px.
    The figcaption is still accessible to the assistive technologies , screen reader
    and browser.
    If we do display : none ; than it will completely removed from the DOM and is 
    not accessbile to anyone.

     <figure>
    <img src = "img.jpg" alt = "image" height = "100" width = "100" loading = "lazy"
    title = "It's normal image">
    <figcaption>
      This is a normal image 
    </figcaption>
    </figure>

    Note : We can use figure with image as well as with other content as well.

    <figure>
     <figcaption>An example of HTML5 code </figcaption>
     <p>
      <code>
      &lt;p&gt; Hello World &lt;/p&gt;
      </code>
     </p>
    </figure>

--> Note : In html5 it is not required to use / with the self closing but in react it is 
    required to use the / with the self closing tag.

--> In some images it is not required to define alt attribute.So in that case write 
    like this alt = ""
    Always use alt attribute with the img tag even if you are asssigning alt any 
    value.

--> What is Picture ? 
    It is used - 

    1. to provide different images at different resolutions/viewports. 
    2. to provide same/different image with different formats to provide the image 
    support on multiple devices (even old devices).
    3. to provide same/different image with different resolutions (quality).
    4. it is used to make images responsive by using sizes attribute.

    It acts like a switch.
    img tag to rhega hi but we will use source tag to display different version of image
    for different displays.

    Picture is used with source and img element.

    srcset : it specifies the location of the image.
    it specifies the location or path where the image is present.

    type : it specifies the format of the image. 

    sizes : it is used to set the max-width.
    it is used to make images responsive.

    media : it specifies the resolution at which the image should get displayed.

    (max-width : 600px) : it means display this image , when the width of your 
    device is less than equal to 600px. 

    (max-width : 300px) : it means display this image , when the width of your 
    device is greater than equal to 300px.

     <picture>
      <source
        srcset="
          https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg
        "
        media="(max-width : 457px)"
        type="image/jpeg"
      />
      
      <img
        src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg"
        alt="clouds"
        title="clouds"
        height="100%"
        width="500"
        loading="lazy"
      />
    </picture>

--> <picture>
      <source srcset = "/nature.webp" type = "image/webp">
      <source srcset = "/nature.png" type = "image/png">
      <img src = "/nature.jpg" alt = ""/>
    </picture>

    Here agar device .webp support nhi krta than .png wali render hogi and .png 
    extension support nhi krta than .jpg wali render hogi image.
    It will start from top to bottom and will search ki konsi image device support kr
    skta h.

    Some devices don't support some format of images.We can provide different
    versions of the same image via picture tag so that the image can render on 
    such devices.

--> Why we need picture with source and img ? 
    Different devices supports different types of image formats.We want to ensure
    that our image should render on all the devices.To provide the support of 
    images on different devices we use picture with source and img element. 

--> In responsive design , with different width and height we can render different 
    images.

    <img
        src="images/html.png"
        alt="Responsive Image"
        srcset="
            images/html-400.jpg   400w,
            images/html-600.jpg   600w,
            images/html-800.jpg   800w,
            images/html-1000.jpg 1000w
        "
        sizes="(max-width: 600px) 400px,
                    (max-width: 800px) 600px,
                    (max-width: 1100px) 1000px,
                    1200px"
    />

--> Example of picture element with source and img element.We are displaying different
    images on different viewports.

    <picture>
        <source media = "(max-width : 600px)" srcset = "https://plus.unsplash.com/premium_photo-1675198764473-30434364c8b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" type = "image/jpg"/>
        <source media = "(max-width : 900px)" srcset = "https://plus.unsplash.com/premium_photo-1675198764235-2dc2b37146c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" type = "image/jpg"/>
        <source media = "(max-width : 1200px)" srcset = "https://plus.unsplash.com/premium_photo-1675198764368-069966a50951?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" type = "image/jpg"/>
        <img src = "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        alt = "mountains and nature"
        loading = "lazy"
        height = "auto"
        width = "70%"
        title = "mountains and nature"
        />
    </picture>

*/
