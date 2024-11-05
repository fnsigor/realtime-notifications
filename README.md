<h1>Realtime Notifications</h1>
<p>Small project made to pratice how to implement notifications sent by the server in realtime and consumed by the frontend, using SSE(Server Sent Events) and node Events API.
</p>
</br>
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events">
...With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page.
</blockquote>
</br>
<h2>Starting the server</h2>


Enter the directory and type in terminal:
```bash
npm install 
or
yarn install
```

After download package, type in terminal
```
npm start
```

So, open the ```index.html``` in any broswer.
Now, make some requests to 
```http://localhost:3000/pedidos/cancelamento``` or ```http://localhost:3000/pedidos/novo```
and see in the ```index.html``` the magic happens!

</br>

<p>References:</p>

* <a target="_blank" href="https://medium.com/@igorbitencourtsilveira/um-jeito-simples-de-notificar-o-frontend-atrav%C3%A9s-de-node-js-sse-server-sent-events-271b87be67c6">"Um jeito simples de notificar o Frontend através de Node.js + SSE(Server Sent Events)"
</a>

* <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events">"Server-sent events"
</a>
