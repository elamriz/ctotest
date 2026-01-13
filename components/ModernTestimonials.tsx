"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Quote, 
  Zap,
  Award,
  Clock,
  Shield
} from "lucide-react";

export default function ModernTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Propriétaire d'appartement",
      location: "Ixelles",
      rating: 5,
      text: "Service exceptionnel ! L'équipe a installé notre système domotique en une journée. Interface ultra-moderne et fonctionnement parfait. Je recommande vivement !",
      project: "Installation domotique complète",
      gradient: "from-cyan-400 to-blue-500",
      avatar: "MD"
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      role: "Entrepreneur",
      location: "Uccle", 
      rating: 5,
      text: "Dépannage d'urgence un dimanche soir. Arrivée en 25 minutes, problème résolu en 30 minutes. Technologie de diagnostic très impressionnante.",
      project: "Dépannage d'urgence",
      gradient: "from-purple-500 to-pink-500",
      avatar: "JM"
    },
    {
      id: 3,
      name: "Sophie Leroy",
      role: "Architecte d'intérieur",
      location: "Schaerbeek",
      rating: 5,
      text: "Rénovation électrique complète avec des finitions parfaites. Le résultat dépasse nos attentes. Design moderne et fonctionnel.",
      project: "Rénovation électrique",
      gradient: "from-green-500 to-teal-500",
      avatar: "SL"
    },
    {
      id: 4,
      name: "Ahmed Benali",
      role: "Directeur technique",
      location: "Bruxelles Centre",
      rating: 5,
      text: "Installation solaire de 9kWc avec monitoring intelligent. Production excédant les prévisions. Équipe très professionnelle.",
      project: "Installation solaire",
      gradient: "from-yellow-500 to-orange-500",
      avatar: "AB"
    },
  ];

  const stats = [
    { icon: Award, value: "4.9/5", label: "Note moyenne" },
    { icon: Star, value: "98%", label: "Clients satisfaits" },
    { icon: Clock, value: "< 30min", label: "Temps de réponse" },
    { icon: Shield, value: "100%", label: "Garantie RGIE" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
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
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-purple-400/30 rounded-full px-6 py-3 mb-6"
        >
          <Quote className="w-5 h-5 text-purple-400" />
          <span className="text-purple-300 font-medium">Témoignages Clients</span>
        </motion.div>

        <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
          Ils nous font
          <span className="bg-gradient-to-r from-purple-400 via-cyan-500 to-purple-400 bg-clip-text text-transparent">
            {" "}confiance
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Plus de 1000 clients satisfaits nous font confiance pour leurs projets électriques
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-xl border border-gray-800 hover:border-purple-400/50 transition-all duration-300">
              <CardContent className="p-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              delay: 0.6 + index * 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="group perspective-1000"
          >
            <Card className="h-full bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl border border-gray-800 hover:border-purple-400/50 transition-all duration-500 overflow-hidden relative">
              {/* Gradient Top Border */}
              <div className={`h-1 bg-gradient-to-r ${testimonial.gradient}`} />
              
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Quote className="w-6 h-6 text-white" />
                </motion.div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="text-gray-300 mb-6 leading-relaxed italic"
                >
                  &ldquo;{testimonial.text}&rdquo;
                </motion.p>

                {/* Project Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.2 }}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${testimonial.gradient} text-white mb-6`}
                >
                  <Zap className="w-3 h-3 mr-2" />
                  {testimonial.project}
                </motion.div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl border border-purple-400/30">
          <CardContent className="p-12">
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="w-16 h-16 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Obtenez votre devis personnalisé et découvrez pourquoi nous sommes 
              le choix de confiance des propriétaires bruxellois
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" size="lg">
                Demander un devis
              </Button>
              <Button variant="glass" size="lg">
                Voir nos réalisations
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}