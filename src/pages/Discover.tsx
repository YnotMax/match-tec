import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Search, Filter, UserPlus } from "lucide-react";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer
} from "recharts";

interface MemberData {
  userId: string;
  name: string;
  primaryRole: string;
  secondaryRoles?: string[];
  photoURL?: string | null;
  github?: string;
  linkedin?: string;
  skills: Record<string, number>;
  canvas: { loves: string[]; comfort: string[]; veto: string[] };
}

const SKILL_LABELS: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  ux_ui: "UX/UI",
  dados: "Dados",
  hardware_android: "Hardware",
  vibe_coding: "Vibe Code",
};

function getRadarData(skills: Record<string, number>) {
  return Object.entries(SKILL_LABELS).map(([key, label]) => ({
    subject: label,
    value: skills?.[key] ?? 0,
    fullMark: 10,
  }));
}

function MiniRadar({ skills }: { skills: Record<string, number> }) {
  return (
    <div className="w-full h-32">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={getRadarData(skills)} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="#3F3F46" strokeOpacity={0.5} />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#71717A", fontSize: 9 }} />
          <Radar
            dataKey="value"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.2}
            strokeWidth={1.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ProfileCard({ member }: { member: MemberData }) {
  const photoUrl = member.photoURL
    || (member.github ? `https://github.com/${member.github.replace(/^@/, '')}.png` : null);

  const topLoves = member.canvas?.loves?.slice(0, 3) || [];

  return (
    <Card variant="default" padding="none" hover className="overflow-hidden group">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-11 h-11 rounded-full border border-border overflow-hidden bg-bg-elevated flex-shrink-0 flex items-center justify-center">
            {photoUrl ? (
              <img src={photoUrl} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            ) : (
              <span className="text-sm font-semibold text-text-muted">
                {member.name?.charAt(0)?.toUpperCase() || "?"}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-text-primary truncate text-sm">{member.name}</h3>
            {member.github && (
              <p className="text-xs text-text-muted truncate font-mono">@{member.github.replace(/^@/, '')}</p>
            )}
            <p className="text-xs text-accent mt-0.5">{member.primaryRole}</p>
          </div>
        </div>

        {/* Mini Radar */}
        <MiniRadar skills={member.skills} />

        {/* Tags */}
        {topLoves.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {topLoves.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-accent/10 text-accent border border-accent/20"
              >
                ❤️ {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer status */}
      <div className="px-5 py-3 border-t border-border flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
        <span className="text-xs text-text-muted">Buscando Equipe</span>
      </div>
    </Card>
  );
}

export default function Discover() {
  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [members, setMembers] = useState<MemberData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const q = query(collection(db, "members"));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => doc.data() as MemberData);
      setMembers(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const filtered = members.filter((m) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.name?.toLowerCase().includes(q) ||
      m.primaryRole?.toLowerCase().includes(q) ||
      m.canvas?.loves?.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  if (!user) {
    return (
      <div className="max-w-lg mx-auto px-6 py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Faça login para explorar perfis</h1>
        <p className="text-text-secondary mb-8">
          Entre com sua conta Google para descobrir quem está participando.
        </p>
        <Button onClick={signInWithGoogle}>
          Entrar com Google
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Discover</h1>
          <p className="text-sm text-text-secondary mt-1">
            {members.length} {members.length === 1 ? "perfil" : "perfis"} na comunidade
          </p>
        </div>
        <Button variant="secondary" size="sm" onClick={() => navigate("/onboarding")}>
          <UserPlus className="w-4 h-4" />
          Editar Meu Perfil
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        <input
          type="text"
          placeholder="Buscar por nome, role ou tecnologia..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-bg-card border border-border text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
        />
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton h-72 rounded-xl" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-text-muted mb-4">Nenhum perfil encontrado.</p>
          <Button variant="secondary" onClick={() => setSearchQuery("")}>
            Limpar busca
          </Button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((member) => (
            <ProfileCard key={member.userId} member={member} />
          ))}
        </div>
      )}
    </div>
  );
}
