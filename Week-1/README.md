The browser is a medium of communication between a user and a server. It sends the user's request to the server and
displays the returned response.

After entering the URI and clicking "Go", the browser looks up the URI in the Domain Name Server (DNS) and finds the
IP address associated with it. Using that IP, it sends a request to the server. The server after receiving the request,
returns an appropriate response. The networking layer handles the request and response part.

After receiving the response in the browser, the rendering engine (a software used for rendering text or image on
screen) receives the response from the networking layer in 8kB chunks and parses the HTML(along with any style data) to
construct a DOM tree first and then convert that to a render tree, which will eventually be painted on the screen.

Going back to the parsing part for a bit, it is the process of translating a document to a structure that code can use.
The result of parsing is usually a tree of nodes that represent the structure of the document. There are mainly two
types of parsers, HTML and CSS. Both of these parsers parse the HTML and style data respectively to create DOM tree
and style rules/tree which will be used in the creation of the render tree later on.

Coming to the execution of scripts attached to the HTML document, when the parser reaches the scripts attached to the
HTML, they are executed synchronously.

After the render tree has been constructed, the rendering engine decides where the nodes of the render tree will go
on the screen through a layout process, which is essentially giving nodes their exact coordinates on the screen. After
this, all nodes are traversed and then painted on the screen

<br><br>

![Render Engine Flow](./render_engine_flow.jpg)

<center>Render Engine Flow</center>
