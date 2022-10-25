# internet-application-assignment-1
A simple Internet Application with a reactive client running in an Internet Browser using Vue.js and a server-side application using at least one API primitive
The objective of this first assignment is to develop a simple Internet Application which demonstrates the following:

* A reactive client running in an Internet Browser using Vue.js – demonstrating some simple knowledge of the V- directives and moustache syntax and interacting with a Server-Side application using at least one Web API primitive
* A Server-side application which exposes at least one API primitive and consumes the services of a 3rd party Web API – you won’t be able to do this from the client side due to ‘same-origin’ restrictions

You are asked to produce an application that inputs the city that someone is planning to go to. Your server-side should use the openweathermap API to get the weather forecast for that city for the next 5 days. You should then display for the user some summary information including:

* Packing: if there is rain anytime over the next 5-days indicate that the user should bring an umbrella
* Indicate whether the user should pack for Cold (temp range -10..+10), Warm (+10-+20) or Hot (20+)
* Give a summary table for the next 5 days showing: Temperature, Wind Speed and Rainfall level
* When you request the weather data for a city, it will return you the Longitude and Latitude of the city. You can then use these in the AIR Pollution API to get the PM2_5 forecast for the next 5 days. If this exceeds 10, then you should advise the user to wear a mask.

## My Website

![image](https://user-images.githubusercontent.com/67791767/197798702-95f60ed3-43b8-4536-a16d-b6b83e21342d.png)

![image](https://user-images.githubusercontent.com/67791767/197798808-2adf34c6-077b-4c66-9f1d-dca460fbba59.png)
