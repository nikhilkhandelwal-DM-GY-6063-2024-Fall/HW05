# HW05

**This is a submission of Homework for Week 5 Part A and Part B.**

This repository contains a p5.js sketch that generates 2 sketches:
- Sketch 1 creates an animated analog clock displays the current hours, minutes, and seconds with rotating hands.
- Sketch 2 is an interactive animation inspired by Yoko Ono's Grapefruit: A Book of Instructions and Drawings. 

**PART A**

This sketch creates an animated analog clock. The clock displays the current hours, minutes, and seconds with rotating hands. The clock is centered on the canvas, and it dynamically adjusts to the size of the window. The rotate() function is used to rotate the clock by -90 degrees, so it starts at the traditional 12 o'clock position.

***Design Process***
1. Clock Layout
The clock consists of a central dial with three hands representing seconds, minutes, and hours. The dial is styled with a basic ellipse, and small lines are drawn to represent the hour markings around the circumference.

2. Time Calculation
- The current time is obtained using the hour(), minute(), and second() functions provided by p5.js. These values are mapped to a range of 0 to 360 degrees using the map() function to calculate the angles for rotating the hands.
- The rotation for the clock is centered using the translate() function to move the origin of the canvas to the center. The clock is rotated by -90 degrees so that the hands start from the top (12 o'clock position).

3. Drawing the Hands
The second, minute, and hour hands are drawn using the line() function, with their lengths scaled appropriately. The angles for the hands are calculated using the map() function, and they update every frame to reflect the current time.

**PART B**

Cloud Dream Animation

This project is an interactive animation inspired by Yoko Ono's Grapefruit: A Book of Instructions and Drawings. Specifically, it is based on the instruction:

"Whisper your dream to a cloud."

In this animation, a cloud is positioned at the center of the canvas. Each time the user clicks, a star is generated, which represents a "dream" being whispered to the cloud. The star moves toward the cloud and disappears when it reaches the cloud, symbolizing the dream being absorbed.

***Design Process***
1. Conceptual Inspiration
The concept is derived from Yoko Ono’s minimalist and poetic instruction to whisper a dream to a cloud. The cloud acts as a receptive entity that takes in dream (represented by stars), which then disappear into the cloud.

2. Visual Design
- Cloud: The cloud consists of three ellipses, arranged to create a fluffy cloud shape. The cloud remains fixed in the center of the canvas.
- Dreams (Stars): A star is generated wherever the user clicks. Each star has a random size and color. The randomness symbolizes the uniqueness of each dream.

3. Interactivity
The interactive element comes from the user's mouse clicks. Upon each click:
- A new star is created at the mouse position.
- The star is animated to move toward the center of the cloud.
- Once the star reaches the cloud, it disappears, symbolizing the completion of the dream.

4. Animation Process
The movement of the stars is calculated using basic trigonometry (atan2, cos, sin) to move the star smoothly along the line toward the center of the cloud. The star moves at a constant speed, and once it reaches the cloud's center, it disappears by reducing its size to zero.


Link:  
[Homework 5 Link](https://6063b.github.io/homework/05/)
