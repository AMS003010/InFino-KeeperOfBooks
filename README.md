# ᛇᚾᚠᛇᚾᛟ - KeeperOfBooks 📚
Library Management System incorporating a Microservice Architecture with Docker, KinD and Nginx Ingress. It consists of three servers running three different services like Adding, Borrowing, Returning books. An Express (JavaScript) server runs the Book adding service. A Flask (Python) server runs the Book Returning and Borrowing service. The Frontend made with the React Framework makes API calls to  the respective backend server to provide the respective service.

## Future Plans 🕗
- Implementing a Gin 🍸 server (Golang) to handle the Admin service.
- Implementing a Rocket 🚀 server (Rust) to handle the Delete Book service. Planning to implement data streaming and CI/CD for some unplanned futures features as well.
- Adding a nginx proxy for the client
