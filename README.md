# Deep Thoughts API

## Description
This application currently consists of an API designed for a social media style web application. The application has the back-end capability to create user accounts and add posts called "thoughts" to users. Users have a friend list and there are routes designed to add and delete "friends" from a User's object. Further, "reactions" can be added to and deleted from "thought" posts.

## Installation
Use the Node Package Manager to install the Deep Thoughts API
`npm install`

## Usage
Insomnia Core can be used to explore and test routes.

- `localhost:3001/api/users`
  * Get all users
  * POST to create a user.
 
- `localhost:3001/api/users/:id`
  * Get a single user by id
  * Update a user's information
  * Delete a user
  
- `localhost:3001/api/users/:userId/friends/:friendId`
  * POST a new friend to a user's friend list
  * Delete a friend from a user's friemd list
  
- `localhost:3001/api/thoughts`
  * Get all thoughts
  * POST to create a thought.
 
- `localhost:3001/api/thoughts/:id`
  * Get a single thought by id
  * Update a thoughts's content
  * Delete a thought
  
- `localhost:3001/api/thoughts/:thoughtId/reactions`
  * Create a new reaction attached to a specific thought
  * Delete a reaction from a thought
  
## License
MIT
