# Syncflix

HackNYU 2025

## Project Outline

### Inspiration
The idea for this project is rooted at the realization that movie (or show) recommendations often feel generic and lack personalization. While streaming platforms have their own recommendation systems, they rarely adapt the way movies are visually presented to enhance user engagement.

### What it does
Hence, we wanted to explore dynamic content personalization. Specifically, our project customizes movie posters based on each user’s watch history. Although we replicated Netflix as an example to build our proof of concept, we believe that this project can be extended to other streaming platforms and be further enhanced by incorporating other indicators of user preference (such as likes, their curated list, etc.).

### How we built it
Our project was built using the MERN (MongoDB, Express, React, Node.js) stack for fast development and seamless integration. We used MongoDB atlas to store movie data and user watch history, which are incorporated into dynamically customizing posters when serving movie data. Material UI was used to enhance the UI with a modern, responsive design.

### Challenges we ran into
While we initially aimed to use generative AI for movie thumbnails, copyright restrictions limited its use. However, this constraint would not apply when our feature is integrated into real streaming services, which can acquire the necessary rights.

### Accomplishments that we're proud of
Despite being a two-member team, we successfully built a functional full-stack MVP in just one day.

### What we learned
Working on Syncflix was a valuable experience in exploring recommendation algorithms, which play a crucial role in modern digital platforms. We gained deeper insights into how personalization can enhance user engagement and how dynamic content adaptation can improve the overall streaming experience. Additionally, we learned to balance technical feasibility with real-world constraints, such as copyright restrictions, while designing an innovative solution.

### What's next for Syncflix
In the age of AI, anything and everything can be more personalized. We envision a future where everything in streaming services is dynamically generated. AI can create movie thumbnails featuring your favorite actors/actresses or select scenes tailored to your preferences. This level of personalization will not only enhance user experience but also drive greater engagement and revenue for streaming platforms.

## Demo

Main Page
![main](assets/main.png)

Before watch history is considered
![before](assets/before.png)

After
![after](assets/after.png)