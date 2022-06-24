When we type the URL in the browser 
The browser looks up for the IP address for the domain hosting the web server.
After it gets the IP address through a DNS lookup it establishes a TCP connection over https (if the site is accessed using https) to the web server.
Then the browser requests the server with http verb GET. The server sends the response with a status code 200 if the requested path exists in the server. The response contains the page contents (html, css etc).
Now the browser renders the following contents accordingly.
A) What is the main functionality of the browser?
=> The main functionality of the browser is to request the web content from the server (which can be accessed by the URL) and render the contents on the browser UI based on the response from the server.
B) High level components of a browser?
=>  
User Interface - It includes back/forward button, address bar, extension, bookmark etc except the window that displays the page.
Browser Engine - It acts as an interface between the UI and Rendering Engine. It queries and manipulates the Rendering Engine based on the input from the UI.
Rendering Engine - It helps in rendering the contents by parsing through the response sent from the server.
Networking - It handles all the network calls(API calls) to the server.
Javascript Interpreter - It helps in executing the javascript code in the response from the server and sends the response to the rendering engine.
UI Backend - Used for drawing basic widgets using the underlying OS interfaces.
Data Persistence - It includes the storage part for the browser which is used to store information locally(it stores in the local computer drive where the browser is installed)






