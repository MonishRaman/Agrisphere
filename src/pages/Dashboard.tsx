
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Greeting from '@/components/ui/greeting';
import { Upload, AlertCircle, ArrowRight, BarChart, FileText, UploadCloud, TreeDeciduous, Droplet, Thermometer, ChevronDown } from 'lucide-react';
import { toast } from "sonner";

// Farm type images mapping
const farmTypeImages = {
  subsistence: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&h=300",
  commercial: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&h=300",
  plantation: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&h=300",
  mixed: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&h=300",
  intensive: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=600&h=300",
  organic: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&h=300",
};

const Dashboard = () => {
  const [farmingType, setFarmingType] = useState('all');
  const [activeTab, setActiveTab] = useState<'diseases' | 'yield'>('diseases');
  const [isUploading, setIsUploading] = useState(false);
  const [userName, setUserName] = useState("");
  const [analysisResult, setAnalysisResult] = useState<null | {
    title: string;
    description: string;
    severity?: 'low' | 'medium' | 'high';
    recommendations?: string[];
  }>(null);

  // Get user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setUserName(userData.name || "User");
      } catch (e) {
        console.error('Error parsing user data from localStorage', e);
        setUserName("User");
      }
    } else {
      setUserName("User");
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Simulate file upload and analysis
      setIsUploading(true);
      toast.info("Analyzing your file. Please wait...");
      
      setTimeout(() => {
        setIsUploading(false);
        
        if (activeTab === 'diseases') {
          setAnalysisResult({
            title: "Leaf Blight Detected",
            description: "Your plant appears to be suffering from Leaf Blight, a fungal disease that affects crops like rice, wheat, and maize.",
            severity: 'medium',
            recommendations: [
              "Apply copper-based fungicide as per recommended dosage",
              "Ensure proper spacing between plants for adequate air circulation",
              "Avoid overhead irrigation to reduce leaf wetness",
              "Remove and destroy infected plant parts"
            ]
          });
        } else {
          setAnalysisResult({
            title: "Soil Analysis Results",
            description: "Based on your soil test report, we've analyzed the nutrient content and pH level of your soil.",
            recommendations: [
              "pH Level: 6.5 (Slightly Acidic) - Optimal for most crops",
              "Nitrogen (N): Low - Add nitrogen-rich fertilizers",
              "Phosphorus (P): Medium - Adequate for most crops",
              "Potassium (K): High - No additional supplements needed",
              "Organic Matter: 3.2% - Good level for agricultural soil"
            ]
          });
        }
        
        toast.success("Analysis complete!");
      }, 2000);
    }
  };

  const resetAnalysis = () => {
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen py-20 page-transition">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">
            <Greeting name={userName} className="text-primary" />
          </h1>
          <p className="text-muted-foreground">
            Welcome back to your AgroSphere dashboard
          </p>
        </div>

        {/* Farming Type Selection */}
        <div className="mb-10">
          <div className="bg-white rounded-lg shadow-soft p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h2 className="text-xl font-medium mb-4 md:mb-0">Select Your Farming Type</h2>
              
              <div className="w-full md:w-64">
                <Select
                  onValueChange={setFarmingType}
                  value={farmingType}
                >
                  <SelectTrigger className="agro-input">
                    <SelectValue placeholder="Select farming type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="subsistence">Subsistence</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="plantation">Plantation</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                    <SelectItem value="intensive">Intensive</SelectItem>
                    <SelectItem value="organic">Organic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {farmingType && farmingType !== 'all' && (
              <div className="animate-fade-in">
                <div className="rounded-lg bg-primary/5 p-4">
                  <img 
                    src={farmTypeImages[farmingType as keyof typeof farmTypeImages]} 
                    alt={`${farmingType} farming`} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-medium mb-2">
                    {farmingType.charAt(0).toUpperCase() + farmingType.slice(1)} Farming Selected
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your recommendations and analysis will be tailored for {farmingType} farming practices.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Analysis Options */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h2 className="text-xl font-medium mb-6">AI Analysis Tools</h2>
              
              <div className="space-y-4">
                <button
                  onClick={() => setActiveTab('diseases')}
                  className={`w-full text-left p-4 rounded-lg transition-colors flex items-center justify-between ${activeTab === 'diseases' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                >
                  <div className="flex items-center">
                    <TreeDeciduous className="h-5 w-5 mr-3" />
                    <span>Plant Disease Detection</span>
                  </div>
                  {activeTab === 'diseases' && <ChevronDown className="h-5 w-5" />}
                </button>
                
                <button
                  onClick={() => setActiveTab('yield')}
                  className={`w-full text-left p-4 rounded-lg transition-colors flex items-center justify-between ${activeTab === 'yield' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
                >
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-3" />
                    <span>Soil Report Analysis</span>
                  </div>
                  {activeTab === 'yield' && <ChevronDown className="h-5 w-5" />}
                </button>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-3">Weather Conditions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Thermometer className="h-4 w-4 text-orange-500 mr-2" />
                      <span className="text-sm">Temperature</span>
                    </div>
                    <span className="text-sm font-medium">32°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Droplet className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-sm">Humidity</span>
                    </div>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Upload & Analysis */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h2 className="text-xl font-medium mb-6">
                {activeTab === 'diseases' ? 'Plant Disease Detection' : 'Soil Report Analysis'}
              </h2>
              
              {!analysisResult ? (
                <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-muted rounded-lg">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <UploadCloud className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    {activeTab === 'diseases' 
                      ? 'Upload a plant image for analysis' 
                      : 'Upload your soil test report (PDF)'}
                  </h3>
                  <p className="text-muted-foreground text-center mb-6 max-w-md">
                    {activeTab === 'diseases'
                      ? 'Take a clear photo of the affected plant part (leaf, stem, fruit) for accurate disease detection.'
                      : 'Upload your lab soil test report to get detailed analysis and recommendations for optimal yield.'}
                  </p>
                  
                  <input
                    type="file"
                    id="fileUpload"
                    accept={activeTab === 'diseases' ? "image/*" : ".pdf"}
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="fileUpload"
                    className={`agro-button inline-flex items-center ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    {isUploading ? 'Uploading...' : `Upload ${activeTab === 'diseases' ? 'Image' : 'PDF'}`}
                  </label>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <div className="bg-primary/5 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <div className="mr-4">
                        {analysisResult.severity ? (
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                            ${analysisResult.severity === 'low' ? 'bg-green-100 text-green-600' : 
                              analysisResult.severity === 'medium' ? 'bg-amber-100 text-amber-600' : 
                                'bg-red-100 text-red-600'}`}
                          >
                            <AlertCircle className="h-6 w-6" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <BarChart className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{analysisResult.title}</h3>
                        <p className="text-muted-foreground">{analysisResult.description}</p>
                        
                        {analysisResult.severity && (
                          <div className="mt-3 flex items-center">
                            <span className="font-medium mr-2">Severity:</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium
                              ${analysisResult.severity === 'low' ? 'bg-green-100 text-green-700' : 
                                analysisResult.severity === 'medium' ? 'bg-amber-100 text-amber-700' : 
                                  'bg-red-100 text-red-700'}`}
                            >
                              {analysisResult.severity.charAt(0).toUpperCase() + analysisResult.severity.slice(1)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {analysisResult.recommendations && (
                    <div>
                      <h4 className="font-semibold mb-4">Recommendations</h4>
                      <ul className="space-y-3">
                        {analysisResult.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 shrink-0">
                              {index + 1}
                            </div>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-4">
                    <Button 
                      variant="outline" 
                      onClick={resetAnalysis}
                    >
                      New Analysis
                    </Button>
                    <Button className="agro-button mb-4 sm:mb-0">
                      View Detailed Report
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
