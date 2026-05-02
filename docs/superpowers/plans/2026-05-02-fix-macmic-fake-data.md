# Fix MacMic Fake Data Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all fabricated data in MacMic products.json, solutions.json, and support.json with real product data

**Architecture:** Use SearchReplace to systematically replace fabricated product specifications, FAQs, and descriptions with accurate MacMic product information

**Tech Stack:** JSON editing, product research

---

## Issues Found

### Products.json Issues:
1. **IGBT Modules - Product 3 (MMG600WB060B)**: Fake specs (25V DC, 1A, SOP-8 package)
2. **IGBT Modules - Product 4 (MMG450WB060B)**: Fake specs (25V DC, 1A, SOP-8 package)
3. **FRED Modules - FAQs**: Microcontroller content (ARM core, Flash, RAM) instead of diode content
4. **Power Discrete - FAQs**: Microcontroller content instead of power device content
5. **MOSFET Modules - companionParts**: Generic placeholders (COMP-A, COMP-B, COMP-C)

### Solutions.json Issues:
Need to verify all 3 solutions have real content

### Support.json Issues:
Need to verify all 5 articles have real content

---

## Task 1: Fix IGBT Modules Product 3 (MMG600WB060B)

**Files:**
- Modify: `c:\Users\ymlt\Desktop\3\data\macmic\products.json`

**Real Product Data:**
- MMG600WB060B is a 600V 600A IGBT module in WB (welding base) package
- Used for high-power welding applications
- Real specs: 600V, 600A, Vce(sat) ~1.8V, T1A or similar package

- [ ] **Step 1: Replace fake MMG600WB060B data with real specifications**

Search for the MMG600WB060B section and replace with real data including:
- Correct voltage (600V)
- Correct current (600A)  
- Correct package (WB or T1A)
- Real description for welding applications
- Proper FAQs about IGBT modules

---

## Task 2: Fix IGBT Modules Product 4 (MMG450WB060B)

**Files:**
- Modify: `c:\Users\ymlt\Desktop\3\data\macmic\products.json`

**Real Product Data:**
- MMG450WB060B is a 600V 450A IGBT module
- Used for motor drives and industrial applications
- Real specs: 600V, 450A, Vce(sat) ~1.8V

- [ ] **Step 2: Replace fake MMG450WB060B data with real specifications**

Replace with correct:
- Voltage: 600V
- Current: 450A
- Package: WB or T1A
- Real description for motor drive applications
- Proper FAQs

---

## Task 3: Fix FRED Modules FAQs

**Files:**
- Modify: `c:\Users\ymlt\Desktop\3\data\macmic\products.json`

**Issue:** FAQs mention ARM core, Flash, RAM - this is microcontroller content, not FRED diode content

- [ ] **Step 3: Replace microcontroller FAQs with FRED diode FAQs**

Replace fake FAQs with real FRED-related questions:
- What are the main applications for MMF100J060D1?
- How does recovery time affect switching losses?
- How to select FRED for PFC applications?
- What is soft recovery and why is it important?
- How to parallel FRED modules for higher current?

---

## Task 4: Fix Power Discrete FAQs

**Files:**
- Modify: `c:\Users\ymlt\Desktop\3\data\macmic\products.json`

**Issue:** FAQs mention ARM core, JTAG/SWD - this is microcontroller content

- [ ] **Step 4: Replace microcontroller FAQs with power discrete FAQs**

Replace with real questions about:
- TO-247 thermal design
- When to use discrete vs modules
- Gate drive for discrete IGBTs
- Parallel operation of discrete devices

---

## Task 5: Fix MOSFET Modules companionParts

**Files:**
- Modify: `c:\Users\ymlt\Desktop\3\data\macmic\products.json`

**Issue:** companionParts show "COMP-A", "COMP-B", "COMP-C" placeholders

- [ ] **Step 5: Replace placeholder companionParts with real MacMic products**

Replace with actual companion products:
- Gate drivers (MGD series)
- Current sensors
- Thermal interface materials

---

## Task 6: Verify Solutions.json Content

**Files:**
- Read: `c:\Users\ymlt\Desktop\3\data\macmic\solutions.json`
- Modify if needed

- [ ] **Step 6: Check all 3 solutions for fabricated data and fix if found**

---

## Task 7: Verify Support.json Content

**Files:**
- Read: `c:\Users\ymlt\Desktop\3\data\macmic\support.json`
- Modify if needed

- [ ] **Step 7: Check all 5 support articles for fabricated data and fix if found**

---

## Task 8: Final Verification

- [ ] **Step 8: Run validation to ensure all paths are correct and data is complete**

Run any available validation scripts to check:
- All product paths are valid
- No placeholder text remains
- JSON is valid
