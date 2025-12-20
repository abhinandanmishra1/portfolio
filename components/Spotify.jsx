"use client";
import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Spotify = ({ track }) => {
    // If no track is provided, we can show a "Not listening" state
    const isPlaying = !!track;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 left-4 z-[100] bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-3 max-w-[280px]"
        >
            <div className="text-[#1DB954] text-2xl">
                <FaSpotify className={isPlaying ? "animate-spin-slow" : ""} />
            </div>
            <div className="overflow-hidden">
                <p className="text-[10px] uppercase tracking-wider text-white/50 font-bold">
                    {isPlaying ? "Currently Listening" : "Last Played"}
                </p>
                <div className="flex flex-col">
                    <span className="text-white text-sm font-semibold truncate">
                        {track?.title || "Not Playing"}
                    </span>
                    <span className="text-white/70 text-xs truncate">
                        {track?.artist || "Spotify"}
                    </span>
                </div>
            </div>
            {isPlaying && (
                <div className="flex gap-1 items-end h-3 mb-1">
                    <motion.div animate={{ height: [4, 12, 6, 10, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-0.5 bg-[#1DB954]" />
                    <motion.div animate={{ height: [8, 4, 12, 6, 8] }} transition={{ repeat: Infinity, duration: 1 }} className="w-0.5 bg-[#1DB954]" />
                    <motion.div animate={{ height: [12, 8, 4, 10, 12] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-0.5 bg-[#1DB954]" />
                </div>
            )}
        </motion.div>
    );
};

export default Spotify;
