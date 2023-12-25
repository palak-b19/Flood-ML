# FloodML

FloodML is a web application that leverages **Machine Learning** to predict floods based on weather and historical data.

## Overview

### Getting Started
- Clone the project
- Install dependencies
- Activate virtual environment
- Run `pip install -r requirements.txt`
- Run `python app.py`

### Inspiration
Floods, exacerbated by climate change, pose a growing threat worldwide. To address this, we created FloodML—an interactive web app for predicting and visualizing floods.

### Core Components

#### 1. Plots
- Flood Prediction Plot (Red dots for predicted flood locations)
- Precipitation Plot (Bubbles indicate precipitation volume)
- Damage Analysis Plot (Bubble size represents estimated monetary damage)

#### 2. Heatmaps
- Damage Analysis Heatmap (Colors indicate predicted monetary damage)
- Precipitation Heatmap (Dark red areas signify higher precipitation)
- Flood Prediction Heatmap (Darker red spots indicate likely flood locations)

#### 3. Satellite Images
- Displays precipitation volume over Indian cities
- Uses NASA's Global Precipitation Measurement Project data

#### 4. Predict Page
- Real-time weather forecast and flood prediction for any city
- Includes temperature, humidity, cloud cover, wind speed, and precipitation

### Development Process

#### The Dataset
- Scraped [floodlist.com](http://floodlist.com/tag/india) using Beautiful Soup 4
- Utilized Visual Crossing weather API for historic weather data
- Applied data augmentation techniques for model diversity

#### ML Model
- Built on the sci-kit learn library
- Explored various models; Random Forest Classifier achieved 98.71% accuracy
- Saved model using pickle

#### Data Visualization
- Integrated major Indian cities' data with weather factors
- Utilized Plotly chart studio for diverse map visualizations

#### Front-end and Hosting
- Developed with Flask framework
- Hosted on Heroku

### Challenges
- Limited data availability for floods in India
- Plotly integration complexities
- Git merge conflicts due to encoding and version disparities

### Achievements
- Created a robust dataset for accurate flood predictions
- Implemented a machine learning model with over 98% accuracy
- Successfully integrated data augmentation and visualization techniques

### Learnings
- Enhanced skills in web scraping, data mining, and Plotly
- Expanded proficiency in machine learning models

### Future Plans
- Expand coverage to cities worldwide
- Implement image classification for flood detection using satellite data

FloodML aims to aid people and governments in flood preparation, potentially saving lives and livelihoods. Visit [FloodML](https://floodml.herokuapp.com/) to explore the tool.
