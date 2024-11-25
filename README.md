# 🚀 HubSpot Integration I: Foundations Practicum < Tomas Sojo >

Welcome to the repository for the HubSpot Integration I: Foundations practicum. This project integrates with the HubSpot API and demonstrates how to manage custom objects, interact with the API, and handle pagination for large datasets.

## 👨‍💻 Skills & Tools Used

![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![Pug](https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black)
![Terminal](https://img.shields.io/badge/windows%20terminal-4D4D4D?style=for-the-badge&logo=windows%20terminal&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Github Actions](https://img.shields.io/badge/Github%20Actions-282a2e?style=for-the-badge&logo=githubactions&logoColor=367cfe)

## 🎯 The Task

The goal was to create a Node application that interacts with HubSpot API endpoints, allowing you to manage and manipulate custom object data. The project also demonstrates how to handle pagination when dealing with large datasets from the HubSpot API.

You can find the complete instructions for the practicum [here](https://academy.hubspot.com/courses/integrating-with-hubspot-foundations).

## 📝 My Experience

During the project, I set up a HubSpot test account and configured the necessary environment variables, including the HubSpot app access token. Although I initially considered using Axios to handle API requests and pagination, I ultimately decided to proceed with alternative methods based on the specific needs of the project.

Instead of using Axios, I focused on direct API interactions, ensuring the app could handle the data flow and render the appropriate content using Express and Pug.

## 📈 The Learning Curve

This project was a great opportunity to enhance my skills in full-stack development, particularly in:

- **Node.js** and **Express.js** for backend development.
- **Pug** templating for rendering dynamic views.
- **Handling API pagination** for efficiently working with large HubSpot datasets (without Axios).

## 🏆 The Result

By the end of the project, I successfully created a working application with the following features:

- **Routes**: 
  - **Homepage**: Displays CRM data.
  - **Update**: A form to create or update custom objects in HubSpot.

- **Handling Pagination**: Efficiently handled pagination for fetching large amounts of data from the HubSpot CRM API without using Axios, ensuring that the application can scale with more records.

- **Testing**: I was able to run `node index.js` to launch the app and confirm that it worked by accessing it locally at `http://localhost:3000`. I could create new CRM records via the `/update` route and view updates on the homepage in real-time.

## 💭 Final Thoughts

This project was a great experience in integrating with HubSpot’s API and implementing pagination techniques. It also gave me hands-on experience with full-stack development using Node, Express, and Pug. Even though I explored Axios for handling API requests and pagination, I opted for a different approach that better suited the project's requirements. 

I'm excited about the potential applications of these skills in future projects.

## 💻 Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your


   ![Show](public/imagens/Captura%20de%20Tela%202024-11-25%20às%2016.57.30.png)

    ![Show](public/imagens/Captura%20de%20Tela%202024-11-25%20às%2016.57.36.png)

     ![Show](public/imagens/Captura%20de%20Tela%202024-11-25%20às%2017.10.08.png)

    ![Show](public/imagens/Captura%20de%20Tela%202024-11-25%20às%2017.23.06.png)




**Put your HubSpot developer test account custom objects URL link here:** (https://app.hubspot.com/contacts/48279608/objects/2-37313391/views/all/list)


