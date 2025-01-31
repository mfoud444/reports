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


email:string;
  // Revenue, Expense, Remaining, and Percentage fields
  revenueType1: string;
  revenueAmount1: string;
  expenseAmount1: string;
  remainingAmount1: string;
  percentage1: string;
  revenueType2: string;
  revenueAmount2: string;
  expenseAmount2: string;
  remainingAmount2: string;
  percentage2: string;
  revenueType3: string;
  revenueAmount3: string;
  expenseAmount3: string;
  remainingAmount3: string;
  percentage3: string;
  revenueType4: string;
  revenueAmount4: string;
  expenseAmount4: string;
  remainingAmount4: string;
  percentage4: string;
  revenueType5: string;
  revenueAmount5: string;
  expenseAmount5: string;
  remainingAmount5: string;
  percentage5: string;
  revenueType6: string;
  revenueAmount6: string;
  expenseAmount6: string;
  remainingAmount6: string;
  percentage6: string;
  revenueType7: string;
  revenueAmount7: string;
  expenseAmount7: string;
  remainingAmount7: string;
  percentage7: string;
  revenueType8: string;
  revenueAmount8: string;
  expenseAmount8: string;
  remainingAmount8: string;
  percentage8: string;

  // Total fields
  totalRevenue: string;
  totalExpenses: string;
  totalRemaining: string;
  totalPercentage: string;
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
