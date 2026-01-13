"use client";

import { useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Select } from "@/components/ui/input";
import { 
  Zap, 
  Phone, 
  Clock, 
  Shield, 
  Users, 
  Award,
  Sparkles,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

export default function ModernHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [homeType, setHomeType] = useState("");
  const [workType, setWorkType] = useState("");
  const [customWorkType, setCustomWorkType] = useState("");
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const homeTypes = [
    { value: "appartement", label: "Appartement" },
    { value: "maison", label: "Maison" },
    { value: "bureau", label: "Bureau" },
    { value: "commerce", label: "Commerce" },
  ];

  const workTypes = [
    { value: "installation", label: "Installation électrique" },
    { value: "renovation", label: "Rénovation" },
    { value: "depannage", label: "Dépannage d'urgence" },
    { value: "mise-aux-normes", label: "Mise aux normes RGIE" },
    { value: "domotique", label: "Domotique" },
    { value: "autre", label: "Autre" },
  ];

  // Générer les particules de manière stable
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: (i * 7) % 100,
      top: (i * 13) % 100,
      delay: (i * 0.2) % 2,
      duration: 2 + (i % 3),
    }));
  }, []);

  const handleGetQuote = () => {
    if (!homeType || !workType) {
      alert("Veuillez sélectionner le type de bien et le type de travaux");
      return;
    }
    
    const message = `Bonjour, je souhaite obtenir un devis pour :
- Type de bien : ${homeTypes.find(t => t.value === homeType)?.label}
- Type de travaux : ${workTypes.find(t => t.value === workType)?.label}
${workType === "autre" ? `- Description : ${customWorkType}` : ""}`;

    window.open(`https://wa.me/32470123456?text=${encodeURIComponent(message)}`, "_blank");
  };

  const stats = [
    { icon: Clock, value: "24/7", label: "Disponible" },
    { icon: Award, value: "15+", label: "Ans d'expérience" },
    { icon: Users, value: "1000+", label: "Clients satisfaits" },
    { icon: Shield, value: "100%", label: "Aux normes RGIE" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-600/20"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10"
        />
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-50 flex items-center justify-between p-6 lg:px-8"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">ÉlecPro</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Contact
          </a>
          <Button variant="neon" size="sm">
            Devis gratuit
          </Button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-6 lg:px-8"
      >
        {/* Left Column - Content */}
        <div className="flex-1 max-w-2xl mb-12 lg:mb-0 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full px-4 py-2 mb-6"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-cyan-400 rounded-full"
              />
              <span className="text-sm text-cyan-300">Intervention en moins de 30 minutes</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              Votre Électricien
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Futuriste
              </span>
              <br />
              à Bruxelles
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-xl"
            >
              Installation électrique de nouvelle génération. 
              Technologie de pointe, service premium, 
              disponible 24/7 pour votre tranquillité d&apos;esprit.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                onClick={handleGetQuote}
                variant="neon"
                size="lg"
                className="group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Devis instantané
              </Button>
              <Button variant="glass" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                0470 12 34 56
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Quote Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex-1 max-w-md"
        >
          <Card className="bg-gradient-to-br from-black/60 to-purple-900/20 backdrop-blur-xl border border-cyan-400/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Devis en 2 étapes
                </h2>
                <p className="text-gray-400">
                  Réponse sous 15 minutes
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    Type de bien
                  </label>
                  <Select
                    value={homeType}
                    onChange={(e) => setHomeType(e.target.value)}
                  >
                    <option value="">Sélectionnez</option>
                    {homeTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-cyan-300 mb-2">
                    Type de travaux
                  </label>
                  <Select
                    value={workType}
                    onChange={(e) => setWorkType(e.target.value)}
                  >
                    <option value="">Sélectionnez</option>
                    {workTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </Select>
                </div>

                {workType === "autre" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-cyan-300 mb-2">
                      Décrivez vos besoins
                    </label>
                    <Input
                      value={customWorkType}
                      onChange={(e) => setCustomWorkType(e.target.value)}
                      placeholder="Ex: installation domotique..."
                    />
                  </motion.div>
                )}

                <Button
                  onClick={handleGetQuote}
                  variant="neon"
                  size="lg"
                  className="w-full group"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 mr-2"
                  >
                    ⚡
                  </motion.div>
                  Obtenir mon devis
                </Button>

                <div className="text-center text-xs text-gray-400">
                  Réponse garantie sous 15 minutes
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-cyan-400"
        >
          <span className="text-sm mb-2">Découvrir</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}