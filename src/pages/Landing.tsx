import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { UserPlus, Search, Users, ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useAuth } from "../contexts/AuthContext";

const steps = [
  {
    icon: UserPlus,
    title: "Mapeie",
    description: "Registre suas skills, paixões e vetos em um perfil gamificado.",
    color: "text-accent",
  },
  {
    icon: Search,
    title: "Descubra",
    description: "Explore perfis complementares ao seu com filtros inteligentes.",
    color: "text-accent-secondary",
  },
  {
    icon: Users,
    title: "Conecte",
    description: "Forme sua equipe ideal antes do evento começar.",
    color: "text-success",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "IA de Compatibilidade",
    description: "Análise inteligente cruza skills, paixões e vetos para sugerir matches perfeitos.",
  },
  {
    icon: Zap,
    title: "Radar de Skills",
    description: "Visualize seu perfil e compare com outros através de gráficos interativos.",
  },
  {
    icon: Shield,
    title: "Vetos Inteligentes",
    description: "Marque o que você NÃO faria de jeito nenhum — e nunca seja escalado para isso.",
  },
];

export default function Landing() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-secondary/6 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg-card text-sm text-text-secondary mb-8">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
              Hackathon Tech Floripa 2026
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Encontre sua{" "}
              <span className="text-gradient">equipe ideal.</span>
              <br />
              <span className="text-text-secondary">Antes do kickoff.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              Mapeie suas habilidades, descubra perfis complementares e forme
              um time que realmente funciona — tudo antes do evento começar.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/onboarding")}
                className="group"
              >
                Criar Meu Perfil
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              {!user && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate("/discover")}
                >
                  Explorar Perfis
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Como funciona
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-lg mx-auto">
            Três passos simples para sair do "solo" e entrar no jogo com a equipe certa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card variant="default" padding="lg" className="text-center h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bg-elevated mb-4 ${step.color}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-text-muted mb-2">0{index + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Mais que um formulário
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-lg mx-auto">
            Ferramentas que transformam dados em decisões de equipe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card variant="default" padding="lg" hover className="h-full group">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card variant="default" padding="lg" className="text-center relative overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-accent/10 rounded-full blur-[80px]" />
            </div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Pronto para encontrar seu time?
              </h2>
              <p className="text-text-secondary mb-8 max-w-md mx-auto">
                Crie seu perfil em menos de 5 minutos e comece a explorar a comunidade.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/onboarding")}
                className="group"
              >
                Começar Agora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-text-muted">
            Feito com ☕ por Tony Max & Squad
          </span>
          <span className="text-sm text-text-muted">
            Hackathon Tech Floripa 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
