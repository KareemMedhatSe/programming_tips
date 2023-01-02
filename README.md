# programming_tips
### Description
A social media platform for publishing posts about programming tips, each user can publish posts about programming languages on tips to learn this programming language, user can write specific tags in this post so others can reach this post easily by searching for these tags, users can like posts of others, the platform is fully authorized so that no one can edit or delete others’ posts, only the user who publish this post can edit or delete this post which means users have to sign up and login and they can log in by their Gmail (google authorization).    
### Technologies used        

> Client-side 

- React JS
- Redux (for managing and centralizing application state)
- React-router-dom (To handle routing)
- Axios (for making api calls)
- Material UI & CSS Module (for User Interface)
- React-google-login (To enable authentication using Google)

> Server-side

- Express
- Mongoose
- JWT (For authentication)
- bcryptjs (for data encryption)

> DataBase
MongoDB (MongoDB Atlas)

### Screenshots


**This is the first screen in case you are not logged in you will be able to see the posts of others but you can't like them as the like button is disabled and instead of showing the form by which you can publish a post the application shows you that you can't publish a programming tip without signing in**
![Screenshot_5](https://user-images.githubusercontent.com/117598008/210258726-6c007d2e-1793-4d45-a169-4296b784cccc.png)
 **loading screen will appear in case there is no available posts **
![Screenshot_10](https://user-images.githubusercontent.com/117598008/210258876-aa66514f-bff8-4d73-8d14-3692e47191ee.png)
**This screenshot after logging in and publishing a post after filling the form**

![Screenshot_3](https://user-images.githubusercontent.com/117598008/210258962-36dca25a-f9a6-4fce-bea3-9a603bba8d06.png)
**trying to edit your post by clicking on the three dots above your post**
![Screenshot_4](https://user-images.githubusercontent.com/117598008/210259078-9f4416c6-8570-42a3-8a9c-e1a8d79ebf01.png)
