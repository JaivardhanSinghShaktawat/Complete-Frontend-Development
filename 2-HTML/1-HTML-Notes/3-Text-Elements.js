/* 
----------------------------------- Text Elements -----------------------------------

--> What are Text Elements ? 
    Text elements are used to arrange and format the text content.

--> Heading : it is used to give heading to some section or content like newspaper
    heading.

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

    There must be a single h1 per web page.It's a good practice.
    
--> p : it stands for paragraph text.It is used to represent some text content.

    Don't nest block level inside p element.

    <p>it contains text content</p>

--> pre : it stands for preformatted.It displays the text as it is without any
    formatting.
    It displays the text with spaces and line breaks.

    <pre>
        it contains 
          preformatted 
            text. 
    it avoid white space collapsing
    </pre>

--> center : it align the text horizontally center.It is deprecated and is not 
    used anymore.

    <center>It is horizontally center</center>

--> address : it is used to provide information about the web page or author.
    it is used with pre element. 
    it displays address in monospace fonts.

    <pre>
        <address>
            Country Name, 
            City Name 
        </address>
     </pre>

--> sup : it stands for superscript.It is used to display something in power. 

    <p><var>e</var>=<var>m</var><var>c</var><sup>2</sup></p>

--> sub : it stands for subscript.It is used to display something in base. 

    <p>H<sub>2</sub>O</p>

--> kbd : it stands for keyboard input.It expects keyboard input. 

    <p style="background-color: #eee; padding-block: 10px">
      Press <kbd>Ctrl + S</kbd> to save the file
    </p>

--> code : it is used to display a computer program in monospace fonts.
    It is generally used with pre element.

    <pre style="background-color: #eee">
        <code>
            #include&lt;iostream&gt; 
            using namespace std ; 

            int main(){
                cout &lt;&lt; &quot;hello world&quot; &lt;&lt; endl ; 
                return 0 ; 
            }
        </code>
    </pre>

--> samp : it is used to display the output of a computer program. 

    <samp>Output : Syntax error on line number 18</samp>

--> small : it displays the text in small font size.  

    <small>It contains text in small font size</small>

--> var : it is used to display the variable in an expression or equation.

    <p>Area Of A Square = <var>s</var>&times;<var>s</var></p>

--> hr : it stands for horizontal rule.It creates a horizontal rule/line. 
    It is used to separate/divide the content/sections.

    <hr>

--> br : it stands for break line.It is used to break the line or create a new line.

    <br>

--> abbr : it stands for abbreviation.It is used to display some abbreviation or 
    short form or acronym. 

    <p>
      <abbr title="HyperText Markup Language">HTML</abbr> stands for
      <dfn>HyperText Markup Language</dfn>
    </p>

--> dfn : it stands for definition.It is used to represent definition of a term.

--> hgroup : it is used to combine any heading with one or more paragraphs.

    <hgroup>
      <h2>It is sub heading</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iure
        molestias!
      </p>
    </hgroup>

--> mark : it is used to represent the highlighted text in yellow color. 

--> ins : it stands for inserted text.It is used to insert something in place of 
    del element.

--> del : it is used to represent the deleted text.
    For reference the deleted text is put by using del element.

    <p>
      HTML is not
      <del
        style="color: #f00"
        cite="wrong information"
        datetime="2025-08-20 16:20"
        >Hello World</del
      >
      but it is
      <ins style="color: #0f0"><dfn>HyperText Markup Language</dfn></ins>
    </p>

--> strong : it is used to give strong importance/significance to a word. 

    <p>It is very <strong>important</strong></p>

--> em : it is used to give stressed emphasis to a word. 

    <p>It has <em>stressed emphais</em></p>

--> b : it makes the text as bold.It stands for bold.

    <p>It is <b>bold</b></p>

--> i : it makes the text as italic.It stands for idiomatic element and not italic
    element.

    <p>It is <i>element</i></p>

--> Note : Try to avoid the use of b and i element.Use either CSS to make the text 
    as italic or bold or use strong and em. 

--> u : it is used to underline the text. 

    <u>It is <u>underline text</u></u>

--> s : It stands for strikethrough.It creates a line through the text.
    It specifies that the information is not correct.

    <p>It is <s>wrong information</s></p>

--> bdo : it stands for bi-directional override.It is used to change the direction of
    the text. 

    <p><bdo dir="rtl">coding is fun</bdo></p>

--> bdi : it stands for bi-directional isolate.It is used to change the direction 
    of the text based on it's nearest text.

    <p><bdi dir="rtl">coding is fun</bdi></p>

--> time : it is used to represent the time , date , year , month. 

    <p>Today is <time datetime="2025-08-20">20th August , 2025</time></p>

--> ruby : it is used to display the pronounciation , translation and annotation of 
    eastern asian characters. 

    <ruby>
        “हैलो वर्ल्ड”
        <rp>(</rp>
        <rt>Hello World</rt>
        <rp>)</rp>
    </ruby>

--> noscript : it displays the text when the JavaScript of your browser is disabled
    or your browser don't support JavaScript. 

    <noscript>JavaScript in your browser is either disabled or your browser does'nt support JavaScript</noscript>

--> q : it is used to dispaly the short quoted text.It is inline level element.
    It displays the text in double quotes.  

    <p><q>Never Give Up</q></p>

--> blockquote : it display the long quoted text.It is block level element.It 
    displays the text without quotes but we can use html entity.

    <blockquote>
      &quot;Never Give Up And Always Work Hard&quot;
      <br />
      <cite>- Someone</cite>
    </blockquote>

--> mark : it is used to represent highlighted text in yellow color.

    <p>It is <mark>highlighted text</mark></p>

--> wbr : it stands for word break.It is used to break the word.
    When the width of the web page will decrease than the word will break at a 
    specified position.

     <p>HTML stands for<wbr>Hyper</wbr>Text Markup Language</p>

*/
