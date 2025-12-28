---
title: "Projects"
permalink: /projects/
layout: single
author_profile: true
---

Below are selected projects spanning **analog IC design**, **power conversion**, and **PCB implementation**. :contentReference[oaicite:12]{index=12} :contentReference[oaicite:13]{index=13}

## Analog IC / PMIC Design

### Two-Stage Miller-Compensated CMOS Op-Amp (IBM 130 nm)
- gm/ID-driven sizing + small-signal design flow to meet unity-gain bandwidth and phase-margin targets under load and single-supply constraints. :contentReference[oaicite:14]{index=14}  
- Validated open-loop gain, GBW/PM, slew rate, output swing, CMRR, and power; ensured saturation and complied with the “single ideal current-source” requirement. :contentReference[oaicite:15]{index=15}  

### Phase-Locked Loop (PLL) — Design & Implementation
- Built major blocks from scratch: **PFD, charge pump, current-starved VCO, frequency divider** using Cadence. :contentReference[oaicite:16]{index=16}  

## Power Electronics / Gate Drivers

### 12 V → 3.3 V, 1 A, 2 MHz Synchronous Buck (TSMC 180 nm HV BCD)
- Designed a half-bridge buck in Cadence Virtuoso using the TSMC 180 nm HV BCD PDK; MOSFET width sweeps for loss/efficiency tradeoffs. :contentReference[oaicite:17]{index=17}  
- Implemented gate driver chain: up/down level shifters, bootstrap, dead-time; validated ripple and inductor current behavior in ADE. :contentReference[oaicite:18]{index=18}  

## PCB / Hardware Implementation

### Hybrid Converter PCB — 4-Layer Design (Altium)
- Full schematic + layout from scratch; custom symbols/footprints; Gerber/drill generation. :contentReference[oaicite:19]{index=19}  
- EMI-aware stackup and layout: inner GND/VDD planes, minimized switching loop/returns, close decoupling, partitioned power/control domains. :contentReference[oaicite:20]{index=20}  

## Systems / Other Projects

### Single-Phase Sinewave Inverter (SPWM, H-Bridge)
- Simulated in Proteus; modeled in Simulink/Simscape; built PCB-level prototype. :contentReference[oaicite:21]{index=21}  

### ECG-Based Biometric Recognition
- Preprocessing + feature extraction with filtering and MODWT; classification using Weighted KNN and cross-validation. :contentReference[oaicite:22]{index=22}  

### RISC-V Core — Design, Verification, Synthesis
- RTL + verification; synthesis in QuartusPrime. :contentReference[oaicite:23]{index=23}  
