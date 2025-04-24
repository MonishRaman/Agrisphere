
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Upload } from 'lucide-react';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    mobile: '',
    farmingType: '',
    location: '',
    profilePicture: null as File | null
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [currentLocation, setCurrentLocation] = useState<string>('Fetching location...');

  useEffect(() => {
    // Attempt to get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // In a real app, you'd use a geocoding service to get the actual address
          setCurrentLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
          setFormData(prev => ({ ...prev, location: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` }));
        },
        (error) => {
          console.error('Error getting location:', error);
          setCurrentLocation('Location access denied or unavailable');
        }
      );
    } else {
      setCurrentLocation('Geolocation not supported by your browser');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, profilePicture: file }));
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.age || !formData.gender || !formData.mobile || !formData.farmingType) {
      toast.error("Please fill all required fields");
      return;
    }
    
    // Save user data to localStorage
    const userData = {
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      mobile: formData.mobile,
      farmingType: formData.farmingType,
      location: formData.location,
      profilePicture: previewUrl // Save the data URL of the image
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    
    toast.success("Profile setup complete!");
    
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen py-20 px-4 page-transition">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Complete Your Profile</h1>
          <p className="text-muted-foreground">
            Tell us more about yourself to get personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-soft p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden mb-4">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Profile preview" className="w-full h-full object-cover" />
                  ) : (
                    <Upload className="h-12 w-12 text-primary/60" />
                  )}
                </div>
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="profilePicture"
                  className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full cursor-pointer shadow-md hover:bg-primary/90 transition-colors"
                >
                  <Upload className="h-4 w-4" />
                </label>
              </div>
              <label htmlFor="profilePicture" className="text-primary hover:underline cursor-pointer mt-2">
                Upload Profile Picture
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="required">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="agro-input"
                />
              </div>

              {/* Age */}
              <div className="space-y-2">
                <Label htmlFor="age" className="required">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="25"
                  min="18"
                  max="100"
                  required
                  className="agro-input"
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender" className="required">Gender</Label>
                <Select
                  onValueChange={(value) => handleSelectChange('gender', value)}
                  value={formData.gender}
                  required
                >
                  <SelectTrigger className="agro-input">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <Label htmlFor="mobile" className="required">Mobile Number</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="+91 9876543210"
                  required
                  className="agro-input"
                />
              </div>

              {/* Farming Type */}
              <div className="space-y-2">
                <Label htmlFor="farmingType" className="required">Farming Type</Label>
                <Select
                  onValueChange={(value) => handleSelectChange('farmingType', value)}
                  value={formData.farmingType}
                  required
                >
                  <SelectTrigger className="agro-input">
                    <SelectValue placeholder="Select farming type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="subsistence">Subsistence</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="plantation">Plantation</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                    <SelectItem value="intensive">Intensive</SelectItem>
                    <SelectItem value="organic">Organic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location (Auto-detected)</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location || currentLocation}
                  onChange={handleInputChange}
                  placeholder="Your location"
                  readOnly
                  className="agro-input bg-muted"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="agro-button w-full">
                Complete Profile Setup
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
