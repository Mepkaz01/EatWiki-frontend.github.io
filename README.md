# Sale Point-frontend.github.io by Patricia Huancaya and Waheed Alam

* [Project Frontend URL](https://github.com/Mepkaz01/Project3-backend.github.io)
* [Project Trello](https://trello.com/b/bM7PSAan/c4g-my-sale-point-app)

About our Project: E-Commerce site created to connect users either buying or selling products in the convenience of their own home. It offers a wide range of products saving customers time and money. 

## WireFrame

![WireFrame](https://user-images.githubusercontent.com/82845234/122683358-9b104380-d1cc-11eb-8aab-2f308e1800e0.png)


## User Stories

1. Users should be able to login 
2. Users should be able to signup
3. After signup/login, page should route to profile page
4. Users should be able to edit their information through Profile page
5. Users should be able to access Listings/Items through their Profile page
6. Users should be able to edit their Listings through their Profile page
7. Users should be able to add new listings to their Profile page
8. Users should be able to see other users listings with seller's contact information
9. Link to listings with limited information to attract users to sign up

## Technologies Used

* REACT
* REACT ROUTER DOM
* AXIOS

## Solved problems and Approach taken

* Connecting Users and Items tables in the Profile and Listings Components - used conditional statement
* Add Item form connected to user's profile page so userId and userEmail from Users table is matched with Items table - used conditional statement to passed props
  through ItemAdd Component.
* Price must show decimals and comma for thousandths - changed price data type from interger to numeric and used decimal separator function


## Unsolved Problems
