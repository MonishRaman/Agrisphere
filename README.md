# Agrosphere
AgriSphere is an AI-powered platform revolutionizing farming through machine learning, satellite imagery, and climate analytics. It offers personalized crop and technique recommendations, helping farmers boost yield, efficiency, and sustainability with smart, data-driven decisions. 

# AgroSphere

AgroSphere is an advanced agricultural platform that combines AI-powered analytics with farmer-centric features to enhance agricultural productivity and sustainability.

## Key Features

1. *Personalized Farmer Profiling*  
   - Tailored farming strategies based on individual farmer data such as land size, historical yields, and available resources.  

2. *Dynamic Climate Adaptation Planning*  
   - Forecasts weather patterns and multi-season scenarios to provide multi-year crop rotation plans for maximizing sustainability.  

3. *AI-Powered Soil and Crop Health Analyzer*  
   - Analyzes satellite imagery to monitor crop health and soil conditions
   - Provides insights such as early crop stress detection and irrigation scheduling
   - *NEW:* ML-based plant disease detection from uploaded images
   - *NEW:* Intelligent soil analysis from uploaded reports

4. *Collaborative Community Ecosystem*  
   - Connects farmers through a support network to share best practices, seek advice, and form cooperatives.  

5. *Policy and Subsidy Integration*  
   - Real-time updates on government schemes and subsidies related to climate-resilient farming.  

6. *Disease and Yield Analysis*  
   - Image upload for disease detection with severity assessment and treatment recommendations
   - Soil report upload for yield analysis with detailed nutrient insights and optimization suggestions
   - *NEW:* Crop recommendation based on soil parameters

7. *User-Friendly Interface*  
   - Simple navigation through pages like Home, About Us, Contact Us, and Community
   - Interactive dashboard with real-time analysis results

## System Architecture

AgroSphere consists of three main components:

1. *Frontend* - React-based web application
2. *Backend API* - Flask-based API server with ML models
3. *AI Models* - Plant disease detection and soil analysis models

### AI Models

#### Plant Disease Detection Model
- Based on a ResNet50 architecture with transfer learning
- Trained on the Kaggle "New Plant Diseases Dataset"
- Identifies 38 different classes of plant diseases across various crops
- Provides severity assessment and detailed treatment recommendations

#### Soil Analysis Model
- Uses Random Forest or Gradient Boosting algorithms
- Trained on soil nutrient datasets from Kaggle
- Analyzes key soil parameters: pH, nitrogen, phosphorus, potassium, etc.
- Provides soil quality assessment and crop recommendations

## How It Works

1. *Home Page*  
   - Displays a welcome message with a time-based greeting (e.g., "Good Morning" or "Good Evening")
   - Login button directs users to the login page

2. *Farmer Profile Page*  
   - Collects details: name, age, gender, profile photo, mobile number, location (via GPS), and farming type

3. *Dashboard*  
   - Displays personalized greeting and profile picture
   - Options for different farming methods: Subsistence, Commercial, Plantation, Mixed, Intensive, and Organic Farming
   - *NEW:* AI analysis tools for plant disease detection and soil report analysis

4. *Farming Method Details*  
   - Selecting a method displays a brief description, along with Disease and Yield buttons:  
     - *Disease*: Upload an image for AI-powered disease detection with treatment recommendations
     - *Yield*: Upload a soil test report for comprehensive soil analysis and crop suggestions

5. *Community Page*  
   - Direct link to [WhatsApp Community](https://chat.whatsapp.com/H7b5CgtK0sfHriEN1Km1cW)

## Technologies Used

- *Frontend*: React, HTML, CSS, Tailwind CSS
- *Backend*: 
  - API: Flask
  - Original app: Django
- *Machine Learning*:  
  - PyTorch for plant disease detection (ResNet50, transfer learning)
  - Scikit-learn for soil analysis models (Random Forest, Gradient Boosting)
  - Climate forecasting models (ARIMA, LSTM)
- *Database*: PostgreSQL  
- *APIs*:  
  - OpenWeatherMap (for climate data)
  - Wikipedia API (for yield insights)
- *Other Tools*:  
  - Geospatial analysis (Linking GPS to soil and climate profiles)
  - Satellite imagery (Sentinel-2, Landsat)
  - Kaggle datasets for model training

## Project Structure


agrosphere/
├── app/
│   ├── frontend/           # React frontend
│   └── api/                # Flask API backend for ML models
├── data/
│   ├── plant_diseases/     # Plant disease dataset
│   └── soil_reports/       # Soil analysis dataset
├── models/
│   ├── plant_disease_model/  # Trained plant disease detection model
│   └── soil_analysis_model/  # Trained soil analysis model
├── scripts/
│   ├── data_collection/    # Scripts for dataset collection
│   ├── preprocessing/      # Data preprocessing scripts
│   ├── training/           # Model training scripts
│   └── evaluation/         # Model evaluation scripts
├── notebooks/              # Jupyter notebooks for experimentation
└── README.md


## Installation

### Full Application Setup

1. Clone the repository:
   bash
   git clone https://github.com/MoniishRaman/AgroSphere.git
   cd AgroSphere
   

2. Install backend dependencies:
   bash
   pip install -r requirements.txt
   

3. Install frontend dependencies:
   bash
   cd app/frontend
   npm install
   

4. Run the application:
   - Backend:
     bash
     python manage.py runserver
     
   - Frontend:
     bash
     npm start
     

### AI Models Setup

1. Create the project structure:
   bash
   mkdir -p agrosphere-ai/data/{plant_diseases,soil_reports}/{raw,processed}
   mkdir -p agrosphere-ai/models/{plant_disease_model,soil_analysis_model}
   mkdir -p agrosphere-ai/scripts/{data_collection,preprocessing,training,evaluation}
   

2. Install ML dependencies:
   bash
   pip install torch torchvision pandas numpy scikit-learn matplotlib seaborn
   pip install flask flask-cors PyPDF2 kagglehub opencv-python
   

3. Download datasets:
   bash
   # Plant disease dataset
   python scripts/data_collection/collect_plant_disease_data.py --download-kaggle
   
   # Soil dataset
   python scripts/data_collection/collect_soil_report_data.py --download-kaggle
   

4. Preprocess data:
   bash
   # Plant disease data
   python scripts/preprocessing/preprocess_plant_images.py
   
   # Soil data
   python scripts/preprocessing/process_kaggle_soil_data.py
   

5. Train models:
   bash
   # Plant disease model
   python scripts/training/train_plant_disease_model.py
   
   # Soil analysis model
   python scripts/training/train_soil_analysis_model.py
   

6. Run the API server:
   bash
   cd app/api
   python app.py
   

## Usage

1. Navigate to the *Home Page* and log in
2. Complete your *Farmer Profile*
3. Explore personalized farming recommendations and insights
4. Use the *Community Page* to connect with other farmers
5. Upload images or soil reports for disease detection or yield analysis:
   - For plant disease detection:
     - Take a clear photo of the affected plant part
     - Upload through the Disease Detection tool
     - Review analysis results and treatment recommendations
   - For soil analysis:
     - Upload your soil test report PDF
     - Review comprehensive soil nutrient analysis
     - Get crop recommendations based on soil properties

## Future Enhancements

- *Advanced AI Models*: Incorporate deep learning for more accurate disease detection and yield predictions
- *Multilingual Support*: Expand accessibility by supporting multiple languages
- *Offline Mode*: Allow users to access key features without an internet connection
- *Expanded Dataset*: Include more crops, farming techniques, and regional data
- *Mobile Application*: Develop native mobile apps for Android and iOS platforms

## Contributing

We welcome contributions to improve AgroSphere. If you'd like to contribute, follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Commit your changes (git commit -m "Add new feature")
4. Push to the branch (git push origin feature-branch)
5. Open a pull request

## Contact

For any questions or support, please visit the *Contact Us* page on AgroSphere.

## License

This project is licensed under the MIT License.
