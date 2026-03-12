# Encrypted Password Vault

## Overview

Encrypted Password Vault is a backend-driven system that allows users to store credentials for various services.

The application encrypts sensitive information before storing it in a file-based database.

The goal of this challenge is to debug and secure the system.

---

# Tech Stack

Frontend

* HTML
* CSS
* Vanilla JavaScript

Backend

* Node.js
* Express.js

Storage

* JSON file database

Encryption

* Node.js Crypto Module

---

# Project Architecture

Frontend (HTML + JS)

↓

API Requests

↓

Express Routes

↓

Controllers

↓

Services

↓

Encryption Layer

↓

File Storage Utility

↓

JSON Database

---

# Folder Structure

```
frontend/
  index.html
  app.js
  style.css

backend/
  server.js

routes/
  main.js

controllers/
  mainController.js

services/
  mainService.js
  cryptoService.js

utils/
  fileStorage.js
  idGenerator.js

data/
  data.json
```

---

# API Endpoints

Create credential

POST

```
/api/create
```

List credentials

GET

```
/api/list
```

Delete credential

DELETE

```
/api/:id
```

---

# Known Bug Categories

Participants should investigate issues related to:

Encryption

* Incorrect encryption usage
* Weak key management

Data handling

* Duplicate ID generation
* Data corruption risks

Security

* Hardcoded secrets
* Missing validation

Concurrency

* File write conflicts

Architecture

* Poor separation of responsibility

---

# Objectives

Participants must:

• Identify vulnerabilities
• Fix encryption implementation
• Prevent duplicate IDs
• Add validation and error handling
• Secure the API

---

# Expected Improvements

Teams may implement:

* Password hashing
* Secure key storage
* Input validation
* Improved error handling
* Better ID generation
