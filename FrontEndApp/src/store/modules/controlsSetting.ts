// controlsStore.ts
import { createBaseStore } from './baseStore';

// Define the services controls
const servicesControls = [
  { key: "areas", icon: "mdi:map", label: "Areas" },
  { key: "establishments", icon: "mdi:office-building", label: "Establishments" },
  { key: "reporttypes", icon: "mdi:chart-bar", label: "Report Types" },
  { key: "trainingclasses", icon: "mdi:school", label: "Training Classes" },
  { key: "executingagencies", icon: "mdi:account-group", label: "Executing Agencies" },
  { key: "resources", icon: "mdi:resource", label: "Resources" },
  { key: "performanceindicators", icon: "mdi:chart-line", label: "Performance Indicators" },
  { key: "maintenancetypes", icon: "mdi:wrench", label: "Maintenance Types" },
  { key: "requesttypes", icon: "mdi:file-document", label: "Request Types" },
  { key: "maintenancerequestingagencies", icon: "mdi:account-hard-hat", label: "Maintenance Requesting Agencies" },
  { key: "departments", icon: "mdi:domain", label: "Departments" }
];

// Generic function to initialize state for a given service
function initState<T>(defaults: T): () => T {
  return () => ({
    ...defaults,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
}

// Define the default state for each service
const defaultStates = {
  areas: { name: '', state: true },
  establishments: { name: '', state: true }, // Adjust fields as needed
  reporttypes: { name: '', state: true }  
};

// Create and export stores for each service
export const storesSettings = servicesControls.reduce((acc, control) => {
  const { key } = control;
  const initStateFunction = initState(defaultStates[key]);
  acc[key] = createBaseStore<API.AdministrativeArea>(key, initStateFunction, key);
  return acc;
}, {} as Record<string, ReturnType<typeof createBaseStore>>);

