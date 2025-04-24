
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Filter } from 'lucide-react';

const GovConnect = () => {
  const [state, setState] = useState('all');
  const [farmingType, setFarmingType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const schemes = [
    {
      id: 1,
      title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      description: 'Comprehensive crop insurance scheme for farmers.',
      eligibility: 'All farmers including sharecroppers and tenant farmers.',
      benefits: 'Financial support in case of crop failure due to natural calamities.',
      state: 'All India',
      farmingType: ['Subsistence', 'Commercial', 'Mixed'],
      link: 'https://pmfby.gov.in/'
    },
    {
      id: 2,
      title: 'PM Kisan Samman Nidhi',
      description: 'Direct income support for farmers.',
      eligibility: 'Small and marginal farmers with landholding up to 2 hectares.',
      benefits: '₹6,000 per year in three equal installments.',
      state: 'All India',
      farmingType: ['Subsistence', 'Commercial', 'Plantation', 'Mixed', 'Intensive', 'Organic'],
      link: 'https://pmkisan.gov.in/'
    },
    {
      id: 3,
      title: 'Soil Health Card Scheme',
      description: 'Provides soil health assessment to farmers.',
      eligibility: 'All farmers.',
      benefits: 'Recommendations on nutrients and fertilizers required for individual farms.',
      state: 'All India',
      farmingType: ['Subsistence', 'Commercial', 'Plantation', 'Mixed', 'Intensive', 'Organic'],
      link: 'https://soilhealth.dac.gov.in/'
    },
    {
      id: 4,
      title: 'National Mission for Sustainable Agriculture (NMSA)',
      description: 'Promotes sustainable agriculture through climate change adaptation.',
      eligibility: 'Farmers practicing sustainable agriculture.',
      benefits: 'Technical and financial assistance for sustainable farming practices.',
      state: 'All India',
      farmingType: ['Organic', 'Mixed'],
      link: 'https://nmsa.dac.gov.in/'
    },
    {
      id: 5,
      title: 'Karnataka Krishi Yantra Dhare Yojane',
      description: 'Farm equipment rental at subsidized rates.',
      eligibility: 'Farmers in Karnataka.',
      benefits: 'Access to farm equipment on rental basis at subsidized rates.',
      state: 'Karnataka',
      farmingType: ['Subsistence', 'Commercial', 'Mixed'],
      link: 'https://krishiyantradhare.kar.nic.in/'
    },
    {
      id: 6,
      title: 'Paramparagat Krishi Vikas Yojana (PKVY)',
      description: 'Promotes organic farming practices.',
      eligibility: 'Farmers willing to adopt organic farming.',
      benefits: 'Financial assistance for organic inputs, certification, and marketing.',
      state: 'All India',
      farmingType: ['Organic'],
      link: 'https://pgsindia-ncof.gov.in/pkvy/index.aspx'
    }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesState = state === 'all' || scheme.state === state || scheme.state === 'All India';
    const matchesFarmingType = farmingType === 'all' || scheme.farmingType.includes(farmingType);
    const matchesSearch = searchQuery === '' || 
      scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesState && matchesFarmingType && matchesSearch;
  });

  return (
    <div className="min-h-screen py-20 page-transition">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-2">GovConnect</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access the latest government schemes and agricultural support programs tailored for farmers like you.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Label htmlFor="search" className="mb-2 block">Search Schemes</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  id="search" 
                  placeholder="Search by keyword..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="md:w-1/4">
              <Label htmlFor="state" className="mb-2 block">Filter by State</Label>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger id="state">
                  <SelectValue placeholder="All States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  <SelectItem value="All India">All India</SelectItem>
                  <SelectItem value="Karnataka">Karnataka</SelectItem>
                  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="Punjab">Punjab</SelectItem>
                  <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:w-1/4">
              <Label htmlFor="farmingType" className="mb-2 block">Farming Type</Label>
              <Select value={farmingType} onValueChange={setFarmingType}>
                <SelectTrigger id="farmingType">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Subsistence">Subsistence</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Plantation">Plantation</SelectItem>
                  <SelectItem value="Mixed">Mixed</SelectItem>
                  <SelectItem value="Intensive">Intensive</SelectItem>
                  <SelectItem value="Organic">Organic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-primary" />
              <span className="font-medium">Filter Results</span>
            </div>
            <span className="text-muted-foreground text-sm">{filteredSchemes.length} schemes found</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSchemes.map(scheme => (
            <div key={scheme.id} className="bg-white rounded-lg shadow-soft hover:shadow-hover transition-all p-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">{scheme.title}</h3>
              <p className="text-muted-foreground mb-4">{scheme.description}</p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <span className="font-medium">Eligibility:</span> {scheme.eligibility}
                </div>
                <div>
                  <span className="font-medium">Benefits:</span> {scheme.benefits}
                </div>
                <div>
                  <span className="font-medium">Available in:</span> {scheme.state}
                </div>
              </div>
              
              <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                <Button className="agro-button w-full">View Details</Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovConnect;
