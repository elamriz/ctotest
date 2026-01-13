"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
  ArrowUp,
  Heart,
  Sparkles
} from "lucide-react";

export default function ModernFooter() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "0470 12 34 56",
      subtitle: "Urgence 24/7",
      link: "tel:+32470123456"
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@elecpro-bruxelles.be",
      subtitle: "Réponse sous 2h",
      link: "mailto:contact@elecpro-bruxelles.be"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Bruxelles & Agglomération",
      subtitle: "Intervention rapide",
      link: "#"
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "24h/24 - 7j/7",
      subtitle: "Service continu",
      link: "#"
    }
  ];

  const services = [
    "Installation électrique",
    "Rénovation électrique", 
    "Dépannage d'urgence",
    "Domotique",
    "Installation solaire",
    "Maintenance"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    ÉlecPro
                  </div>
                  <div className="text-sm text-gray-400">Bruxelles</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Votre électricien de confiance à Bruxelles. Technologie de pointe, 
                service premium, satisfaction garantie à 100%.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/20`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                Contact
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="block group"
                  >
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </div>
                        <div className="text-sm text-gray-400">{info.subtitle}</div>
                        <div className="text-xs text-gray-500">{info.title}</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                Services
              </h3>
              
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.a
                    key={index}
                    href="#services"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5, color: "#06b6d4" }}
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                  >
                    {service}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 backdrop-blur-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Send className="w-5 h-5 mr-2 text-cyan-400" />
                    Devis Instantané
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-sm">
                    Obtenez votre devis personnalisé en moins de 15 minutes
                  </p>
                  
                  <Button 
                    variant="neon" 
                    size="lg" 
                    className="w-full mb-4"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Devis gratuit
                  </Button>
                  
                  <div className="text-center">
                    <div className="text-xs text-gray-400">
                      Réponse garantie sous 15 minutes
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 bg-black/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span className="text-gray-400 text-sm">
                  © {currentYear} ÉlecPro Bruxelles. Fait avec
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                </motion.div>
                <span className="text-gray-400 text-sm">à Bruxelles</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Mentions légales
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  Politique de confidentialité
                </a>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}