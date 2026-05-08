import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Package, 
  Truck, 
  Battery, 
  Smartphone, 
  Activity, 
  MapPin, 
  BarChart3, 
  AlertCircle,
  Zap,
  Box,
  ClipboardList
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";

const MOCK_TELEMETRY = [
  { time: "08:00", battery: 95, signal: 100, temp: 22 },
  { time: "10:00", battery: 82, signal: 95, temp: 25 },
  { time: "12:00", battery: 65, signal: 80, temp: 28 },
  { time: "14:00", battery: 45, signal: 98, temp: 30 },
  { time: "16:00", battery: 30, signal: 92, temp: 27 },
  { time: "18:00", battery: 15, signal: 85, temp: 24 },
];

const MOCK_INVENTORY = [
  { category: "PALETS", stock: 120, target: 150 },
  { category: "CAIXAS", stock: 450, target: 400 },
  { category: "BATERIAS", stock: 12, target: 20 },
  { category: "COLETORES", stock: 8, target: 10 },
];

export default function Logistica() {
  const [activeAlerts, setActiveAlerts] = useState([
    { id: 1, type: "CRÍTICO", message: "BATERIA_BAIXA: COLETOR_04 (Setor A)", time: "Há 2 min" },
    { id: 2, type: "AVISO", message: "ESTOQUE_BAIXO: FILME_STRETCH", time: "Há 15 min" },
  ]);

  return (
    <div className="min-h-screen bg-neo-bg p-4 md:p-8 space-y-8 pb-20">
      {/* Header section */}
      <div className="bg-neo-yellow neo-border neo-shadow p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
         <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[size:40px_40px]"></div>
         <div className="relative z-10 flex items-center gap-6">
            <div className="bg-neo-black p-4 rotate-3 group-hover:rotate-0 transition-transform">
               <Truck className="text-neo-yellow w-12 h-12" />
            </div>
            <div>
               <h1 className="text-4xl md:text-6xl font-heading font-black text-neo-black leading-none uppercase tracking-tighter" style={{ textShadow: '3px 3px 0 #fff' }}>
                 TERMINAL_LOGÍSTICA
               </h1>
               <p className="font-mono text-sm font-bold bg-neo-black text-white px-2 py-1 inline-block mt-2">ESTADO: OPERACIONAL_HACKATHON_MODE</p>
            </div>
         </div>
         <div className="relative z-10 flex flex-wrap gap-3">
            <div className="bg-white neo-border p-3 flex flex-col items-center min-w-[100px]">
               <span className="text-[10px] font-bold font-mono opacity-50 uppercase">Ativos</span>
               <span className="text-2xl font-black">12/12</span>
            </div>
            <div className="bg-neo-pink text-white neo-border p-3 flex flex-col items-center min-w-[100px] shadow-[4px_4px_0_0_#000]">
               <span className="text-[10px] font-bold font-mono uppercase">Alertas</span>
               <span className="text-2xl font-black">02</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Telemetry & Android Devices */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white neo-border neo-shadow p-6 space-y-6">
            <div className="flex items-center justify-between border-b-4 border-neo-black pb-4">
               <h2 className="text-2xl font-heading font-black uppercase flex items-center gap-2">
                 <Smartphone className="w-6 h-6" /> TELEMETRIA_ANDROID_EMBARCADO
               </h2>
               <Activity className="text-neo-pink animate-pulse" />
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MOCK_TELEMETRY}>
                  <defs>
                    <linearGradient id="colorBattery" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#B8FF29" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#B8FF29" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#000" strokeOpacity={0.1} />
                  <XAxis dataKey="time" stroke="#000" fontStyle="bold" fontSize={12} />
                  <YAxis stroke="#000" fontStyle="bold" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '3px solid #000', 
                      fontWeight: 'bold',
                      borderRadius: 0
                    }} 
                  />
                  <Area type="step" dataKey="battery" stroke="#000" strokeWidth={3} fillOpacity={1} fill="url(#colorBattery)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between font-mono text-[10px] font-bold uppercase p-4 bg-neo-bg border-2 border-dashed border-gray-400">
               <span>DISPOSITIVO: COLETOR_ZEBRA_MC33</span>
               <span>MÉTRICA: DESCARGA_BATERIA_OPERACIONAL</span>
               <span>STATUS: OK</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neo-cyan neo-border neo-shadow p-6">
               <h3 className="text-xl font-heading font-black uppercase mb-6 flex items-center gap-2">
                 <Box className="w-5 h-5" /> STATUS_INVENTÁRIO
               </h3>
               <div className="h-[200px]">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={MOCK_INVENTORY} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="category" type="category" stroke="#000" fontStyle="bold" fontSize={10} width={80} />
                      <Tooltip cursor={{fill: 'rgba(0,0,0,0.1)'}} contentStyle={{ border: '2px solid #000', borderRadius: 0 }} />
                      <Bar dataKey="stock" fill="#000" radius={[0, 4, 4, 0]} />
                    </BarChart>
                 </ResponsiveContainer>
               </div>
            </div>

            <div className="bg-white neo-border neo-shadow p-6 space-y-4">
               <h3 className="text-xl font-heading font-black uppercase mb-6 flex items-center gap-2">
                 <MapPin className="w-5 h-5" /> ÚLTIMOS_CHECKPOINTS
               </h3>
               {[
                 { id: 1, loc: "DOCA_04", time: "09:42", user: "OP_TONY" },
                 { id: 2, loc: "CORREDOR_G", time: "09:38", user: "OP_MAX" },
                 { id: 3, loc: "EXPEDIÇÃO", time: "09:30", user: "OP_IA" },
               ].map(item => (
                 <div key={item.id} className="flex items-center justify-between p-3 border-2 border-neo-black bg-neo-bg hover:translate-x-2 transition-transform cursor-pointer">
                    <div className="flex items-center gap-3">
                       <Zap className="w-4 h-4 text-neo-pink" />
                       <span className="font-mono font-bold text-xs">{item.loc}</span>
                    </div>
                    <span className="font-mono text-[10px] opacity-50">{item.time} | {item.user}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Right Column: Alerts & Strategist */}
        <div className="space-y-8">
          <div className="bg-neo-pink neo-border neo-shadow p-6 text-white">
            <h2 className="text-2xl font-heading font-black uppercase mb-6 flex items-center gap-2 text-white">
               <AlertCircle className="w-6 h-6" /> ALERTAS_CRÍTICOS
            </h2>
            <div className="space-y-4">
              {activeAlerts.map(alert => (
                <div key={alert.id} className="bg-neo-black p-4 neo-border border-white relative group cursor-help">
                   <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-black bg-white text-neo-black px-2 py-0.5">{alert.type}</span>
                      <span className="text-[10px] font-mono opacity-60">{alert.time}</span>
                   </div>
                   <p className="font-mono text-xs font-bold leading-relaxed">{alert.message}</p>
                   <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Zap className="w-4 h-4 text-neo-lime animate-bounce" />
                   </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-white text-neo-black font-heading font-black uppercase hover:bg-neo-lime transition-colors border-[3px] border-neo-black shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-none">
               Limpar Log
            </button>
          </div>

          <div className="bg-white neo-border neo-shadow p-6 space-y-4 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-neo-cyan rotate-45 translate-x-10 -translate-y-10 border-b-[4px] border-l-[4px] border-neo-black"></div>
             <h3 className="text-xl font-heading font-black uppercase flex items-center gap-2">
               <ClipboardList className="w-5 h-5" /> TAREFAS_DO_SQUAD
             </h3>
             <ul className="space-y-4">
               {[
                 { t: "Implementar SDK Coletor", done: true },
                 { t: "Configurar MQTT Broker", done: true },
                 { t: "Dashboard Telemetria", done: false },
                 { t: "Pitch Logística 4.0", done: false },
               ].map((task, i) => (
                 <li key={i} className="flex items-center gap-3 font-mono text-sm font-bold">
                    <div className={`w-5 h-5 border-[3px] border-neo-black flex items-center justify-center ${task.done ? 'bg-neo-lime' : 'bg-white'}`}>
                       {task.done && <Zap className="w-3 h-3 text-black" />}
                    </div>
                    <span className={task.done ? 'line-through opacity-50' : ''}>{task.t}</span>
                 </li>
               ))}
             </ul>
          </div>

          <div className="bg-neo-black p-6 neo-border neo-shadow text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
             </div>
             <h3 className="text-xl font-heading font-black uppercase mb-4 text-neo-lime">DICA_DO_ORÁCULO</h3>
             <p className="font-mono text-xs font-bold leading-relaxed relative z-10 italic">
               "Focar no hardware industrial real (Coletores Android) é o seu maior trunfo. Garanta que a telemetria de bateria seja um ponto central do pitch — os patrocinadores ADORAM métricas de durabilidade operacional."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
