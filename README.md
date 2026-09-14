# Liquid Desiccant Outdoor Air System (LD-DOAS) Research Archive

> **Core Research Topic**: Paradigm Shift from Conventional Condensation Cooling Dehumidification to Ionic Liquid (CrecoPLUS 5100C / [EMIM][DEP]) Liquid Desiccant Outdoor Air Systems.

---

## 📌 1. Background & Engineering Paradigm Shift

### Why Move from Cooling Coil Dehumidification to Liquid Desiccant (LD-DOAS)?
1. **Elimination of Deep Subcooling & Reheat**:
   - *Conventional*: Air must be chilled below its dew point (typically 10–12 °C) to condense moisture, then reheated to comfortable supply air temperatures (18–20 °C), consuming excessive chiller and reheat power.
   - *Liquid Desiccant (LD-DOAS)*: Moisture is absorbed directly at moderate temperatures (15–20 °C) driven by vapor pressure difference. Latent and sensible loads are completely decoupled, saving **30–50% annual cooling/dehumidification energy**.
2. **Hygiene & Air Quality**:
   - Condensation cooling creates wet cooling coils and drain pans where mold and bacteria proliferate.
   - Ionic liquids are non-volatile and exhibit natural antimicrobial/bactericidal properties without wet drain pans.
3. **Overcoming Traditional Halide Salt (LiCl/LiBr) Pitfalls**:
   - Traditional salts suffer from severe metal duct/coil corrosion and risk of crystallization (salting out).
   - **CrecoPLUS 5100C ([EMIM][DEP])** is **100% non-corrosive to metals**, non-crystallizing, has near-zero vapor pressure (no chemical evaporation into supply air), and can be regenerated using low-grade waste heat or heat pump condenser heat (50–65 °C).

---

## 📚 2. Master Literature Index

| Category | Year | First Author | Title | Key Parameter / Engineering Insight | DOI Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **System** | 2014 | Jeong, J. W. | *Annual operating energy savings of liquid desiccant and evaporative-cooling-assisted 100% outdoor air system* | Seoul climate: **51% annual operating energy reduction** compared to conventional VAV | [10.1016/j.enbuild.2014.03.006](https://doi.org/10.1016/j.enbuild.2014.03.006) |
| **System** | 2013 | Jeong, J. W. | *Energy saving potential of liquid desiccant in evaporative-cooling-assisted 100% outdoor air system* | Complete decoupling of sensible/latent loads and reheat elimination | [10.1016/j.energy.2013.07.018](https://doi.org/10.1016/j.energy.2013.07.018) |
| **Fluid (IL)** | 2022 | Luo, J. | *A state-of-the-art review on the liquid properties regarding energy and environmental performance in liquid desiccant air-conditioning systems* | Comprehensive review of LiCl vs. Glycols vs. ILs (vapor pressure, viscosity, corrosion, crystallization) | [10.1016/j.apenergy.2022.119853](https://doi.org/10.1016/j.apenergy.2022.119853) |
| **Fluid (IL)** | 2022 | Skonieczny, M. | *Thermodynamic Properties of {Diethyl Phosphate-Based Ionic Liquid (1) + Ethanol (2)} Systems, Experimental Data and Correlation* | Pure [EMIM][DEP] viscosity at 25 °C is ~280–320 mPa·s; working concentration (70–80 wt%) is 20–50 mPa·s | [10.1021/acs.jced.1c00924](https://doi.org/10.1021/acs.jced.1c00924) |
| **CrecoPLUS** | 2025 | Fu, B. R. | *Heat and mass transfer in an internally cooled ionic liquid dehumidification system: Experimental study and empirical modeling* | **CrecoPLUS 5100C tested**: Fin-tube internally-cooled absorber; increasing flow rate increased wetting, boosting efficiency by **238%** (Nu, Sh correlations provided) | [10.1016/j.csite.2025.107483](https://doi.org/10.1016/j.csite.2025.107483) |
| **CrecoPLUS** | 2026 | Chen, C. H. | *New Ionic Liquid for Liquid Desiccant Air Conditioning System* | **ITRI 3,000 CMH pilot plant**: Real-scale testing of [EMIM][DEP], matching LiCl dehumidification with zero metal corrosion | [10.1051/e3sconf/202671601008](https://doi.org/10.1051/e3sconf/202671601008) |
| **Dynamics** | 2017 | Wang, L. | *A dynamic dehumidifier model for simulations and control of liquid desiccant hybrid air conditioning systems* | Models liquid holdup ({sol}$) and thermal mass, quantifying control lag and time constant (tau) | [10.1016/j.enbuild.2017.01.073](https://doi.org/10.1016/j.enbuild.2017.01.073) |
| **Dynamics** | 2017 | Wang, L. | *Experimental study of dynamic characteristics of liquid desiccant dehumidification processes* | Experimental step response, settling time, and time constant of outlet air humidity/temperature | [10.1080/23744731.2016.1211875](https://doi.org/10.1080/23744731.2016.1211875) |
| **Dynamics** | 2019 | Li, W. | *State-space model for transient behavior of membrane-based liquid desiccant dehumidifier* | State-space dynamic model; solution-side capacitance exhibits larger time delay than air side | [10.1016/j.ijheatmasstransfer.2019.118711](https://doi.org/10.1016/j.ijheatmasstransfer.2019.118711) |
| **Integration**| 2022 | Wang, L. | *Review of liquid desiccant air dehumidification systems coupled with heat pump: System configurations, component design, and performance* | Single heat pump integration: Evaporator internally cools dehumidifier (15–20 °C), condenser regenerates solution (50–65 °C) | [10.1016/j.enbuild.2022.112655](https://doi.org/10.1016/j.enbuild.2022.112655) |

---

## 🗂️ 3. Repository Directory Structure

`	ext
research_paper/
├── README.md                          # Master literature index & project overview
├── templates/
│   └── paper_note_template.md         # Markdown template for recording new papers
├── 01_hvac-ldas/                      # System-level LD-DOAS vs. conventional DOAS
│   ├── 2013_Jeong_Potential_LD_DOAS.md
│   └── 2014_Jeong_EnergySavings_LD_DOAS.md
├── 02_control-dynamics/               # Transient response, holdup, time constants & control
│   ├── 2016_Wang_DynamicCharacteristics_TimeConstant.md
│   ├── 2017_Wang_DynamicDehumidifierModel.md
│   └── 2019_Li_StateSpaceTransientDehumidifier.md
├── 03_ionic-liquids/                  # Ionic liquid properties, viscosity & thermodynamics
│   ├── 2022_Luo_Properties_IL_LiquidDesiccant.md
│   └── 2022_Skonieczny_EMIMDEP_Thermodynamics.md
└── 04_crecoplus-system/               # CrecoPLUS 5100C ([EMIM][DEP]) specific systems
    ├── 2022_Wang_HeatPump_LiquidDesiccant_Integration.md
    ├── 2025_Fu_CrecoPLUS_HeatMassTransfer.md
    └── 2026_Chen_CrecoPLUS_3000CMH_LDAC.md
`

---

## ⚙️ 4. Key Design Guidelines for CrecoPLUS 5100C DOAS

1. **Avoid Liquid Flow Modulation (VAV Liquid Control)**:
   - High viscosity (20–50 mPa·s) causes surface dewetting at reduced flow rates.
   - Maintain a constant high liquid circulation rate to guarantee >90% fin-tube surface wetting.
2. **Primary Control Variable**:
   - Control supply air humidity by modulating the **internal cooling water valve** (chilled water temperature/flow rate), which has a fast thermal time constant.
3. **Contactor Selection**:
   - **Do NOT use spray nozzles** (causes high pressure drop, droplet drift, poor atomization).
   - Use **internally-cooled fin-tube falling-film contactors** (counter-flow configuration).
4. **Pumping & Piping**:
   - Size piping one diameter step up compared to standard water lines to limit laminar flow friction losses.
