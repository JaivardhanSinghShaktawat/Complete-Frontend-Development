/* 
-------------------------------- Forms And Inputs ----------------------------------

--> What are Forms ? 
    Forms are used to send the data from the client to the server.
    It's a way to share infromation from the client to the server side. 
    Forms groups all the input elements together.
    It is used to group form elements or form controls.

    action : it specifies the path/location/url where the form data should/will 
    get submitted.
    target : it specifies the path/url/location where form response will get display 
    after form submission.
    method : it specifies the http method to send the data. 
    enctype : it specifies the encryption type to encrypt the data. 

--> What is form control ? 
    Form control are all the input elements present inside the form.

--> What are Input Elements ? 
    It is used to take input from the users.
    Note : input elements are inline-block whereas label element is inline element.

    type : it specifies the type of the input (number , string , email , password etc)

--> How we do client validation on client side using HTML ? 
    By using below attributes and pseudo classes.
    min , max , minlength , maxlength , required , pattern
    :valid and :invalid pseudo class.

--> What to use post or get ? 

    get : it is http method that is used to get data from the server and not to 
    send data from the client.
    We can use get to send the data  from client but it's not good practice.
    
    If we submit the form using get method than the form data is appended to the url
    in query parameter format and it's visible in the url and it's not safe.Always 
    try to submit the form by using the POST method.

    We can send limited amount of data only via get method. 

    post : it is http method that is used to send the data from the client to the 
    server.

    The data is encoded and appended to the body and is not visible to anyone.

    We can send a large amount of data using post method.

--> label : it is the caption of the input elements.
    the label element is used to create a label (title/caption) for the 
    input element.It is very important and helps assistive technologies and screen
    readers and in accessibility as well as in SEO.Always use label with input and 
    form elements. 
    It is used to map the input element with the label element.

    When we click on label element than it focus the input element.

    <label for="idOfInputElements"></label>

    for : it expects id of some input element to label it. 

--> Inputs : The inputs elements are part of the form. 
    Input elements are used to take input from the user. 
    We have different types of inputs. 

    text : it expects text input from the user.  
    number : it expects number input from the user.We can also send data in e. 
    it provides an arrow to increase/decrease the number.

    tel : it expects mobile number from the user.It will open the keypad in mobile
    devices but number type don't and also in type number there is an arrow which is 
    not good.tel also can't take number input in e.
    password : it expects some password input from the user. 

    email : it expects email input from the user.
    Note : If we submit the form without writing anything inside the email
    input box , than the form will submit and the email won't do any validation.

    month : it expects month as input from the user.
    time : it expects time as input from the user.
    datetime : it expects date as well as time from the user. 
    datetime-local : it expects local date and time from the user.
    date : it expects date as input from the user. 
    week : it expects week as input from the user. 
    color : it expects color value from the user.
    url : it expects url input from the user. 

    file : it expect file from the user. 
    <input type = "file" name = "file" accept = "audio/*" multiple>

    checkbox : it is used to select one or multiple options. 
    it allow users to select one/single or multiple values/options from multiple 
    options.
    Note : Always give the name and value attribute to the checkboxes.
    Note : If the checkbox is checked than the "on" value will be send to the
    backend mapped with the name attribute else no value will be send.

    <form>
      <label for = 'subscribe'>Subscribe to the newsletter ? </label>
      <input type = 'checkbox' name = 'subscribe' id = 'subscribe' value="subscribe">
    </form>

    Here if we don't provide the value="subscribe" than subscribe="on" will be send
    to the backend but if we provide value let's say value="subscribe" , than 
    subscribe="subscribe" will be sent to the server.

    radio : it is used to select one option from multiple options.
    it allows user to select one option from multiple options. 
    Note : User can select only one radio button from multiple options only if the
    name attribute value is same in all the radio buttons , otherwise user can 
    select multiple radio buttons.
    name attribute is used to connect multiple radio buttons together.
    It is possible because a single name can hold only a single value.
    Note : Also give the value to radio buttons by using value attribute.
    Note : For each radio button , create a separate label. 
    Note : If you submit the form without specifying the value attribute in 
    type as radio than size="on" will be sent to the server.
    But if you also specify the value of type radio than size="value" will be 
    send to the server.

    <form action = '' method = ''>
      <div>
      <label for = "small">Small</label>
      <input name="size" type = 'radio' value='small' id = "small">
      </div>
      <div>
      <label for = "medium">Medium</label>
      <input name="size" type = 'radio' value='medium' id = "medium">
      </div>
      <div>
      <label for = "large">Large</label>
      <input name="size" type = 'radio' value='large' id = "large">
      </div>
    </form>

    Note : Always use value attribute while using radio and checkboxes.
    
    search : it expects text input from the user.It is used to create a search
    bar.It get's a &times;
    reset : it creates a reset button that resets the form. 
    button : it creates a normal button 
    image : it output an image. 
    hidden : it hides the input element.
    submit : it creates a submit button. 
    range : it expects input from a range.Ex : volume range in youtube or video 
    player etc. 
    Use this range where the precision does'nt matter.
    The range input type can be used in price range in ecommerce shops.
    When we submit the form and select the range ,than a number is sent to the 
    backend.
    We can get the value of the range input via JavaScript.

    <form>
       <label for = 'volume'>Select Volume</label>
       <input type = 'range' min = 0 max = 20 id = "volume" name = "volume"
       step = "4" value = "0">
    </form>

--> We can used oninput or onchange whenever the user enters any value.
    onchange works in almost all the input elements or form elements.

--> textarea : it is used to take multi-line text input/message from the user. 

    rows : height of textarea box. 
    cols : width of textarea box 

    Whatever you put inside textarea will be it's value. 

--> search : it is a block level element that wraps the input with type as search. 
    it can be used for creating filter feature , search bar feature etc.

--> Form And Input Elements Attribute

    type : it specifies the type of the input element. 
    The src attribute is used with type as image.

    name : it is used to identify the input values in the backend.When from data 
    is send from the client to the server than the name and the input values are 
    combined/mapped together in key value pairs and than they are send to the server.
    The name will be used in the backend to get the value that we send from the 
    frontend.

    <input type = 'text' name = 'city'>

    placeholder : it is the text that appears/display on input element until someone 
    starts typing.
    it indicates or gives a hint about the type of the input field.
    The placeholder is not the actual value.It's a dummy text.

    required : it makes the input field as required to fill otherwise form won't
    get submitted.
    It makes the user necessary to fill the input values otherwise the from won't
    get submitted.
    it is must to fill the input element before form submission , otherwise form
    won't get submitted.
    it is used for client side validation.It makes the user necessary to 
    fill the input field before submitting the form.
    We don't need to set required = "true" we can simply write required 
    which is equal to required = "true" only.

    checked : it is used in checkbox.It checks the checkbox by default. 

    selected : it is used in select and options.It selects the specified option
    value by default. 

    multiple : it is used in type="file" to share multiple files as well as 
    select and option to select multiple options.
    It means that we can select multiple values.

    size : it is used in select and option to display number of options as 
    dropdowns.

    min : it specifies the minimum number that user can input. 

    max : it specifies the maximum number that user can input. 

    min and max are used in input with type as number or tel. 
    minlength and maxlength are used in input with type as string/text/password/email 
    etc.
    They counts the no. of characters.

    minlength : it specifies the minimum characters that the user can enter. 

    maxlength : it specifies the maximum characters that the user can enter. 

    pattern : it accepts regex (regular expression) expression which defines some 
    pattern that the data should follow.
    It is used for client side validation. 
    <input type = 'tel' pattern = "[0-9]{3}-[0-9]{3}-[0-9]{3}" required/>

    autofocus : it focuses on the input element on which it is applied.
    it makes the element as focus.We can use this attribute only once
    in the whole form.The cursor will be focus on an input element.

    autocomplete : it suggest some suggestion when we type from the previous 
    input values.It displays some suggestion from the previously entered values.
    Note : autocomplete is not supported on the type password input.
    It accept "on" or "off".

    readonly : it makes the input element as readonly. 
    We cannot interact with the input but the color does'nt change like disabled.
    <input type = "text" value = "Hello World" readonly>

    disabled : it makes the input element as disabled.
    The input color becomes gray and we can't interact with it.
    We can apply disabled attribute to the form elements like fieldset , input 
    elements.

    Generally we don't use readonly and disabled attribute with input elements.
    In readonly , disabled input elements , we can't interact with them.

    It's more good to use readonly instead of using disabled.

    value : it specifies/represent the value of the input/form elements entered
    by the user. 
    We can set the value of the input value in two ways :-

    1. using value attribute. 
    2. by putting the content inside the opening and closing tag.

    step : it is a value by which the value of the input elements will get 
    increase. 
    We can use step in type number , tel , range , meter , progress.

    list : it is used to create a dropdown list using datalist with input element. 

    formaction : it specifies the path/location where the form data will/should get
    submitted. 

    formmethod : it is http method used to send the form from the client to the server.
    Generally , post is used.
    Avoid using get method.

--> Note : All the below buttons are equaivalent. 
    <button type = 'submit' value = "Submit">
    <button type = 'submit'>Submit</button>
    <input type="submit" value="submit">

--> How to submit a form ? 
    To submit the form we need button element.
    If you are using a button inside a form without type attribute than that button 
    will submit the form , this is the default behaviour of button element inside 
    form.By default , button is of type "submit" only.
    If the button is inside the form than it will submit the form.

    Note : Which button can submit the form ?
    
    a. the button must be present inside the form element. 
    b. if the type of the button is submit or no type is defined. 

    If one of the input element is focused and if we hit enter than also the form
    will get submitted.

--> We can hide or stop autocomplete by seting it "off".

--> Note : Always use value attribute in radio , checkboxes , select options and 
    datalist.

--> radio vs checkbox ?
    radio : it allows user to select single from a list of options. 
    We cannot select multiple options if the name is same.
    We can select multiple options if the name is not same.

    checkbox : it allows us to select single or multiple options from a list of 
    options.
    We can select multiple options even if the name are same. 

--> What are buttons and what are ways to create different buttons ? 
    Buttons are used to create different buttons like submit , reset and button
    element.

    1. Using button element. 

    // submit button
    <button type="submit">Submit</button>

    // reset button
    <button type="reset">Reset</button>

    // normal button
    <button type="button">Button</button>

    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button">Click Me</button>

    2. Using input element. 

    <input type="submit" value="Submit">
    <input type="reset" value="Reset">
    <input type="button" value="Click Me">

--> How to create dropdowns usnig forms ? 

    1. By using select and option
    2. By using datalist with options and input elements.

--> progress : it is used to display/represent the progress of a task like 
    downloading , uploading , loading etc. 

    <progress value="50" min="5" max="100" step="2"></progress>

--> meter : it specifies the scaler or fractional value. 
    Ex : displaying RAM usage , battery percentage

    min : it specifies the minimum value
    max : it specifies the maximum value
    low : it is the lowest value when the color of the meter get's changed.
    high : it is the highest value after which the color of the meter get's changed. 

    <meter value="40" low="20" high = "80" min="0" max="100"></meter>

--> select and options and optgroup 
    Select is not a part of the input , instead it is own element.It is used to 
    create a drop down menu with bunch of options. 
    select : it is used to create a dropdown menu. 
    option : it is used to create option for dropdown menu/option.  
    optgroup : it is used to create sub option. 

    <div class="form-group">
          <label for="tech-stack">Select Tech Stack : </label>
          <!-- <select name="tech-stack" id="tech-stack" multiple size="5"> -->
          <select name="tech-stack" id="tech-stack" multiple sizes = "2">
            <option value="Java Full Stack" selected>Java Full Stack</option>
            <optgroup label="JavaScript Full Stack">
              <option value="Backend With NextJs">Backend With NextJs</option>
              <option value="Backend With NestJs">Backend With NestJs</option>
              <option value="Backend With ExpressJs">
                Backend With ExpressJs
              </option>
            </optgroup>

            <option value="Frontend With ReactJs">Frontend With ReactJs</option>
            <option value="Backend With NodeJs">Backend With NodeJs</option>
          </select>
    </div>

    optgroup are the children of select and not option element.
    optgroup stands for option group.
    label attribute on optgroup is used to define the optgroup as sub heading.
    selected : it selects a paritcular option as default value.

--> select Vs datalist 

    1. In datalist we type the value and the list is filtered.
    In select we select the value from the list. 

    2. We can type any value which is not present in the list. 
    We can select value from the available options only. 

    3. Here we use datalist with options and input as type text and list attribute.
    Here we use select , option and optgroup element. 

--> Note : We can also change the form method and action by using formaction and
    formmethod attribute.

--> datalist : it is used to create a dropdown list with input element as type text. 
    We use input type text with list attribute on it and datalist containing 
    option elements.
    The advantage of datalist is that it fitlers the list as we type.

    Syntax : 

    <div class="form-group">
          <label for="select-country">Select Country </label>
          <input
            type="text"
            id="select-country"
            name="select-country"
            list="select-country-list"
          />
          <datalist id="select-country-list">
            <option value="poland">Poland</option>
            <option value="london">London</option>
            <option value="switzerland">Switzerland</option>
            <option value="india">India</option>
          </datalist>
    </div>

--> fieldset : it is used to divide the form into multiple parts/sections.
    legend : it represents the caption/heading of each fieldset or part of the form. 
    When the from becomes too large than we can divide it into multiple parts 
    using fieldset and legend.
    We can change the alignment of the legned by using text-align CSS property.
    fieldset creates a border. 
    No one uses fieldset and legend but we should know about it.

    Instead of using section we can use fieldset and legend element.
    The fieldset wraps the content of the form elements.

    Advantages of fieldset and legend

    1. it is good for screen readers.
    2. we can disable the entire group at once by putting the disabled
    attribute in the fieldset element.
    3. we can divide a large form into smaller parts/sections.

    <fieldset disabled>
      <legend>Form Part 2</legend>
      // form input elements.
    </fieldset>

--> accent-color : it is a CSS property that can be used to change the color of the
    input and form elements.

    Ex : <progress value="50" min="0" max="100" step="10" style="accent-color : #f00"></progress>

--> We can use section or article to put the form tag inside them.
*/
