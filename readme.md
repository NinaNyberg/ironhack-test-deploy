# meower

## view

home display a list of meows 🤷‍♂️
sign up-✔
sign in
meow creation page -display form whivh aööows user to submit new meow
single meow page - allows to read
meow edit - allows creator to delete or edit
profile allows to view single users piblications
profile edit

## route handlers

get "/" home page
get "/authentication/sign-up"
get "/authentication/sign-in"
post "/authentication/sign-up"
post "/authentication/sign-in"
post "/authentication/sign-out"
get "/meow/create"
post "/meow/create"
post "/meow/:id" loads meow from database, renders single meow page
get "/meow/:id/edit" loads meow from database, renders meow edit page
post"/meow/:id/edit" handles edit form submission
post "/meow/:id/delete"

get "/profile/:id" load user with params.id from collection, renders profile page
get "/profile/:id/edit" load the user and edit profile edit view
post "/profile/:id/edit" handles profile edit form submission

## Models

User
name
email
passwordHashAndSalt
all strings and required

profile picture String

Publication
message string required maxlength 300
picture string
creator: ObjestId of a document in the users collection, required
createdAt: Date
updateAt: Date (add timestamps option to the publicationSchema)

## wishlist

add date formatting helper to hbs
like meow (like model). Most liked meows would be featured
sentiment analysis for meows. If meow is negative, stop publication
share button
required users to confirm email before publishing
