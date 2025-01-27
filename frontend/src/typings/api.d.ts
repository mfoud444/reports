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
  type userType  = 'Client'  | 'Admin';
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


  interface Dashboard {
    clientCount: number;
    expertCount: number;
    adminCount: number;
    aiCompanyCount: number;
    aiModelCount: number;
    questionCount: number;
  }


}
