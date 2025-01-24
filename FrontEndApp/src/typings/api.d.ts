declare namespace API {


  interface ReportModel {
    region: string;
    college: string;
    reportType: 'achievement' | 'financial' | 'maintenance';
    semester: string;
    executionDate: string;
    institution: string;
    topic: string;
    supervisor: string;
    resources: string;
    operationalGoal: string;
    executionProcedures: string;
    challenges: string;
    recommendations: string;
    documentation1: File | null;
    documentation2: File | null;
    documentation3: File | null;
    documentation4: string | null;
    performanceIndicator: string;
    target: number;
    achieved: number;
    percentage: string;
    reporter: string;
    reportDate: string;
    approver: string;
    stamp: File | null;
    generalGoal: string;
    mainSupervisor: string;
    subSupervisor: string;
    auditDate: string;
    maintenanceType: string;
    maintenanceDate: string;
    maintenanceTime: string;
    requestType: string;
    maintenanceTopic: string;
    faultDescription: string;
    department: string;
  }

 interface ReportStep {
  title: string;
  status: string;
}

  interface AdministrativeArea {
    id?: number; // Auto-generated ID
    name: string; // Name of the administrative area
    state: boolean; // State (default: true)
    createdAt: string; // Timestamp when the record was created
    updatedAt: string; // Timestamp when the record was last updated
}
interface Establishment {
  id: number; // Auto-generated ID
  name: string; // Name of the establishment
  administrative_area_id: number; // Foreign key to AdministrativeArea
  state: boolean; // State (default: true)
  created_at: string; // Timestamp when the record was created
  updated_at: string; // Timestamp when the record was last updated
}

interface ReportType {
  id: number; // Auto-generated ID
  name: string; // Name of the report type
  state: boolean; // State (default: true)
  created_at: string; // Timestamp when the record was created
  updated_at: string; // Timestamp when the record was last updated
}









  type inputOutputData = 'Text' | 'Image' | 'Audio' | 'Video' | 'Documents'
  type userType  = 'Client' | 'Agri-Expert' | 'Admin';
  type userGender  = 'Male' | 'Female' | 'Other';

  interface UserMetaData{
    avatar: string
    fristName: string
    description?: string
    lastName?: string;
    avatarUrl?: string;
    dateOfBirth?: string; 
    state?: boolean;
    gender?: userGender
    userType?:userType
    country?: string;
    email?:string
    password?:string
    createdAt?: string; 
    updatedAt?: string; 
  }

  interface CompanyAI {
    id?: string; 
    name: string;
    apiUrl: string;
    apiKey: string;
    companyUrl?: string;
    logoUrl?: string;

    isActivate: boolean;
    createdAt: string;
    updatedAt: string;
  }


  interface DashboardState {
    clientCount: number
    expertCount: number
    adminCount: number
    aiCompanyCount: number
    aiModelCount: number
    questionCount: number
    convAICount: number
    convExpertCount: number
    monthlyData: MonthlyData[]
    monthlyDataLoading: boolean
  }

  interface ModelAI {
    id?: string;
    companyId: string;
    name: string;
    modelCode: string;
    description?: string;
    isActivate: boolean;
    version?: string;
    createdAt: string;
    updatedAt: string;
    inputData?: inputOutputData[];
    outputData?: inputOutputData[];
    maxTokens?: number;
    temperature?: number;
    topP?: number;
    topK?: number;
    repetitionPenalty?: number;
    stop?: string[];
    stream?: boolean;
  }


  interface Dashboard {
    clientCount: number;
    expertCount: number;
    adminCount: number;
    aiCompanyCount: number;
    aiModelCount: number;
    questionCount: number;
  }


  interface Country {
    id?: string; // optional unique identifier
    name: string;
    alpha_2: string; // 2-character country code
    alpha_3: string; // 3-character country code
    countryCode: string; // numeric country code
    iso_31662?: string; // optional ISO 3166-2 code
    region: string;
    subRegion: string;
    intermediateRegion?: string; // optional intermediate region
    regionCode: string;
    subRegionCode: string;
    intermediateRegionCode?: string; // optional intermediate region code
    isActivate: boolean;
    createdAt: string;
    updatedAt: string;
  }
}
