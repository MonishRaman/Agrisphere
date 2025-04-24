
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Play, 
  ThumbsUp, 
  MessageSquare, 
  BarChart, 
  ChevronRight 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Simulated video data
const videos = [
  {
    "id": "video1",
    "title": "Modern Irrigation Techniques for Water Conservation",
    "channel": "AgriculturalInnovators",
    "views": "45K",
    "timestamp": "2 weeks ago",
    "thumbnail": "https://img.youtube.com/vi/q7JnJ0oBa94/0.jpg",  // Thumbnail URL
    "category": "Smart Irrigation",
    "duration": "12:34",
    "videoLink": "https://youtu.be/q7JnJ0oBa94?si=iQAMs6gF0yRRH2Nq"  // YouTube link for video display
},
{
  "id": "video1",
  "title": "Modern Irrigation Techniques for Water Conservation",
  "channel": "AgriculturalInnovators",
  "views": "45K",
  "timestamp": "2 weeks ago",
  "thumbnail": "https://i.pinimg.com/474x/63/d7/01/63d701a146d2eea47cb79de1d08071b2.jpg",
  "category": "Smart Irrigation",
  "duration": "12:34",
  "videoLink": "https://youtu.be/q7JnJ0oBa94?si=iQAMs6gF0yRRH2Nq"
},
  {
    id: 'video3',
    title: 'Using Drones for Crop Monitoring and Precision Agriculture',
    channel: 'TechForFarms',
    views: '67K',
    timestamp: '1 month ago',
    thumbnail: 'https://i.pinimg.com/474x/59/59/5f/59595fd81ad0f6848b9bbee433fce55f.jpg',
    category: 'New Technologies',
    duration: '15:42'
  },
  {
    id: 'video4',
    title: 'Soil Health Management for Maximum Crop Yield',
    channel: 'SoilScience',
    views: '28K',
    timestamp: '5 days ago',
    thumbnail: 'https://i.pinimg.com/474x/ca/82/fd/ca82fd3d17726d59bee683117a376347.jpg',
    category: 'Soil Management',
    duration: '10:15'
  },
  {
    id: 'video5',
    title: 'Crop Rotation Techniques for Sustainable Agriculture',
    channel: 'SustainableFarming',
    views: '19K',
    timestamp: '2 weeks ago',
    thumbnail: 'https://i.pinimg.com/474x/71/21/78/712178ef5527cab94a29aa2ebcf24d79.jpg',
    category: 'Sustainable Farming',
    duration: '13:51'
  },
  {
    id: 'video6',
    title: 'Climate-Smart Agriculture Practices for Changing Weather Patterns',
    channel: 'ClimateAgroAdapt',
    views: '42K',
    timestamp: '3 weeks ago',
    thumbnail: 'https://i.pinimg.com/736x/69/a7/b0/69a7b08a1d39b9ca33ea7a5abd7c2f36.jpg',
    category: 'Climate Adaptation',
    duration: '24:28'
  },
  {
    "id": 'video7',
    "title": 'agriculture techniques for subsistance farming',
    "channel": 'ClimateAgroAdapt',
    "views": '42K',
    "timestamp": '3 weeks ago',
    "thumbnail": 'https://in.pinterest.com/pin/299419075247581059/',
    "category": 'Climate Adaptation',
    "duration": '16:28'
  },
  {
    "id": 'video8',
    "title": 'agriculture techniques for subsistance farming',
    "channel": 'ClimateAgroAdapt',
    "views": '42K',
    "timestamp": '3 weeks ago',
    "thumbnail": 'https://in.pinterest.com/pin/4151824650927836/',
    "category": 'Climate Adaptation',
    "duration": '16:28'
  },
  {
    "id": 'video9',
    "title": 'agriculture techniques for subsistance farming',
    "channel": 'ClimateAgroAdapt',
    "views": '42K',
    "timestamp": '3 weeks ago',
    "thumbnail": 'https://in.pinterest.com/pin/441986150944516627/',
    "category": 'Climate Adaptation',
    "duration": '16:28'
  },
  {
  "id": 'video10',
    "title": 'agriculture techniques for subsistance farming',
    "channel": 'ClimateAgroAdapt',
    "views": '42K',
    "timestamp": '3 weeks ago',
    "thumbnail": 'https://in.pinterest.com/pin/284993482662895296/',
    "category": 'Climate Adaptation',
    "duration": '16:28'
  },
  {
    "id": 'video11',
      "title": 'agriculture techniques for subsistance farming',
      "channel": 'ClimateAgroAdapt',
      "views": '42K',
      "timestamp": '3 weeks ago',
      "thumbnail": 'https://in.pinterest.com/pin/493636809161830534/',
      "category": 'Climate Adaptation',
      "duration": '16:28'
    },
    {
      "id": 'video12',
        "title": 'agriculture techniques for subsistance farming',
        "channel": 'ClimateAgroAdapt',
        "views": '42K',
        "timestamp": '3 weeks ago',
        "thumbnail": 'https://in.pinterest.com/pin/2674081020859152/',
        "category": 'Climate Adaptation',
        "duration": '16:28'
      },
      {
        "id": 'video13',
          "title": 'agriculture techniques for subsistance farming',
          "channel": 'ClimateAgroAdapt',
          "views": '42K',
          "timestamp": '3 weeks ago',
          "thumbnail": 'https://in.pinterest.com/pin/51791464459415285/',
          "category": 'Climate Adaptation',
          "duration": '16:28'
        },
        {
          "id": 'video14',
            "title": 'agriculture techniques for subsistance farming',
            "channel": 'ClimateAgroAdapt',
            "views": '42K',
            "timestamp": '3 weeks ago',
            "thumbnail": 'https://in.pinterest.com/pin/105271710033945560/',
            "category": 'Climate Adaptation',
            "duration": '16:28'
          },
          {
            "id": 'video15',
              "title": 'agriculture techniques for subsistance farming',
              "channel": 'ClimateAgroAdapt',
              "views": '42K',
              "timestamp": '3 weeks ago',
              "thumbnail": 'https://in.pinterest.com/pin/42362052738910159/',
              "category": 'Climate Adaptation',
              "duration": '16:28'
            },
];

const categories = [
  { id: 'all', name: 'All Videos' },
  { id: 'organic', name: 'Organic Farming' },
  { id: 'irrigation', name: 'Smart Irrigation' },
  { id: 'tech', name: 'New Technologies' },
  { id: 'soil', name: 'Soil Management' },
  { id: 'sustainable', name: 'Sustainable Farming' },
  { id: 'climate', name: 'Climate Adaptation' },
];

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          video.channel.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || 
                            video.category.toLowerCase().includes(activeCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20 page-transition">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Discover Agricultural Knowledge</h1>
          <p className="text-muted-foreground">
            Learn from educational videos on farming techniques, technologies, and best practices
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-soft p-4 mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search for videos..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <Button 
                key={category.id} 
                variant={activeCategory === category.id ? "default" : "outline"}
                className="whitespace-nowrap"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Featured Videos</h2>
            <Button variant="link" className="text-primary">
              View All <ChevronRight size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map(video => (
              <div key={video.id} className="bg-white rounded-lg shadow-soft hover:shadow-hover transition-all overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="ghost" className="bg-black/50 text-white rounded-full h-12 w-12 p-0">
                      <Play size={24} fill="white" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-primary/90 hover:bg-primary text-white">
                      {video.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium mb-1 line-clamp-2">{video.title}</h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <span>{video.channel}</span>
                    <span className="mx-1">•</span>
                    <span>{video.views} views</span>
                    <span className="mx-1">•</span>
                    <span>{video.timestamp}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
                      <ThumbsUp size={14} />
                      <span>Like</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
                      <MessageSquare size={14} />
                      <span>Comment</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
                      <BarChart size={14} />
                      <span>Stats</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No videos match your search criteria.</p>
            <Button 
              variant="link" 
              className="text-primary mt-2"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
