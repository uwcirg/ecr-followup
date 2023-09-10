// import {PUBLIC_BASE_URL} from '$env/static/public';
import { dev } from '$app/environment';

// export const API_BASE = 'https://smart-health-links-server.cirg.washington.edu/api'
export const API_BASE = 'http://localhost:9000/api';

export const INTERMEDIATE_FHIR_SERVER_BASE = 'https://fhir.ips-demo.dev.cirg.uw.edu/fhir';
// export const INTERMEDIATE_FHIR_SERVER_BASE = 'https://hapi.fhir.org/baseR4';

export const RESOURCES_TO_LOAD_KEY = 'RESOURCES_TO_LOAD';
export const PATIENT_REFERENCE_KEY = 'PATIENT_REFERENCE_TO_LOAD';
export const IPS_URL_KEY = 'IPS_URL';

export const EPIC_CLIENT_ID = '451709b5-ab93-4dc1-8fb1-6cd9104bee7a';
export const CERNER_CLIENT_ID = '2b8c090d-04e3-4df7-b2f9-5a4c281cfd66';
export const SOF_REDIRECT_URI = '/create/confirm';
export const SOF_RESOURCES = [
  'Patient',
  'AllergyIntolerance',
  // 'MedicationStatement', // Not in EPIC USCDI R4
  'MedicationRequest',
  // 'Medication', // can't search by patient; "Only an _ID search is allowed."
  'Condition',
  'Observation', // "Must have either code or category."
  // 'Organization', // can't search by patient; "Only an _ID search is allowed."
  'Immunization',
  // 'Device',
  // 'DeviceUseStatement', // Not in EPIC USCDI R4
  'DiagnosticReport', // TODO change to subject
  // 'ImagingStudy', // Not in EPIC USCDI R4
  // 'Media', // Not in EPIC USCDI R4
  // 'Practitioner', // can't search by patient; "Either name, family, or identifier is a required parameter."
  // 'PractitionerRole',  // can't search by patient; "An identifier, practitioner, organization, location, or specialty parameter is required."
  'Procedure', // TODO change to subject
  // 'Specimen', // Not in EPIC USCDI R4
];

export const VIEWER_BASE = new URL(
  `/ips${dev ? '/index.html' : ''}#`,
  window.location.href
).toString();
export const EXAMPLE_IPS = {
  'Maria SEATTLE Gravitate': 'https://fhir.ips-demo.dev.cirg.uw.edu/fhir/Patient/14599/$summary',
  'Peter Keith Jones': 'https://fhir.ips-demo.dev.cirg.uw.edu/fhir/Patient/11013/$summary',
  'Angela Roster': 'https://fhir.ips-demo.dev.cirg.uw.edu/fhir/Patient/10965/$summary',
  'Horace Skelly': 'https://fhir.ips-demo.dev.cirg.uw.edu/fhir/Patient/11142/$summary',
  'Anonymous': 'https://fhir.ips-demo.dev.cirg.uw.edu/fhir/Patient/10999/$summary'
};
export const EXAMPLE_IPS_DEFAULT = 'Maria SEATTLE Gravitate';
  // 'https://ips.health/fhir/Patient/98549f1a-e0d5-4454-849c-f5b97d3ed299/$summary';
