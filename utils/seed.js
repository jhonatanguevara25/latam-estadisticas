import csv from "csvtojson";
import { DataTypes, Sequelize } from "sequelize";

const dbname = "yarashop";
const username = "admin123";
const password = "YGTl63QI";
const host = "yarashop.database.windows.net";

export const db = new Sequelize(dbname, username, password, {
  host,
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  dialectOptions: {
    encrypt: true,
  },
});

try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Maybe missing IP or credentials");
  console.error("Unable to connect to the database:", error);
}

export const Entry = db.define(
  "Entry",
  {
    serieId: {
      type: DataTypes.STRING,
    },
    serieText: {
      type: DataTypes.STRING,
    },
    countryId: {
      type: DataTypes.STRING,
    },
    yearId: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    // Other model options go here
    timestamps: false,
  }
);

console.log(Entry === db.models.Entry); // true

let number = 1;

async function getCsvValues(path) {
  return await csv().fromFile(path);
}

const serieText = [
  {
    name: "Adolescent fertility rate (births per 1,000 women ages 15-19)",
    code: "SP.ADO.TFRT",
  },
  {
    name: "Adults (ages 15+) and children (0-14 years) living with HIV",
    code: "SH.HIV.TOTL",
  },
  {
    name: "Adults (ages 15+) and children (ages 0-14) newly infected with HIV",
    code: "SH.HIV.INCD.TL",
  },
  {
    name: "Adults (ages 15+) living with HIV",
    code: "SH.DYN.AIDS",
  },
  {
    name: "Adults (ages 15-49) newly infected with HIV",
    code: "SH.HIV.INCD",
  },
  {
    name: "Age at first marriage, female",
    code: "SP.DYN.SMAM.FE",
  },
  {
    name: "Age at first marriage, male",
    code: "SP.DYN.SMAM.MA",
  },
  {
    name: "Age dependency ratio (% of working-age population)",
    code: "SP.POP.DPND",
  },
  {
    name: "Age dependency ratio, old",
    code: "SP.POP.DPND.OL",
  },
  {
    name: "Age dependency ratio, young",
    code: "SP.POP.DPND.YG",
  },
  {
    name: "Age population, age 00, female, interpolated",
    code: "SP.POP.AG00.FE.IN",
  },
  {
    name: "Age population, age 00, male, interpolated",
    code: "SP.POP.AG00.MA.IN",
  },
  {
    name: "Age population, age 01, female, interpolated",
    code: "SP.POP.AG01.FE.IN",
  },
  {
    name: "Age population, age 01, male, interpolated",
    code: "SP.POP.AG01.MA.IN",
  },
  {
    name: "Age population, age 02, female, interpolated",
    code: "SP.POP.AG02.FE.IN",
  },
  {
    name: "Age population, age 02, male, interpolated",
    code: "SP.POP.AG02.MA.IN",
  },
  {
    name: "Age population, age 03, female, interpolated",
    code: "SP.POP.AG03.FE.IN",
  },
  {
    name: "Age population, age 03, male, interpolated",
    code: "SP.POP.AG03.MA.IN",
  },
  {
    name: "Age population, age 04, female, interpolated",
    code: "SP.POP.AG04.FE.IN",
  },
  {
    name: "Age population, age 04, male, interpolated",
    code: "SP.POP.AG04.MA.IN",
  },
  {
    name: "Age population, age 05, female, interpolated",
    code: "SP.POP.AG05.FE.IN",
  },
  {
    name: "Age population, age 05, male, interpolated",
    code: "SP.POP.AG05.MA.IN",
  },
  {
    name: "Age population, age 06, female, interpolated",
    code: "SP.POP.AG06.FE.IN",
  },
  {
    name: "Age population, age 06, male, interpolated",
    code: "SP.POP.AG06.MA.IN",
  },
  {
    name: "Age population, age 07, female, interpolated",
    code: "SP.POP.AG07.FE.IN",
  },
  {
    name: "Age population, age 07, male, interpolated",
    code: "SP.POP.AG07.MA.IN",
  },
  {
    name: "Age population, age 08, female, interpolated",
    code: "SP.POP.AG08.FE.IN",
  },
  {
    name: "Age population, age 08, male, interpolated",
    code: "SP.POP.AG08.MA.IN",
  },
  {
    name: "Age population, age 09, female, interpolated",
    code: "SP.POP.AG09.FE.IN",
  },
  {
    name: "Age population, age 09, male, interpolated",
    code: "SP.POP.AG09.MA.IN",
  },
  {
    name: "Age population, age 10, female, interpolated",
    code: "SP.POP.AG10.FE.IN",
  },
  {
    name: "Age population, age 10, male, interpolated",
    code: "SP.POP.AG10.MA.IN",
  },
  {
    name: "Age population, age 11, female, interpolated",
    code: "SP.POP.AG11.FE.IN",
  },
  {
    name: "Age population, age 11, male, interpolated",
    code: "SP.POP.AG11.MA.IN",
  },
  {
    name: "Age population, age 12, female, interpolated",
    code: "SP.POP.AG12.FE.IN",
  },
  {
    name: "Age population, age 12, male, interpolated",
    code: "SP.POP.AG12.MA.IN",
  },
  {
    name: "Age population, age 13, female, interpolated",
    code: "SP.POP.AG13.FE.IN",
  },
  {
    name: "Age population, age 13, male, interpolated",
    code: "SP.POP.AG13.MA.IN",
  },
  {
    name: "Age population, age 14, female, interpolated",
    code: "SP.POP.AG14.FE.IN",
  },
  {
    name: "Age population, age 14, male, interpolated",
    code: "SP.POP.AG14.MA.IN",
  },
  {
    name: "Age population, age 15, female, interpolated",
    code: "SP.POP.AG15.FE.IN",
  },
  {
    name: "Age population, age 15, male, interpolated",
    code: "SP.POP.AG15.MA.IN",
  },
  {
    name: "Age population, age 16, female, interpolated",
    code: "SP.POP.AG16.FE.IN",
  },
  {
    name: "Age population, age 16, male, interpolated",
    code: "SP.POP.AG16.MA.IN",
  },
  {
    name: "Age population, age 17, female, interpolated",
    code: "SP.POP.AG17.FE.IN",
  },
  {
    name: "Age population, age 17, male, interpolated",
    code: "SP.POP.AG17.MA.IN",
  },
  {
    name: "Age population, age 18, female, interpolated",
    code: "SP.POP.AG18.FE.IN",
  },
  {
    name: "Age population, age 18, male, interpolated",
    code: "SP.POP.AG18.MA.IN",
  },
  {
    name: "Age population, age 19, female, interpolated",
    code: "SP.POP.AG19.FE.IN",
  },
  {
    name: "Age population, age 19, male, interpolated",
    code: "SP.POP.AG19.MA.IN",
  },
  {
    name: "Age population, age 20, female, interpolated",
    code: "SP.POP.AG20.FE.IN",
  },
  {
    name: "Age population, age 20, male, interpolated",
    code: "SP.POP.AG20.MA.IN",
  },
  {
    name: "Age population, age 21, female, interpolated",
    code: "SP.POP.AG21.FE.IN",
  },
  {
    name: "Age population, age 21, male, interpolated",
    code: "SP.POP.AG21.MA.IN",
  },
  {
    name: "Age population, age 22, female, interpolated",
    code: "SP.POP.AG22.FE.IN",
  },
  {
    name: "Age population, age 22, male, interpolated",
    code: "SP.POP.AG22.MA.IN",
  },
  {
    name: "Age population, age 23, female, interpolated",
    code: "SP.POP.AG23.FE.IN",
  },
  {
    name: "Age population, age 23, male, interpolated",
    code: "SP.POP.AG23.MA.IN",
  },
  {
    name: "Age population, age 24, female, interpolated",
    code: "SP.POP.AG24.FE.IN",
  },
  {
    name: "Age population, age 24, male, interpolated",
    code: "SP.POP.AG24.MA.IN",
  },
  {
    name: "Age population, age 25, female, interpolated",
    code: "SP.POP.AG25.FE.IN",
  },
  {
    name: "Age population, age 25, male, interpolated",
    code: "SP.POP.AG25.MA.IN",
  },
  {
    name: "AIDS estimated deaths (UNAIDS estimates)",
    code: "SH.DYN.AIDS.DH",
  },
  {
    name: "Antiretroviral therapy coverage (% of people living with HIV)",
    code: "SH.HIV.ARTC.ZS",
  },
  {
    name: "Antiretroviral therapy coverage for PMTCT (% of pregnant women living with HIV)",
    code: "SH.HIV.PMTC.ZS",
  },
  {
    name: "ARI treatment (% of children under 5 taken to a health provider)",
    code: "SH.STA.ARIC.ZS",
  },
  {
    name: "Birth rate, crude (per 1,000 people)",
    code: "SP.DYN.CBRT.IN",
  },
  {
    name: "Births attended by skilled health staff (% of total)",
    code: "SH.STA.BRTC.ZS",
  },
  {
    name: "Capital health expenditure (% of GDP)",
    code: "SH.XPD.KHEX.GD.ZS",
  },
  {
    name: "Cause of death, by communicable diseases and maternal, prenatal and nutrition conditions (% of total)",
    code: "SH.DTH.COMM.ZS",
  },
  {
    name: "Cause of death, by injury (% of total)",
    code: "SH.DTH.INJR.ZS",
  },
  {
    name: "Cause of death, by non-communicable diseases (% of total)",
    code: "SH.DTH.NCOM.ZS",
  },
  {
    name: "Children (0-14) living with HIV",
    code: "SH.HIV.0014",
  },
  {
    name: "Children (ages 0-14) newly infected with HIV",
    code: "SH.HIV.INCD.14",
  },
  {
    name: "Children orphaned by HIV/AIDS",
    code: "SH.HIV.ORPH",
  },
  {
    name: "Children with fever receiving antimalarial drugs (% of children under age 5 with fever)",
    code: "SH.MLR.TRET.ZS",
  },
  {
    name: "Community health workers (per 1,000 people)",
    code: "SH.MED.CMHW.P3",
  },
  {
    name: "Completeness of birth registration (%)",
    code: "SP.REG.BRTH.ZS",
  },
  {
    name: "Completeness of birth registration, female (%)",
    code: "SP.REG.BRTH.FE.ZS",
  },
  {
    name: "Completeness of birth registration, male (%)",
    code: "SP.REG.BRTH.MA.ZS",
  },
  {
    name: "Completeness of birth registration, rural (%)",
    code: "SP.REG.BRTH.RU.ZS",
  },
  {
    name: "Completeness of birth registration, urban (%)",
    code: "SP.REG.BRTH.UR.ZS",
  },
  {
    name: "Completeness of death registration with cause-of-death information (%)",
    code: "SP.REG.DTHS.ZS",
  },
  {
    name: "Comprehensive correct knowledge of HIV/AIDS, ages 15-24, female (2 prevent ways and reject 3 misconceptions)",
    code: "SH.HIV.1524.KW.FE.ZS",
  },
  {
    name: "Comprehensive correct knowledge of HIV/AIDS, ages 15-24, male (2 prevent ways and reject 3 misconceptions)",
    code: "SH.HIV.1524.KW.MA.ZS",
  },
  {
    name: "Comprehensive correct knowledge of HIV/AIDS, ages 15-49, female (2 prevent ways and reject 3 misconceptions)",
    code: "SH.HIV.KNOW.FE.ZS",
  },
  {
    name: "Comprehensive correct knowledge of HIV/AIDS, ages 15-49, male (2 prevent ways and reject 3 misconceptions)",
    code: "SH.HIV.KNOW.MA.ZS",
  },
  {
    name: "Condom use at last high-risk sex, adult female (% ages 15-49)",
    code: "SH.CON.AIDS.FE.ZS",
  },
  {
    name: "Condom use at last high-risk sex, adult male (% ages 15-49)",
    code: "SH.CON.AIDS.MA.ZS",
  },
  {
    name: "Condom use, population ages 15-24, female (% of females ages 15-24)",
    code: "SH.CON.1524.FE.ZS",
  },
  {
    name: "Condom use, population ages 15-24, male (% of males ages 15-24)",
    code: "SH.CON.1524.MA.ZS",
  },
  {
    name: "Consumption of iodized salt (% of households)",
    code: "SN.ITK.SALT.ZS",
  },
  {
    name: "Contraceptive prevalence, any method (% of married women ages 15-49)",
    code: "SP.DYN.CONU.ZS",
  },
  {
    name: "Contraceptive prevalence, any method (% of sexually active unmarried women ages 15-49)",
    code: "SP.DYN.CONU.SA.ZS",
  },
  {
    name: "Contraceptive prevalence, any modern method (% of married women ages 15-49)",
    code: "SP.DYN.CONM.ZS",
  },
  {
    name: "Contraceptive prevalence, any modern method (% of sexually active unmarried women ages 15-49)",
    code: "SP.DYN.CONM.SA.ZS",
  },
  {
    name: "Current health expenditure (% of GDP)",
    code: "SH.XPD.CHEX.GD.ZS",
  },
  {
    name: "Current health expenditure per capita (current US$)",
    code: "SH.XPD.CHEX.PC.CD",
  },
  {
    name: "Current health expenditure per capita, PPP (current international $)",
    code: "SH.XPD.CHEX.PP.CD",
  },
  {
    name: "Death rate, crude (per 1,000 people)",
    code: "SP.DYN.CDRT.IN",
  },
  {
    name: "Demand for family planning satisfied by any methods (% of married women with demand for family planning)",
    code: "SH.FPL.SATI.ZS",
  },
  {
    name: "Demand for family planning satisfied by modern methods (% of married women with demand for family planning)",
    code: "SH.FPL.SATM.ZS",
  },
  {
    name: "Diabetes prevalence (% of population ages 20 to 79)",
    code: "SH.STA.DIAB.ZS",
  },
  {
    name: "Diarrhea treatment (% of children under 5 receiving oral rehydration and continued feeding)",
    code: "SH.STA.ORCF.ZS",
  },
  {
    name: "Diarrhea treatment (% of children under 5 who received ORS packet)",
    code: "SH.STA.ORTH",
  },
  {
    name: "Domestic general government health expenditure (% of current health expenditure)",
    code: "SH.XPD.GHED.CH.ZS",
  },
  {
    name: "Domestic general government health expenditure (% of GDP)",
    code: "SH.XPD.GHED.GD.ZS",
  },
  {
    name: "Domestic general government health expenditure (% of general government expenditure)",
    code: "SH.XPD.GHED.GE.ZS",
  },
  {
    name: "Domestic general government health expenditure per capita (current US$)",
    code: "SH.XPD.GHED.PC.CD",
  },
  {
    name: "Domestic general government health expenditure per capita, PPP (current international $)",
    code: "SH.XPD.GHED.PP.CD",
  },
  {
    name: "Domestic private health expenditure (% of current health expenditure)",
    code: "SH.XPD.PVTD.CH.ZS",
  },
  {
    name: "Domestic private health expenditure per capita (current US$)",
    code: "SH.XPD.PVTD.PC.CD",
  },
  {
    name: "Domestic private health expenditure per capita, PPP  (current international $)",
    code: "SH.XPD.PVTD.PP.CD",
  },
  {
    name: "Exclusive breastfeeding (% of children under 6 months)",
    code: "SH.STA.BFED.ZS",
  },
  {
    name: "External health expenditure (% of current health expenditure)",
    code: "SH.XPD.EHEX.CH.ZS",
  },
  {
    name: "External health expenditure channeled through government (% of external health expenditure)",
    code: "SH.XPD.EHEX.EH.ZS",
  },
  {
    name: "External health expenditure per capita (current US$)",
    code: "SH.XPD.EHEX.PC.CD",
  },
  {
    name: "External health expenditure per capita, PPP (current international $)",
    code: "SH.XPD.EHEX.PP.CD",
  },
  {
    name: "Female headed households (% of households with a female head)",
    code: "SP.HOU.FEMA.ZS",
  },
  {
    name: "Fertility rate, total (births per woman)",
    code: "SP.DYN.TFRT.IN",
  },
  {
    name: "GNI per capita, Atlas method (current US$)",
    code: "NY.GNP.PCAP.CD",
  },
  {
    name: "Hospital beds (per 1,000 people)",
    code: "SH.MED.BEDS.ZS",
  },
  {
    name: "Human capital index (HCI) (scale 0-1)",
    code: "HD.HCI.OVRL",
  },
  {
    name: "Human capital index (HCI), female (scale 0-1)",
    code: "HD.HCI.OVRL.FE",
  },
  {
    name: "Human capital index (HCI), female, lower bound (scale 0-1)",
    code: "HD.HCI.OVRL.LB.FE",
  },
  {
    name: "Human capital index (HCI), female, upper bound (scale 0-1)",
    code: "HD.HCI.OVRL.UB.FE",
  },
  {
    name: "Human capital index (HCI), lower bound (scale 0-1)",
    code: "HD.HCI.OVRL.LB",
  },
  {
    name: "Human capital index (HCI), male (scale 0-1)",
    code: "HD.HCI.OVRL.MA",
  },
  {
    name: "Human capital index (HCI), male, lower bound (scale 0-1)",
    code: "HD.HCI.OVRL.LB.MA",
  },
  {
    name: "Human capital index (HCI), male, upper bound (scale 0-1)",
    code: "HD.HCI.OVRL.UB.MA",
  },
  {
    name: "Human capital index (HCI), upper bound (scale 0-1)",
    code: "HD.HCI.OVRL.UB",
  },
  {
    name: "Immunization, BCG (% of one-year-old children)",
    code: "SH.IMM.IBCG",
  },
  {
    name: "Immunization, DPT (% of children ages 12-23 months)",
    code: "SH.IMM.IDPT",
  },
  {
    name: "Immunization, HepB3 (% of one-year-old children)",
    code: "SH.IMM.HEPB",
  },
  {
    name: "Immunization, Hib3 (% of children ages 12-23 months)",
    code: "SH.IMM.HIB3",
  },
  {
    name: "Immunization, measles (% of children ages 12-23 months)",
    code: "SH.IMM.MEAS",
  },
  {
    name: "Immunization, measles second dose (% of children by the nationally recommended age)",
    code: "SH.IMM.MEA2",
  },
  {
    name: "Immunization, Pol3 (% of one-year-old children)",
    code: "SH.IMM.POL3",
  },
  {
    name: "Incidence of HIV, ages 15-24 (per 1,000 uninfected population ages 15-24)",
    code: "SH.HIV.INCD.YG.P3",
  },
  {
    name: "Incidence of HIV, ages 15-49 (per 1,000 uninfected population ages 15-49)",
    code: "SH.HIV.INCD.ZS",
  },
  {
    name: "Incidence of HIV, ages 50+ (per 1,000 uninfected population ages 50+)",
    code: "SH.HIV.INCD.50.P3",
  },
  {
    name: "Incidence of HIV, all (per 1,000 uninfected population)",
    code: "SH.HIV.INCD.TL.P3",
  },
  {
    name: "Incidence of malaria (per 1,000 population at risk)",
    code: "SH.MLR.INCD.P3",
  },
  {
    name: "Incidence of tuberculosis (per 100,000 people)",
    code: "SH.TBS.INCD",
  },
  {
    name: "Infant and young child feeding practices, all 3 IYCF (% children ages 6-23 months)",
    code: "SH.STA.IYCF.ZS",
  },
  {
    name: "Intermittent preventive treatment (IPT) of malaria in pregnancy (% of pregnant women)",
    code: "SH.MLR.IPTP.ZS",
  },
  {
    name: "Labor force, female (% of total labor force)",
    code: "SL.TLF.TOTL.FE.ZS",
  },
  {
    name: "Labor force, total",
    code: "SL.TLF.TOTL.IN",
  },
  {
    name: "Life expectancy at birth, female (years)",
    code: "SP.DYN.LE00.FE.IN",
  },
  {
    name: "Life expectancy at birth, male (years)",
    code: "SP.DYN.LE00.MA.IN",
  },
  {
    name: "Life expectancy at birth, total (years)",
    code: "SP.DYN.LE00.IN",
  },
  {
    name: "Lifetime risk of maternal death (%)",
    code: "SH.MMR.RISK.ZS",
  },
  {
    name: "Lifetime risk of maternal death (1 in: rate varies by country)",
    code: "SH.MMR.RISK",
  },
  {
    name: "Literacy rate, adult female (% of females ages 15 and above)",
    code: "SE.ADT.LITR.FE.ZS",
  },
  {
    name: "Literacy rate, adult male (% of males ages 15 and above)",
    code: "SE.ADT.LITR.MA.ZS",
  },
  {
    name: "Literacy rate, adult total (% of people ages 15 and above)",
    code: "SE.ADT.LITR.ZS",
  },
  {
    name: "Literacy rate, youth male (% of males ages 15-24)",
    code: "SE.ADT.1524.LT.MA.ZS",
  },
  {
    name: "Literacy rate, youth total (% of people ages 15-24)",
    code: "SE.ADT.1524.LT.ZS",
  },
  {
    name: "Low-birthweight babies (% of births)",
    code: "SH.STA.BRTW.ZS",
  },
  {
    name: "Malaria cases reported",
    code: "SH.STA.MALR",
  },
  {
    name: "Maternal leave benefits (% of wages paid in covered period)",
    code: "SH.MMR.WAGE.ZS",
  },
  {
    name: "Maternal mortality ratio (modeled estimate, per 100,000 live births)",
    code: "SH.STA.MMRT",
  },
  {
    name: "Maternal mortality ratio (national estimate, per 100,000 live births)",
    code: "SH.STA.MMRT.NE",
  },
  {
    name: "Mortality caused by road traffic injury (per 100,000 people)",
    code: "SH.STA.TRAF.P5",
  },
  {
    name: "Mortality caused by road traffic injury, female (per 100,000 female population)",
    code: "SH.STA.TRAF.FE.P5",
  },
  {
    name: "Mortality caused by road traffic injury, male (per 100,000 male population)",
    code: "SH.STA.TRAF.MA.P5",
  },
  {
    name: "Mortality from CVD, cancer, diabetes or CRD between exact ages 30 and 70 (%)",
    code: "SH.DYN.NCOM.ZS",
  },
  {
    name: "Mortality from CVD, cancer, diabetes or CRD between exact ages 30 and 70, female (%)",
    code: "SH.DYN.NCOM.FE.ZS",
  },
  {
    name: "Mortality from CVD, cancer, diabetes or CRD between exact ages 30 and 70, male (%)",
    code: "SH.DYN.NCOM.MA.ZS",
  },
  {
    name: "Mortality rate attributed to household and ambient air pollution (per 100,000 population)",
    code: "SH.STA.AIRP.P5",
  },
  {
    name: "Mortality rate attributed to household and ambient air pollution, age-standardized, female (per 100,000 female population)",
    code: "SH.STA.AIRP.FE.P5",
  },
  {
    name: "Mortality rate attributed to household and ambient air pollution, age-standardized, male (per 100,000 male population)",
    code: "SH.STA.AIRP.MA.P5",
  },
  {
    name: "Mortality rate attributed to unintentional poisoning (per 100,000 population)",
    code: "SH.STA.POIS.P5",
  },
  {
    name: "Mortality rate attributed to unintentional poisoning, female (per 100,000 female population)",
    code: "SH.STA.POIS.P5.FE",
  },
  {
    name: "Mortality rate attributed to unintentional poisoning, male (per 100,000 male population)",
    code: "SH.STA.POIS.P5.MA",
  },
  {
    name: "Mortality rate attributed to unsafe water, unsafe sanitation and lack of hygiene (per 100,000 population)",
    code: "SH.STA.WASH.P5",
  },
  {
    name: "Mortality rate attributed to unsafe water, unsafe sanitation and lack of hygiene, female (per 100,000 female population)",
    code: "SH.STA.WASH.FE.P5",
  },
  {
    name: "Mortality rate attributed to unsafe water, unsafe sanitation and lack of hygiene, male (per 100,000 male population)",
    code: "SH.STA.WASH.MA.P5",
  },
  {
    name: "Mortality rate, adult, female (per 1,000 female adults)",
    code: "SP.DYN.AMRT.FE",
  },
  {
    name: "Mortality rate, adult, male (per 1,000 male adults)",
    code: "SP.DYN.AMRT.MA",
  },
  {
    name: "Mortality rate, infant (per 1,000 live births)",
    code: "SP.DYN.IMRT.IN",
  },
  {
    name: "Mortality rate, infant, female (per 1,000 live births)",
    code: "SP.DYN.IMRT.FE.IN",
  },
  {
    name: "Mortality rate, infant, male (per 1,000 live births)",
    code: "SP.DYN.IMRT.MA.IN",
  },
  {
    name: "Mortality rate, neonatal (per 1,000 live births)",
    code: "SH.DYN.NMRT",
  },
  {
    name: "Mortality rate, under-5 (per 1,000)",
    code: "SH.DYN.MORT",
  },
  {
    name: "Mortality rate, under-5, female (per 1,000)",
    code: "SH.DYN.MORT.FE",
  },
  {
    name: "Mortality rate, under-5, male (per 1,000)",
    code: "SH.DYN.MORT.MA",
  },
  {
    name: "Net migration",
    code: "SM.POP.NETM",
  },
  {
    name: "Newborns protected against tetanus (%)",
    code: "SH.VAC.TTNS.ZS",
  },
  {
    name: "Number of deaths ages 10-14 years",
    code: "SH.DTH.1014",
  },
  {
    name: "Number of deaths ages 10-19 years",
    code: "SH.DTH.1019",
  },
  {
    name: "Number of deaths ages 15-19 years",
    code: "SH.DTH.1519",
  },
  {
    name: "Number of deaths ages 20-24 years",
    code: "SH.DTH.2024",
  },
  {
    name: "Number of deaths ages 5-9 years",
    code: "SH.DTH.0509",
  },
  {
    name: "Number of infant deaths",
    code: "SH.DTH.IMRT",
  },
  {
    name: "Number of infant deaths, female",
    code: "SH.DTH.IMRT.FE",
  },
  {
    name: "Number of infant deaths, male",
    code: "SH.DTH.IMRT.MA",
  },
  {
    name: "Number of maternal deaths",
    code: "SH.MMR.DTHS",
  },
  {
    name: "Number of neonatal deaths",
    code: "SH.DTH.NMRT",
  },
  {
    name: "Number of people pushed below the $1.90 ($ 2011 PPP) poverty line by out-of-pocket health care expenditure",
    code: "SH.UHC.NOP1.TO",
  },
  {
    name: "Number of people pushed below the $3.20 ($ 2011 PPP) poverty line by out-of-pocket health care expenditure",
    code: "SH.UHC.NOP2.TO",
  },
  {
    name: "Number of people pushed below the 60% median consumption poverty line by out-of-pocket health care expenditure",
    code: "SH.UHC.NOPR.TO",
  },
  {
    name: "Number of people pushed further below the $1.90 ($ 2011 PPP) poverty line by out-of-pocket health care expenditure",
    code: "SH.UHC.FBP1.TO",
  },
  {
    name: "Number of people pushed further below the $3.20 ($ 2011 PPP) poverty line by out-of-pocket health care expenditure",
    code: "SH.UHC.FBP2.TO",
  },
  {
    name: "Number of people pushed further below the 60% median consumption poverty line by out-of-pocket health care expenditure",
    code: "SH.UHC.FBPR.TO",
  },
  {
    name: "Number of people spending more than 10% of household consumption or income on out-of-pocket health care expenditure",
    code: "SH.UHC.OOPC.10.TO",
  },
  {
    name: "Number of people spending more than 25% of household consumption or income on out-of-pocket health care expenditure",
    code: "SH.UHC.OOPC.25.TO",
  },
  {
    name: "Number of people who are undernourished",
    code: "SN.ITK.DEFC",
  },
  {
    name: "Number of stillbirths",
    code: "SH.DTH.STLB",
  },
  {
    name: "Number of surgical procedures (per 100,000 population)",
    code: "SH.SGR.PROC.P5",
  },
  {
    name: "Number of under-five deaths",
    code: "SH.DTH.MORT",
  },
  {
    name: "Number of under-five deaths, female",
    code: "SH.DTH.MORT.FE",
  },
  {
    name: "Number of under-five deaths, male",
    code: "SH.DTH.MORT.MA",
  },
  {
    name: "Nurses and midwives (per 1,000 people)",
    code: "SH.MED.NUMW.P3",
  },
  {
    name: "Out-of-pocket expenditure (% of current health expenditure)",
    code: "SH.XPD.OOPC.CH.ZS",
  },
  {
    name: "Out-of-pocket expenditure per capita (current US$)",
    code: "SH.XPD.OOPC.PC.CD",
  },
  {
    name: "Out-of-pocket expenditure per capita, PPP (current international $)",
    code: "SH.XPD.OOPC.PP.CD",
  },
  {
    name: "People practicing open defecation (% of population)",
    code: "SH.STA.ODFC.ZS",
  },
  {
    name: "People practicing open defecation, rural (% of rural population)",
    code: "SH.STA.ODFC.RU.ZS",
  },
  {
    name: "People practicing open defecation, urban (% of urban population)",
    code: "SH.STA.ODFC.UR.ZS",
  },
  {
    name: "People using at least basic drinking water services (% of population)",
    code: "SH.H2O.BASW.ZS",
  },
  {
    name: "People using at least basic drinking water services, rural (% of rural population)",
    code: "SH.H2O.BASW.RU.ZS",
  },
  {
    name: "People using at least basic drinking water services, urban (% of urban population)",
    code: "SH.H2O.BASW.UR.ZS",
  },
  {
    name: "People using at least basic sanitation services (% of population)",
    code: "SH.STA.BASS.ZS",
  },
  {
    name: "People using at least basic sanitation services, rural (% of rural population)",
    code: "SH.STA.BASS.RU.ZS",
  },
  {
    name: "People using at least basic sanitation services, urban  (% of urban population)",
    code: "SH.STA.BASS.UR.ZS",
  },
  {
    name: "People using safely managed drinking water services (% of population)",
    code: "SH.H2O.SMDW.ZS",
  },
  {
    name: "People using safely managed drinking water services, rural (% of rural population)",
    code: "SH.H2O.SMDW.RU.ZS",
  },
  {
    name: "People using safely managed drinking water services, urban (% of urban population)",
    code: "SH.H2O.SMDW.UR.ZS",
  },
  {
    name: "People using safely managed sanitation services (% of population)",
    code: "SH.STA.SMSS.ZS",
  },
  {
    name: "People using safely managed sanitation services, rural (% of rural population)",
    code: "SH.STA.SMSS.RU.ZS",
  },
  {
    name: "People using safely managed sanitation services, urban  (% of urban population)",
    code: "SH.STA.SMSS.UR.ZS",
  },
  {
    name: "People with basic handwashing facilities including soap and water (% of population)",
    code: "SH.STA.HYGN.ZS",
  },
  {
    name: "People with basic handwashing facilities including soap and water, rural (% of rural population)",
    code: "SH.STA.HYGN.RU.ZS",
  },
  {
    name: "People with basic handwashing facilities including soap and water, urban (% of urban population)",
    code: "SH.STA.HYGN.UR.ZS",
  },
  {
    name: "Physicians (per 1,000 people)",
    code: "SH.MED.PHYS.ZS",
  },
  {
    name: "Population ages 00-04, female",
    code: "SP.POP.0004.FE",
  },
  {
    name: "Population ages 00-04, female (% of female population)",
    code: "SP.POP.0004.FE.5Y",
  },
  {
    name: "Population ages 00-04, male",
    code: "SP.POP.0004.MA",
  },
  {
    name: "Population ages 00-04, male (% of male population)",
    code: "SP.POP.0004.MA.5Y",
  },
  {
    name: "Population ages 00-14, total",
    code: "SP.POP.0014.TO",
  },
  {
    name: "Population ages 0-14 (% of total population)",
    code: "SP.POP.0014.TO.ZS",
  },
  {
    name: "Population ages 0-14, female",
    code: "SP.POP.0014.FE.IN",
  },
  {
    name: "Population ages 0-14, female (% of female population)",
    code: "SP.POP.0014.FE.ZS",
  },
  {
    name: "Population ages 0-14, male",
    code: "SP.POP.0014.MA.IN",
  },
  {
    name: "Population ages 0-14, male (% of male population)",
    code: "SP.POP.0014.MA.ZS",
  },
  {
    name: "Population ages 05-09, female",
    code: "SP.POP.0509.FE",
  },
  {
    name: "Population ages 05-09, female (% of female population)",
    code: "SP.POP.0509.FE.5Y",
  },
  {
    name: "Population ages 05-09, male",
    code: "SP.POP.0509.MA",
  },
  {
    name: "Population ages 05-09, male (% of male population)",
    code: "SP.POP.0509.MA.5Y",
  },
  {
    name: "Population ages 10-14, female",
    code: "SP.POP.1014.FE",
  },
  {
    name: "Population ages 10-14, female (% of female population)",
    code: "SP.POP.1014.FE.5Y",
  },
  {
    name: "Population ages 10-14, male",
    code: "SP.POP.1014.MA",
  },
  {
    name: "Population ages 10-14, male (% of male population)",
    code: "SP.POP.1014.MA.5Y",
  },
  {
    name: "Population ages 15-19, female",
    code: "SP.POP.1519.FE",
  },
  {
    name: "Population ages 15-19, female (% of female population)",
    code: "SP.POP.1519.FE.5Y",
  },
  {
    name: "Population ages 15-19, male",
    code: "SP.POP.1519.MA",
  },
  {
    name: "Population ages 15-19, male (% of male population)",
    code: "SP.POP.1519.MA.5Y",
  },
  {
    name: "Population ages 15-64 (% of total population)",
    code: "SP.POP.1564.TO.ZS",
  },
  {
    name: "Population ages 15-64, female",
    code: "SP.POP.1564.FE.IN",
  },
  {
    name: "Population ages 15-64, female (% of female population)",
    code: "SP.POP.1564.FE.ZS",
  },
  {
    name: "Population ages 15-64, male",
    code: "SP.POP.1564.MA.IN",
  },
  {
    name: "Population ages 15-64, male (% of male population)",
    code: "SP.POP.1564.MA.ZS",
  },
  {
    name: "Population ages 15-64, total",
    code: "SP.POP.1564.TO",
  },
  {
    name: "Population ages 20-24, female",
    code: "SP.POP.2024.FE",
  },
  {
    name: "Population ages 20-24, female (% of female population)",
    code: "SP.POP.2024.FE.5Y",
  },
  {
    name: "Population ages 20-24, male",
    code: "SP.POP.2024.MA",
  },
  {
    name: "Population ages 20-24, male (% of male population)",
    code: "SP.POP.2024.MA.5Y",
  },
  {
    name: "Population ages 25-29, female",
    code: "SP.POP.2529.FE",
  },
  {
    name: "Population ages 25-29, female (% of female population)",
    code: "SP.POP.2529.FE.5Y",
  },
  {
    name: "Population ages 25-29, male",
    code: "SP.POP.2529.MA",
  },
  {
    name: "Population ages 25-29, male (% of male population)",
    code: "SP.POP.2529.MA.5Y",
  },
  {
    name: "Population ages 30-34, female",
    code: "SP.POP.3034.FE",
  },
  {
    name: "Population ages 30-34, female (% of female population)",
    code: "SP.POP.3034.FE.5Y",
  },
  {
    name: "Population ages 30-34, male",
    code: "SP.POP.3034.MA",
  },
  {
    name: "Population ages 30-34, male (% of male population)",
    code: "SP.POP.3034.MA.5Y",
  },
  {
    name: "Population ages 35-39, female",
    code: "SP.POP.3539.FE",
  },
  {
    name: "Population ages 35-39, female (% of female population)",
    code: "SP.POP.3539.FE.5Y",
  },
  {
    name: "Population ages 35-39, male",
    code: "SP.POP.3539.MA",
  },
  {
    name: "Population ages 35-39, male (% of male population)",
    code: "SP.POP.3539.MA.5Y",
  },
  {
    name: "Population ages 40-44, female",
    code: "SP.POP.4044.FE",
  },
  {
    name: "Population ages 40-44, female (% of female population)",
    code: "SP.POP.4044.FE.5Y",
  },
  {
    name: "Population ages 40-44, male",
    code: "SP.POP.4044.MA",
  },
  {
    name: "Population ages 40-44, male (% of male population)",
    code: "SP.POP.4044.MA.5Y",
  },
  {
    name: "Population ages 45-49, female",
    code: "SP.POP.4549.FE",
  },
  {
    name: "Population ages 45-49, female (% of female population)",
    code: "SP.POP.4549.FE.5Y",
  },
  {
    name: "Population ages 45-49, male",
    code: "SP.POP.4549.MA",
  },
  {
    name: "Population ages 45-49, male (% of male population)",
    code: "SP.POP.4549.MA.5Y",
  },
  {
    name: "Population ages 50-54, female",
    code: "SP.POP.5054.FE",
  },
  {
    name: "Population ages 50-54, female (% of female population)",
    code: "SP.POP.5054.FE.5Y",
  },
  {
    name: "Population ages 50-54, male",
    code: "SP.POP.5054.MA",
  },
  {
    name: "Population ages 50-54, male (% of male population)",
    code: "SP.POP.5054.MA.5Y",
  },
  {
    name: "Population ages 55-59, female",
    code: "SP.POP.5559.FE",
  },
  {
    name: "Population ages 55-59, female (% of female population)",
    code: "SP.POP.5559.FE.5Y",
  },
  {
    name: "Population ages 55-59, male",
    code: "SP.POP.5559.MA",
  },
  {
    name: "Population ages 55-59, male (% of male population)",
    code: "SP.POP.5559.MA.5Y",
  },
  {
    name: "Population ages 60-64, female",
    code: "SP.POP.6064.FE",
  },
  {
    name: "Population ages 60-64, female (% of female population)",
    code: "SP.POP.6064.FE.5Y",
  },
  {
    name: "Population ages 60-64, male",
    code: "SP.POP.6064.MA",
  },
  {
    name: "Population ages 60-64, male (% of male population)",
    code: "SP.POP.6064.MA.5Y",
  },
  {
    name: "Population ages 65 and above (% of total population)",
    code: "SP.POP.65UP.TO.ZS",
  },
  {
    name: "Population ages 65 and above, female",
    code: "SP.POP.65UP.FE.IN",
  },
  {
    name: "Population ages 65 and above, female (% of female population)",
    code: "SP.POP.65UP.FE.ZS",
  },
  {
    name: "Population ages 65 and above, male",
    code: "SP.POP.65UP.MA.IN",
  },
  {
    name: "Population ages 65 and above, male (% of male population)",
    code: "SP.POP.65UP.MA.ZS",
  },
  {
    name: "Population ages 65 and above, total",
    code: "SP.POP.65UP.TO",
  },
  {
    name: "Population ages 65-69, female",
    code: "SP.POP.6569.FE",
  },
  {
    name: "Population ages 65-69, female (% of female population)",
    code: "SP.POP.6569.FE.5Y",
  },
  {
    name: "Population ages 65-69, male",
    code: "SP.POP.6569.MA",
  },
  {
    name: "Population ages 65-69, male (% of male population)",
    code: "SP.POP.6569.MA.5Y",
  },
  {
    name: "Population ages 70-74, female",
    code: "SP.POP.7074.FE",
  },
  {
    name: "Population ages 70-74, female (% of female population)",
    code: "SP.POP.7074.FE.5Y",
  },
  {
    name: "Population ages 70-74, male",
    code: "SP.POP.7074.MA",
  },
  {
    name: "Population ages 70-74, male (% of male population)",
    code: "SP.POP.7074.MA.5Y",
  },
  {
    name: "Population ages 75-79, female",
    code: "SP.POP.7579.FE",
  },
  {
    name: "Population ages 75-79, female (% of female population)",
    code: "SP.POP.7579.FE.5Y",
  },
  {
    name: "Population ages 75-79, male",
    code: "SP.POP.7579.MA",
  },
  {
    name: "Population ages 75-79, male (% of male population)",
    code: "SP.POP.7579.MA.5Y",
  },
  {
    name: "Population ages 80 and above, female",
    code: "SP.POP.80UP.FE",
  },
  {
    name: "Population ages 80 and above, male",
    code: "SP.POP.80UP.MA",
  },
  {
    name: "Population ages 80 and above, male (% of male population)",
    code: "SP.POP.80UP.MA.5Y",
  },
  {
    name: "Population ages 80 and older, female (% of female population)",
    code: "SP.POP.80UP.FE.5Y",
  },
  {
    name: "Population growth (annual %)",
    code: "SP.POP.GROW",
  },
  {
    name: "Population, female",
    code: "SP.POP.TOTL.FE.IN",
  },
  {
    name: "Population, female (% of total population)",
    code: "SP.POP.TOTL.FE.ZS",
  },
  {
    name: "Population, male",
    code: "SP.POP.TOTL.MA.IN",
  },
  {
    name: "Population, male (% of total population)",
    code: "SP.POP.TOTL.MA.ZS",
  },
  {
    name: "Population, total",
    code: "SP.POP.TOTL",
  },
  {
    name: "Postnatal care coverage (% mothers)",
    code: "SH.STA.PNVC.ZS",
  },
  {
    name: "Poverty headcount ratio at national poverty line (% of population)",
    code: "SI.POV.NAHC",
  },
  {
    name: "Pregnant women receiving prenatal care (%)",
    code: "SH.STA.ANVC.ZS",
  },
  {
    name: "Pregnant women receiving prenatal care of at least four visits (% of pregnant women)",
    code: "SH.STA.ANV4.ZS",
  },
  {
    name: "Prevalence of anemia among children (% of children ages 6-59 months)",
    code: "SH.ANM.CHLD.ZS",
  },
  {
    name: "Prevalence of anemia among non-pregnant women (% of women ages 15-49)",
    code: "SH.ANM.NPRG.ZS",
  },
  {
    name: "Prevalence of anemia among pregnant women (%)",
    code: "SH.PRG.ANEM",
  },
  {
    name: "Prevalence of anemia among women of reproductive age (% of women ages 15-49)",
    code: "SH.ANM.ALLW.ZS",
  },
  {
    name: "Prevalence of current tobacco use (% of adults)",
    code: "SH.PRV.SMOK",
  },
  {
    name: "Prevalence of current tobacco use, females (% of female adults)",
    code: "SH.PRV.SMOK.FE",
  },
  {
    name: "Prevalence of current tobacco use, males (% of male adults)",
    code: "SH.PRV.SMOK.MA",
  },
  {
    name: "Prevalence of HIV, female (% ages 15-24)",
    code: "SH.HIV.1524.FE.ZS",
  },
  {
    name: "Prevalence of HIV, male (% ages 15-24)",
    code: "SH.HIV.1524.MA.ZS",
  },
  {
    name: "Prevalence of HIV, total (% of population ages 15-49)",
    code: "SH.DYN.AIDS.ZS",
  },
  {
    name: "Prevalence of hypertension (% of adults ages 30-79)",
    code: "SH.HTN.PREV.ZS",
  },
  {
    name: "Prevalence of hypertension, female (% of female adults ages 30-79)",
    code: "SH.HTN.PREV.FE.ZS",
  },
  {
    name: "Prevalence of hypertension, male (% of male adults ages 30-79)",
    code: "SH.HTN.PREV.MA.ZS",
  },
  {
    name: "Prevalence of overweight (% of adults)",
    code: "SH.STA.OWAD.ZS",
  },
  {
    name: "Prevalence of overweight (% of children under 5)",
    code: "SH.STA.OWGH.ZS",
  },
  {
    name: "Prevalence of overweight (modeled estimate, % of children under 5)",
    code: "SH.STA.OWGH.ME.ZS",
  },
  {
    name: "Prevalence of overweight, female (% of children under 5)",
    code: "SH.STA.OWGH.FE.ZS",
  },
  {
    name: "Prevalence of overweight, female (% of female adults)",
    code: "SH.STA.OWAD.FE.ZS",
  },
  {
    name: "Prevalence of overweight, male (% of children under 5)",
    code: "SH.STA.OWGH.MA.ZS",
  },
  {
    name: "Prevalence of overweight, male (% of male adults)",
    code: "SH.STA.OWAD.MA.ZS",
  },
  {
    name: "Prevalence of severe wasting, weight for height (% of children under 5)",
    code: "SH.SVR.WAST.ZS",
  },
  {
    name: "Prevalence of severe wasting, weight for height, female (% of children under 5)",
    code: "SH.SVR.WAST.FE.ZS",
  },
  {
    name: "Prevalence of severe wasting, weight for height, male (% of children under 5)",
    code: "SH.SVR.WAST.MA.ZS",
  },
  {
    name: "Prevalence of stunting, height for age (% of children under 5)",
    code: "SH.STA.STNT.ZS",
  },
  {
    name: "Prevalence of stunting, height for age (modeled estimate, % of children under 5)",
    code: "SH.STA.STNT.ME.ZS",
  },
  {
    name: "Prevalence of stunting, height for age, female (% of children under 5)",
    code: "SH.STA.STNT.FE.ZS",
  },
  {
    name: "Prevalence of stunting, height for age, male (% of children under 5)",
    code: "SH.STA.STNT.MA.ZS",
  },
  {
    name: "Prevalence of syphilis (% of women attending antenatal care)",
    code: "SH.PRG.SYPH.ZS",
  },
  {
    name: "Prevalence of undernourishment (% of population)",
    code: "SN.ITK.DEFC.ZS",
  },
  {
    name: "Prevalence of underweight, weight for age (% of children under 5)",
    code: "SH.STA.MALN.ZS",
  },
  {
    name: "Prevalence of underweight, weight for age, female (% of children under 5)",
    code: "SH.STA.MALN.FE.ZS",
  },
  {
    name: "Prevalence of underweight, weight for age, male (% of children under 5)",
    code: "SH.STA.MALN.MA.ZS",
  },
  {
    name: "Prevalence of wasting, weight for height (% of children under 5)",
    code: "SH.STA.WAST.ZS",
  },
  {
    name: "Prevalence of wasting, weight for height, female (% of children under 5)",
    code: "SH.STA.WAST.FE.ZS",
  },
  {
    name: "Prevalence of wasting, weight for height, male (% of children under 5)",
    code: "SH.STA.WAST.MA.ZS",
  },
  {
    name: "Primary completion rate, female (% of relevant age group)",
    code: "SE.PRM.CMPT.FE.ZS",
  },
  {
    name: "Primary completion rate, male (% of relevant age group)",
    code: "SE.PRM.CMPT.MA.ZS",
  },
  {
    name: "Primary completion rate, total (% of relevant age group)",
    code: "SE.PRM.CMPT.ZS",
  },
  {
    name: "Probability of dying among adolescents ages 10-14 years (per 1,000)",
    code: "SH.DYN.1014",
  },
  {
    name: "Probability of dying among adolescents ages 10-19 years (per 1,000)",
    code: "SH.DYN.1019",
  },
  {
    name: "Probability of dying among adolescents ages 15-19 years (per 1,000)",
    code: "SH.DYN.1519",
  },
  {
    name: "Probability of dying among children ages 5-9 years (per 1,000)",
    code: "SH.DYN.0509",
  },
  {
    name: "Probability of dying among youth ages 20-24 years (per 1,000)",
    code: "SH.DYN.2024",
  },
  {
    name: "Proportion of population pushed below the $1.90 ($ 2011 PPP) poverty line by out-of-pocket health care expenditure (%)",
    code: "SH.UHC.NOP1.ZS",
  },
  {
    name: "Proportion of population pushed below the $3.20 ($ 2011 PPP) poverty line by out-of-pocket health care expenditure (%)",
    code: "SH.UHC.NOP2.ZS",
  },
  {
    name: "Proportion of population pushed below the 60% median consumption poverty line by out-of-pocket health expenditure (%)",
    code: "SH.UHC.NOPR.ZS",
  },
  {
    name: "Proportion of population pushed further below the $1.90 ($ 2011 PPP) poverty line by out-of-pocket health care expenditure (%)",
    code: "SH.UHC.FBP1.ZS",
  },
  {
    name: "Proportion of population pushed further below the $3.20 ($ 2011 PPP) poverty line by out-of-pocket health care expenditure (%)",
    code: "SH.UHC.FBP2.ZS",
  },
  {
    name: "Proportion of population pushed further below the 60% median consumption poverty line by out-of-pocket health care expenditure (%)",
    code: "SH.UHC.FBPR.ZS",
  },
  {
    name: "Proportion of population spending more than 10% of household consumption or income on out-of-pocket health care expenditure (%)",
    code: "SH.UHC.OOPC.10.ZS",
  },
  {
    name: "Proportion of population spending more than 25% of household consumption or income on out-of-pocket health care expenditure (%)",
    code: "SH.UHC.OOPC.25.ZS",
  },
  {
    name: "Public spending on education, total (% of GDP)",
    code: "SE.XPD.TOTL.GD.ZS",
  },
  {
    name: "Ratio of school attendance of orphans to school attendance of non-orphans ages 10-14",
    code: "SE.ENR.ORPH",
  },
  {
    name: "Ratio of young literate females to males (% ages 15-24)",
    code: "SE.ADT.1524.LT.FM.ZS",
  },
  {
    name: "Risk of catastrophic expenditure for surgical care (% of people at risk)",
    code: "SH.SGR.CRSK.ZS",
  },
  {
    name: "Risk of impoverishing expenditure for surgical care (% of people at risk)",
    code: "SH.SGR.IRSK.ZS",
  },
  {
    name: "Rural population",
    code: "SP.RUR.TOTL",
  },
  {
    name: "Rural population (% of total population)",
    code: "SP.RUR.TOTL.ZS",
  },
  {
    name: "Rural population growth (annual %)",
    code: "SP.RUR.TOTL.ZG",
  },
  {
    name: "Rural poverty headcount ratio at national poverty lines (% of rural population)",
    code: "SI.POV.RUHC",
  },
  {
    name: "School enrollment, primary (% gross)",
    code: "SE.PRM.ENRR",
  },
  {
    name: "School enrollment, primary (% net)",
    code: "SE.PRM.NENR",
  },
  {
    name: "School enrollment, primary, female (% gross)",
    code: "SE.PRM.ENRR.FE",
  },
  {
    name: "School enrollment, primary, female (% net)",
    code: "SE.PRM.NENR.FE",
  },
  {
    name: "School enrollment, primary, male (% gross)",
    code: "SE.PRM.ENRR.MA",
  },
  {
    name: "School enrollment, primary, male (% net)",
    code: "SE.PRM.NENR.MA",
  },
  {
    name: "School enrollment, secondary (% gross)",
    code: "SE.SEC.ENRR",
  },
  {
    name: "School enrollment, secondary (% net)",
    code: "SE.SEC.NENR",
  },
  {
    name: "School enrollment, secondary, female (% gross)",
    code: "SE.SEC.ENRR.FE",
  },
  {
    name: "School enrollment, secondary, female (% net)",
    code: "SE.SEC.NENR.FE",
  },
  {
    name: "School enrollment, secondary, male (% gross)",
    code: "SE.SEC.ENRR.MA",
  },
  {
    name: "School enrollment, secondary, male (% net)",
    code: "SE.SEC.NENR.MA",
  },
  {
    name: "School enrollment, tertiary (% gross)",
    code: "SE.TER.ENRR",
  },
  {
    name: "School enrollment, tertiary, female (% gross)",
    code: "SE.TER.ENRR.FE",
  },
  {
    name: "Sex ratio at birth (male births per female births)",
    code: "SP.POP.BRTH.MF",
  },
  {
    name: "Share of women employed in the nonagricultural sector (% of total nonagricultural employment)",
    code: "SL.EMP.INSV.FE.ZS",
  },
  {
    name: "Specialist surgical workforce (per 100,000 population)",
    code: "SH.MED.SAOP.P5",
  },
  {
    name: "Stillbirth rate (per 1,000 total births)",
    code: "SH.DYN.STLB",
  },
  {
    name: "Suicide mortality rate (per 100,000 population)",
    code: "SH.STA.SUIC.P5",
  },
  {
    name: "Suicide mortality rate, female (per 100,000 female population)",
    code: "SH.STA.SUIC.FE.P5",
  },
  {
    name: "Suicide mortality rate, male (per 100,000 male population)",
    code: "SH.STA.SUIC.MA.P5",
  },
  {
    name: "Survival to age 65, female (% of cohort)",
    code: "SP.DYN.TO65.FE.ZS",
  },
  {
    name: "Survival to age 65, male (% of cohort)",
    code: "SP.DYN.TO65.MA.ZS",
  },
  {
    name: "Teenage mothers (% of women ages 15-19 who have had children or are currently pregnant)",
    code: "SP.MTR.1519.ZS",
  },
  {
    name: "Total alcohol consumption per capita (liters of pure alcohol, projected estimates, 15+ years of age)",
    code: "SH.ALC.PCAP.LI",
  },
  {
    name: "Total alcohol consumption per capita, female (liters of pure alcohol, projected estimates, female 15+ years of age)",
    code: "SH.ALC.PCAP.FE.LI",
  },
  {
    name: "Total alcohol consumption per capita, male (liters of pure alcohol, projected estimates, male 15+ years of age)",
    code: "SH.ALC.PCAP.MA.LI",
  },
  {
    name: "Treatment for hypertension (% of adults ages 30-79 with hypertension)",
    code: "SH.HTN.TRET.ZS",
  },
  {
    name: "Treatment for hypertension, female (% of female adults ages 30-79 with hypertension)",
    code: "SH.HTN.TRET.FE.ZS",
  },
  {
    name: "Treatment for hypertension, male (% of male adults ages 30-79 with hypertension)",
    code: "SH.HTN.TRET.MA.ZS",
  },
  {
    name: "Tuberculosis case detection rate (%, all forms)",
    code: "SH.TBS.DTEC.ZS",
  },
  {
    name: "Tuberculosis death rate (per 100,000 people)",
    code: "SH.TBS.MORT",
  },
  {
    name: "Tuberculosis treatment success rate (% of new cases)",
    code: "SH.TBS.CURE.ZS",
  },
  {
    name: "UHC service coverage index",
    code: "SH.UHC.SRVS.CV.XD",
  },
  {
    name: "Unemployment, female (% of female labor force)",
    code: "SL.UEM.TOTL.FE.ZS",
  },
  {
    name: "Unemployment, male (% of male labor force)",
    code: "SL.UEM.TOTL.MA.ZS",
  },
  {
    name: "Unemployment, total (% of total labor force)",
    code: "SL.UEM.TOTL.ZS",
  },
  {
    name: "Unmet need for contraception (% of married women ages 15-49)",
    code: "SP.UWT.TFRT",
  },
  {
    name: "Urban population",
    code: "SP.URB.TOTL",
  },
  {
    name: "Urban population (% of total population)",
    code: "SP.URB.TOTL.IN.ZS",
  },
  {
    name: "Urban population growth (annual %)",
    code: "SP.URB.GROW",
  },
  {
    name: "Urban poverty headcount ratio at national poverty lines (% of urban population)",
    code: "SI.POV.URHC",
  },
  {
    name: "Use of insecticide-treated bed nets (% of under-5 population)",
    code: "SH.MLR.NETS.ZS",
  },
  {
    name: "Vitamin A supplementation coverage rate (% of children ages 6-59 months)",
    code: "SN.ITK.VITA.ZS",
  },
  {
    name: "Wanted fertility rate (births per woman)",
    code: "SP.DYN.WFRT",
  },
  {
    name: "Women who were first married by age 15 (% of women ages 20-24)",
    code: "SP.M15.2024.FE.ZS",
  },
  {
    name: "Women who were first married by age 18 (% of women ages 20-24)",
    code: "SP.M18.2024.FE.ZS",
  },
  {
    name: "Women's share of population ages 15+ living with HIV (%)",
    code: "SH.DYN.AIDS.FE.ZS",
  },
  {
    name: "Young people (ages 15-24) newly infected with HIV",
    code: "SH.HIV.INCD.YG",
  },
];

async function seed(fileNumber = 1) {
  const csvFilePath = `./utils/csv/file (${fileNumber}).csv`;
  let values = await getCsvValues(csvFilePath);
  values = values.map((value) => {
    return {
      serieId: value["SerieId"],
      serieText: serieText.filter((serie) => serie.code === value["SerieId"])[0]
        .name,
      countryId: value["CountryId"],
      yearId: value["YearId"],
      value: value["value"],
    };
  });

  await Entry.bulkCreate(values).then(async () => {
    console.log("Entries data have been saved");
    console.log(number);
    number++;
    if (number < 14) {
      seed(number);
    }
  });
}

await db.sync({ force: true });
seed();
