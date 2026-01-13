"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Shield, 
  Home, 
  Smartphone, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Settings,
  Wrench
} from "lucide-react";

export default function ModernServices() {
  const services = [
    {
      icon: Zap,
      title: "Installation Électrique",
      description: "Installation complète avec matériaux de qualité premium et conformité RGIE garantie.",
      features: ["Câblage professionnel", "Tableau électrique", "Prises et interrupteurs"],
      price: "Sur devis",
      gradient: "from-cyan-500 to-blue-500",
      delay: 0.1,
    },
    {
      icon: Home,
      title: "Rénovation Électrique",
      description: "Modernisation complète de votre installation électrique existante.",
      features: ["Mise aux normes", "Remplacement du câblage ancien", "Optimisation énergétique"],
      price: "À partir de 1200€",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Dépannage d'Urgence",
      description: "Intervention rapide 24/7 pour tous vos problèmes électriques urgents.",
      features: ["Intervention < 30min", "Diagnostic précis", "Réparation immédiate"],
      price: "89€ - 150€",
      gradient: "from-red-500 to-orange-500",
      delay: 0.3,
    },
    {
      icon: Smartphone,
      title: "Domotique Intelligente",
      description: "Maison connectée avec les dernières technologies IoT et IA.",
      features: ["Contrôle vocal", "Automatisation", "Économies d'énergie"],
      price: "À partir de 800€",
      gradient: "from-green-500 to-teal-500",
      delay: 0.4,
    },
    {
      icon: Settings,
      title: "Maintenance Préventive",
      description: "Contrôles réguliers pour éviter les pannes et prolonger la durée de vie.",
      features: ["Inspection complète", "Tests de sécurité", "Rapport détaillé"],
      price: "150€/visite",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.5,
    },
    {
      icon: Sparkles,
      title: "Installation Solaire",
      description: "Solutions photovoltaïques pour votre autonomie énergétique.",
      features: ["Dimensionnement expert", "Installation premium", "Suivi de production"],
      price: "Sur devis",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full px-6 py-3 mb-6"
        >
          <Wrench className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-300 font-medium">Services Premium</span>
        </motion.div>

        <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
          Solutions
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}Innovantes
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Technologies de pointe, service de qualité supérieure, 
          garantie de satisfaction à 100%
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="group"
          >
            <Card className="h-full bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden">
              {/* Card Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
              
              <CardContent className="p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">Devis personnalisé</div>
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                >
                  <span>Demander un devis</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-xl border border-cyan-400/30">
          <CardContent className="p-12">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Service de Qualité Premium
            </h3>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Plus de 15 ans d&apos;expertise, plus de 1000 clients satisfaits, 
              garantie de satisfaction à 100%
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" size="lg">
                <Clock className="w-5 h-5 mr-2" />
                Intervention 24/7
              </Button>
              <Button variant="glass" size="lg">
                Consultation gratuite
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}