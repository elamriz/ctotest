"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Zap, 
  Shield, 
  Sparkles,
  Target,
  Users,
  Award,
  MessageCircle
} from "lucide-react";

export default function ModernProcess() {
  const steps = [
    {
      step: "01",
      icon: MessageCircle,
      title: "Contact & Diagnostic",
      description: "Évaluation gratuite de vos besoins avec diagnostic utilisant l&apos;IA et la réalité augmentée",
      features: [
        "Consultation par visioconférence",
        "Analyse IA des photos",
        "Devis détaillé en 24h"
      ],
      duration: "< 24h",
      color: "from-cyan-400 to-blue-500",
      delay: 0.1
    },
    {
      step: "02", 
      icon: Target,
      title: "Planification & Devis",
      description: "Planification précise avec visualisation 3D et calendrier interactif",
      features: [
        "Modélisation 3D",
        "Planning optimisé", 
        "Approbation en ligne"
      ],
      duration: "24-48h",
      color: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      step: "03",
      icon: Zap,
      title: "Exécution Premium",
      description: "Intervention avec technologies de pointe et suivi en temps réel",
      features: [
        "Suivi GPS temps réel",
        "Monitoring IoT",
        "Photos avant/après IA"
      ],
      duration: "1-3 jours",
      color: "from-green-500 to-teal-500", 
      delay: 0.3
    },
    {
      step: "04",
      icon: Shield,
      title: "Validation & Garantie",
      description: "Tests automatisés, certification RGIE et garantie premium étendue",
      features: [
        "Tests automatisés",
        "Certification RGIE",
        "Garantie 10 ans"
      ],
      duration: "Immédiat",
      color: "from-yellow-500 to-orange-500",
      delay: 0.4
    }
  ];

  const guarantees = [
    {
      icon: Clock,
      title: "Respect des délais",
      value: "99.2%",
      description: "Projets livrés dans les temps"
    },
    {
      icon: Award,
      title: "Qualité premium",
      value: "100%",
      description: "Satisfaction client garantie"
    },
    {
      icon: Users,
      title: "Clients satisfaits",
      value: "1000+",
      description: "Projets réalisés avec succès"
    },
    {
      icon: Shield,
      title: "Garantie RGIE",
      value: "À vie",
      description: "Conformité normes belge"
    }
  ];

  return (
    <section id="process" className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-md border border-green-400/30 rounded-full px-6 py-3 mb-6"
          >
            <Target className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Processus Innovant</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            Notre Méthode
            <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
              {" "}Futuriste
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            4 étapes révolutionnaires pour transformer votre projet électrique 
            en expérience exceptionnelle
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                delay: step.delay,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <Card className="h-full bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-xl border border-gray-800 hover:border-green-400/50 transition-all duration-500 overflow-hidden relative">
                
                {/* Step Number */}
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: step.delay + 0.3, type: "spring" }}
                    className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg`}
                  >
                    {step.step}
                  </motion.div>
                </div>

                <CardContent className="p-8 pt-16">
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: step.delay + 0.2 }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: step.delay + 0.4 + featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-400/30 rounded-full px-3 py-1">
                    <Clock className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-300 font-medium">{step.duration}</span>
                  </div>
                </CardContent>

                {/* Connection Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent z-20" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Nos Garanties d&apos;Excellence
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des chiffres qui témoignent de notre engagement qualité
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <guarantee.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-3xl font-black text-white mb-2">{guarantee.value}</div>
                  <div className="text-sm font-semibold text-green-400 mb-2">{guarantee.title}</div>
                  <div className="text-xs text-gray-400">{guarantee.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl border border-green-400/30">
            <CardContent className="p-12">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
                className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Prêt à commencer votre projet ?
              </h3>
              
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Rejoignez plus de 1000 clients satisfaits qui nous font confiance 
                pour leurs projets électriques les plus exigeants
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="neon" size="lg" className="group">
                  <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Démarrer maintenant
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="glass" size="lg">
                  Planifier un appel
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}