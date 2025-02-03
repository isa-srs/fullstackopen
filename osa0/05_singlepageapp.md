```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    
    server-->>browser: HTML document

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css

    server-->>browser: main.css

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js

    server-->>browser: spa.js

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json

    server-->>browser: content data