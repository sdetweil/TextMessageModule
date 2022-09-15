example module to setup and accept http POST requests 
with a json object 

of 
```json
{
	"content": "?????"
	"style": "?????"
}
```
content will be displayed where the module is configured
and style is the set of css styles (font-size:small; color:red; )...

git clone to the MagicMirror/modules folder

add this part to the config.js
```javascript
      {
      	module: "TextMessageModule",
      	position: "middle_center",
      }
```
      there are no configurabe options

a sample bash script is provided to encapulate all the work needed to use curl to send a json body
using the 2 parameters

./sendmessge  message_text style_string
for example
./sendmessage "hello bob"  "font-size:large; color:yellow"

the web server used by the module will return 'ok' in response 

there is no error checking 
