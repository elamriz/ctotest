"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Calendar, 
  MapPin,
  Eye,
  Filter,
  Grid3X3,
  List,
  Sparkles,
  Award,
  Clock,
  Users
} from "lucide-react";

export default function ModernPortfolio() {
  const [activeFilter, setActiveFilter] = useState("tous");
  const [viewMode, setViewMode] = useState("grid");

  const filters = [
    { id: "tous", label: "Tous les projets", count: 12 },
    { id: "installation", label: "Installation", count: 4 },
    { id: "renovation", label: "Rénovation", count: 3 },
    { id: "domotique", label: "Domotique", count: 3 },
    { id: "solaire", label: "Solaire", count: 2 },
  ];

  const projects = [
    {
      id: 1,
      title: "Villa Contemporaine Ixelles",
      category: "installation",
      type: "Installation électrique complète",
      description: "Installation électrique haut de gamme pour villa de 300m² avec domotique intégrée et système de sécurité avancé.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      location: "Ixelles, Bruxelles",
      date: "Décembre 2024",
      duration: "5 jours",
      client: "Famille Dubois",
      stats: {
        power: "12kW",
        circuits: "24",
        smartDevices: "15"
      },
      features: [
        "Tableau électrique intelligent",
        "Éclairage LED connecté",
        "Système de sécurité intégré",
        "Charge vehicle électrique"
      ],
      gradient: "from-cyan-500 to-blue-600",
      rating: 5
    },
    {
      id: 2,
      title: "Appartement Moderne Schaerbeek", 
      category: "renovation",
      type: "Rénovation électrique complète",
      description: "Modernisation complète de l'installation électrique d'un appartement Art Deco avec respect du patrimoine.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      location: "Schaerbeek, Bruxelles",
      date: "Novembre 2024", 
      duration: "3 jours",
      client: "M. & Mme Martin",
      stats: {
        power: "9kW",
        circuits: "18", 
        smartDevices: "8"
      },
      features: [
        "Mise aux normes RGIE",
        "Design vintage moderne",
        "Économies d'énergie 40%",
        "Prises USB intégrées"
      ],
      gradient: "from-purple-500 to-pink-600",
      rating: 5
    },
    {
      id: 3,
      title: "Loft Industriel Centre",
      category: "domotique",
      type: "Système domotique complet",
      description: "Transformation d&apos;un loft industriel en espace intelligent avec contrôle vocal et automatisations.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      location: "Centre, Bruxelles",
      date: "Octobre 2024",
      duration: "4 jours", 
      client: "Tech Startup",
      stats: {
        power: "15kW",
        circuits: "30",
        smartDevices: "25"
      },
      features: [
        "Assistant vocal intégré",
        "Scénarios automatisés",
        "Monitoring énergétique",
        "Contrôle à distance"
      ],
      gradient: "from-green-500 to-teal-600",
      rating: 5
    },
    {
      id: 4,
      title: "Maison Familiale Uccle",
      category: "installation",
      type: "Installation + Solaire",
      description: "Installation électrique avec système photovoltaïque et batterie de stockage pour autonomie énergétique.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      location: "Uccle, Bruxelles",
      date: "Septembre 2024",
      duration: "7 jours",
      client: "Famille Leroy", 
      stats: {
        power: "18kW",
        circuits: "35",
        smartDevices: "20"
      },
      features: [
        "Panneaux solaires 9kWc",
        "Batterie 10kWh",
        "Monitoring temps réel",
        "Optimisation IA"
      ],
      gradient: "from-yellow-500 to-orange-600",
      rating: 5
    },
    {
      id: 5,
      title: "Bureau Écologique Etterbeek",
      category: "renovation",
      type: "Rénovation + Domotique",
      description: "Rénovation électrique d'un espace de coworking avec focus sur l'efficacité énergétique et le bien-être.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      location: "Etterbeek, Bruxelles",
      date: "Août 2024",
      duration: "6 jours",
      client: "EcoWork Brussels",
      stats: {
        power: "25kW",
        circuits: "45",
        smartDevices: "30"
      },
      features: [
        "Éclairage circadien",
        "Gestion intelligente de l&apos;énergie",
        "Espaces modulables",
        "Certification BREEAM"
      ],
      gradient: "from-indigo-500 to-purple-600",
      rating: 5
    },
    {
      id: 6,
      title: "Appartement Smart Watermael",
      category: "domotique", 
      type: "Domotique avancée",
      description: "Implémentation d'un écosystème domotique complet avec IA pour optimization automatique.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      location: "Watermael-Boitsfort",
      date: "Juillet 2024",
      duration: "2 jours",
      client: "Ing. Benali",
      stats: {
        power: "7kW",
        circuits: "12",
        smartDevices: "18"
      },
      features: [
        "IA prédictive",
        "Maintenance préventive",
        "Interface gestuelle",
        "Intégration IoT"
      ],
      gradient: "from-red-500 to-pink-600",
      rating: 5
    }
  ];

  const filteredProjects = activeFilter === "tous" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md border border-orange-400/30 rounded-full px-6 py-3 mb-6"
        >
          <Award className="w-5 h-5 text-orange-400" />
          <span className="text-orange-300 font-medium">Portfolio Premium</span>
        </motion.div>

        <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
          Nos
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 bg-clip-text text-transparent">
            {" "}Réalisations
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Découvrez nos projets les plus ambitieux et innovants réalisés 
          pour des clients exigeants à Bruxelles
        </p>
      </motion.div>

      {/* Filters & View Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6"
      >
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20"
              }`}
            >
              <span className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>{filter.label}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {filter.count}
                </span>
              </span>
            </motion.button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-md transition-all ${
              viewMode === "grid" 
                ? "bg-orange-500 text-white" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-md transition-all ${
              viewMode === "list" 
                ? "bg-orange-500 text-white" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Projects Grid/List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter + viewMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`grid gap-8 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: viewMode === "grid" ? 1.02 : 1,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className={`h-full bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl border border-gray-800 hover:border-orange-400/50 transition-all duration-500 overflow-hidden ${
                viewMode === "list" ? "flex flex-row" : ""
              }`}>
                
                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === "list" ? "w-1/3" : "h-48"
                }`}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {project.type}
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <Sparkles className="w-4 h-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* View Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/50"
                  >
                    <Button variant="glass" size="sm" className="group-hover:scale-110 transition-transform">
                      <Eye className="w-4 h-4 mr-2" />
                      Voir détails
                    </Button>
                  </motion.div>
                </div>

                {/* Project Info */}
                <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  
                  {/* Title & Meta */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-400">{project.stats.power}</div>
                      <div className="text-xs text-gray-500">Puissance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-400">{project.stats.circuits}</div>
                      <div className="text-xs text-gray-500">Circuits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-400">{project.stats.smartDevices}</div>
                      <div className="text-xs text-gray-500">Devices</div>
                    </div>
                  </div>

                  {/* Location & Date */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                        <span className="text-xs text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Client & Duration */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{project.client}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-orange-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl border border-orange-400/30">
          <CardContent className="p-12">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
              className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Votre projet sera notre prochaine réalisation
            </h3>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Rejoignez notre portfolio de projets d&apos;exception. 
              Chaque client est unique, chaque projet est une œuvre d&apos;art.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" size="lg">
                Démarrer mon projet
              </Button>
              <Button variant="glass" size="lg">
                Voir tous nos projets
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}