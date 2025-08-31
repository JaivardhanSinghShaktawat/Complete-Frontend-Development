/* 
--------------------------------- List And Tables ----------------------------------

--> What are Lists ? 
    Lists are used to arrange items.Lists are use to represent list items.

    There are four types of lists

    1. Ordered List
    2. Unordered List
    3. Description List
    4. Nested List

--> 1. Ordered List : It is the list where list items are arragned , structured and 
    organized in a specific order. 

    The start attribute accepts only integer value.
    reversed : it will reverse the list items.
    value : it can be used to set the list position of a list item.

    <ol type="1" start="5" reversed>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
      <li value="4">List Item 4</li>
      <li>List Item 5</li>
    </ol>

    type = "A/a/i/I/1"
    
--> 2. Unordered List : It is the list where list items are not arranged , structured 
    and organized.
    
    <ul type="disc">
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
    <li>List Item 4</li>
    <li>List Item 5</li>
    </ul>
    
    type = "square/disc/circle/none"

--> 3. Description List : It is the list where each list item describe the content of 
    the list items.It is used very rarely.

    <dl>
      <dt>What is Programming?</dt>
      <dd>Programming means to program a computer</dd>
      <dt>HTML stands for ?</dt>
      <dd><dfn>HyperText Markup Language</dfn></dd>
    </dl>

    dl : description/definition list 
    dt : description/definition term
    dd : description/definition details


--> 4. Nested List : It is the list where the list items contains another list as 
    child and so on.

    <ol>
      <li>
        <ul>
          <li>List Item 01</li>
          <li>List Item 02</li>
          <li>List Item 03</li>
          <li>List Item 04</li>
          <li>
            <ol>
              <li>List Item 001</li>
              <li>List Item 002</li>
              <li>List Item 003</li>
              <li>List Item 004</li>
              <li>List Item 005</li>
              <li>List Item 006</li>
            </ol>
          </li>
        </ul>
      </li>
    </ol>

--> Note : The start attribute accepts only the integers values.

--> What are Tables ? 
    Tables are used to store the tabular data.The data that is stored in form of 
    rows and columns or grid.
    Back in the 1990's it was very common to use the tables to arrange the html
    page.
    Tables are used everywhere to store data.   
    It is used in ecommerce and in dashboard and in various places.

    border-collapse : it collapse/merge/combine all the borders into a 
    single border.

    caption : it is used to give the title of the table element.

    colspan : it is used to span or increase the column size. 
    rowspan : it is used to span or increase the row size. 
    The colspan and rowspan attribute is applied to the td html element.

    Note : The colspan = "2" means that the td/th will take up the  2 columns
    space.
    The rowspan = "2" means that the td/th will take two row's space. 
    colspan will take up the number of columns space that we specify.
    rowspan will take up the number of rows space that we specify.

    colgroup : it is used to combine/group/wrap col elements together.
    col : it is used to style a specific column or group of columns.

    <colgroup>
        <col class="first-column" span="1" />
        <col class="second-column" span="1" />
        <col class="third-column" span="1" />
    </colgroup>

    Always put the col element after the caption and before the thead or any body
    content.

    <colgroup>
      <col span = "1" class = "first-column" />
      <col span = "1" class = "second-column" />
      <col span = "2" class = "thirdFourth-column" />
    </colgroup>

    <col class = "first-column" span = "1"/>
    span = "number of columns you want to select to apply styles"
   
    With the help of span attribute we can select no. of columns that we want to style.

    colgroup can also be used to style a specific or group of columns but it is 
    generally used to wrap or group together multiple columns.
    colgroup single can also be used to style a particular column or group of 
    columns.
    But colgroup is generally used to wrap the col elements inside it.

    col : it is used to style a specific or group of columns. 

    <col class = "first-column" span = "1"/>
    span = "number of columns you want to select to apply styles"

    thead : it contains/represents the header part of the table. 
    tbody : it contains/represents the body part of the table. 
    tfoot : it contains/represents the footer part of the table. 
    thead , tbody , tfoot are important for SEO.

    tr : it represents the table row which contains multiple table cell or table 
    data. 
    td : it represents the table data. 
    th stands for table heading

--> Note : We can also generate CSS for the table with the help of chatGPT.

--> Table Example 

    <table>
    <caption>Table Caption</caption>
        <thead>
           <tr>
            <th scope = "col">Name</th>
            <th scope = "col">Id</th>
           </tr>
        </thead>
        <tbody>
           <tr>
             <td>Hello</td>
             <td>Hello World</td>
             </tr>
             <tr>
             <td colspan = "2" >1</td>
             </tr>
             <tr>
              <td rowspan = "2">hello </td>
              <td>hello</td>
             </tr>
             <tr>
              <td>world</td>
             </tr>
        </tbody>
         Here we write footer content.
        <tfoot>
        </tfoot>
    </table>

--> Styling table using CSS

    We can also style the thead.

    thead{
      background-color : #000 ; 
      color : #fff ; 
    }

    table , thead ,tfoot , tbody , th , td , tr , caption{
     border : 1px solid #000 ; 
     border-collapse : collapse ; 
     padding : 0.5rem ; 
    }

    table,
    th, 
    tr,
    caption,  
    td {
     border: 1px solid #eee;
     border-collapse: collapse;
     text-align : center ; 
     padding : 1rem ; 
    }

*/
